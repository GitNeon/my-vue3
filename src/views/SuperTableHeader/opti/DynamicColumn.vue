<!-- DynamicColumn.vue -->
<template>
  <el-table-column v-if="!column.hide" :prop="column.prop" :label="column.label" :width="column.width">
    <!-- 如果有子节点，递归渲染 -->
    <template v-if="column.children && column.children.length">
      <DynamicColumn v-for="(child, index) in column.children" :key="index" :column="child" />
    </template>
  </el-table-column>
</template>

<script setup>
import DynamicColumn from './DynamicColumn.vue';
defineProps({
  column: {
    type: Object,
    required: true
  }
});
</script>
