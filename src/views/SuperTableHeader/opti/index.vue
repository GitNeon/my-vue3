<template>
  <div class="container">
    <el-table :data="tableData" border style="width: 1200px" :header-cell-style="headerStyle">
      <!-- 动态渲染 -->
      <DynamicColumn v-for="(col, idx) in tableColumns" :key="idx" :column="col" />
    </el-table>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue';
import DynamicColumn from './DynamicColumn.vue';

const tableData = ref([]);

// 表头配置（递归结构）
const tableColumns = ref([
  { prop: 'key1', label: '单位', width: 100 },
  {
    prop: 'hj_flag',
    label: '合计',
    customRowSpan: 3,
    children: [
      {
        prop: 'hj',
        label: '合计',
        children: [
          {
            prop: 'hj',
            label: '合计',
            children: [
              {
                prop: 'total',
                label: '1=2+3+4+5+6',
                width: 200
              }
            ]
          }
        ]
      }
    ]
  },
  {
    prop: 'dsdw',
    label: '应参加税务代收单位',
    children: [
      {
        prop: 'yjh',
        label: '已建会',
        children: [
          {
            prop: 'ddjh',
            label: '单独基层工会',
            children: [{ prop: 'number2', label: '2', width: 120 }]
          },
          {
            prop: 'lhgh',
            label: '联合工会',
            children: [{ prop: 'number3', label: '3', width: 120 }]
          }
        ]
      },
      {
        prop: 'yjhcbz',
        label: '已建会筹备中',
        children: [
          {
            prop: 'yjhcbz_ddjh',
            label: '单独基层工会',
            children: [{ prop: 'number4', label: '4', width: 120 }]
          }
        ]
      },
      {
        prop: 'yjhsjzj',
        label: '已建会上级组建',
        children: [
          {
            prop: 'yjhsjzj_lhgh',
            label: '联合工会',
            children: [{ prop: 'number5', label: '5', width: 120 }]
          }
        ]
      },
      {
        prop: 'wjh_flag',
        label: '未建会',
        rowspan: 2,
        children: [
          {
            prop: 'wjh',
            label: '未建会',
            hide: true,
            children: [{ prop: 'number6', label: '6', width: 120 }]
          }
        ]
      }
    ]
  }
]);

// 集中处理 rowspan、隐藏等规则
const headerStyle = headerConfig => {
  const { column } = headerConfig;

  setTimeout(() => {
    console.log('column: ', column);
    const domColumn = document.getElementsByClassName(column.id);
    if (column.hide) {
      domColumn[0].setAttribute('style', 'display: none');
    }
    if (column.customRowSpan) {
      domColumn[0].setAttribute('rowspan', column.customRowSpan);
    }
  }, 1000);

  return { textAlign: 'center' };
};
</script>
