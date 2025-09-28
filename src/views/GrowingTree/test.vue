<script>
/* 这是测试文件, 给出了组件用法，可以删除 */
import GrowingTree from '@/views/GrowingTree/index.vue';

export default {
  name: 'test',
  components: {
    GrowingTree
  },
  data() {
    return {
      treeConfig: {
        xAxis: {
          name: '累计纳税金额',
          data: ['10万元', '100万元', '500万元', '1000万元', '10000万元']
        },
        yAxis: {
          name: '成立年限',
          data: ['10年', '5年', '3年', '1年']
        },
        // 树的叶子数据，注意是从右下角开始的，按照右-左-右-左...最后顶部顺序展示
        treeList: [
          {
            title: '策',
            subTitle: '加计抵减',
            // 为0时默认不展示，如果有需要，请修改代码
            eventCount: 0,
            date: '2023/07/10',
            // 状态，normal-正常，danger-风险
            status: 'normal',
            icon: 'a'
          },
          {
            title: '迁',
            subTitle: '跨区迁移',
            eventCount: 4,
            date: '2023/07/11',
            status: 'normal',
            icon: 'b'
          },
          {
            title: '事',
            subTitle: '风险应对',
            eventCount: 5,
            date: '2023/12/31',
            status: 'danger',
            icon: 'c'
          },
          {
            title: '人',
            subTitle: '法人变更',
            eventCount: 3,
            date: '2024/06/16',
            status: 'danger',
            icon: 'd'
          },
          {
            title: '票',
            subTitle: '额度调整',
            eventCount: 7,
            date: '2025/03/20',
            status: 'danger',
            icon: 'e'
          },
          {
            title: '户',
            subTitle: '名称变更',
            eventCount: 13,
            date: '2025/03/20',
            status: 'normal',
            icon: 'f'
          }
        ]
      }
    };
  },
  methods: {
    handleTreeClick(nodeData) {
      console.log('叶子数据：', nodeData);
    }
  }
};
</script>

<template>
  <div style="width: fit-content; height: fit-content; padding: 20px">
    <GrowingTree :config="treeConfig" @tree-click="handleTreeClick"></GrowingTree>
  </div>
</template>

<style scoped></style>
