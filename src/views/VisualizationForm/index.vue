<template>
  <div style="height: 100%">
    <h1>可视化表单设计</h1>
    <el-container style="height: 90%">
      <el-aside width="200px">
        <el-menu default-active="1" @select="handleSelect">
          <el-menu-item index="1">自定义参数</el-menu-item>
          <el-menu-item index="2">自定义表头-拖拽生成</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <component :is="componentMap[_name]"></component>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import CustomParams from './custom-params.vue';
import CustomTable from './custom-table.vue';
import { ref } from 'vue';

const componentMap: any = {
  CustomParams,
  CustomTable
};
const _name = ref('CustomParams');

const handleSelect = (key: string, keyPath: string[]) => {
  switch (key) {
    case '1': {
      _name.value = 'CustomParams';
      break;
    }
    case '2': {
      _name.value = 'CustomTable';
      break;
    }
    default:
      console.warn('未匹配到组件');
      break;
  }
};
</script>

<style scoped>
::v-deep(.el-menu-item) {
  justify-content: center;
}

h1 {
  padding: 20px;
  letter-spacing: 2px;
  font-weight: 600;
  text-indent: 1rem;
}
</style>
