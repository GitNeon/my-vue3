<script setup lang="ts">
// import PanelDatePick from '../../components/date-picker/src/date-picker-com/panel-date-pick.vue';
//
// console.log(PanelDatePick);
import { getPanel } from 'element-plus/es/components/date-picker/src/panel-utils';

const Panel = getPanel('year');
console.log(Panel);
</script>

<template>
  <div>
    <div>测试element-plus 日期组件面板使用</div>
    <el-button>按钮</el-button>
    <panel type="year"></panel>
  </div>
</template>

<style scoped></style>
