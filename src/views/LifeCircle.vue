<template>
  <div style="padding: 20px">
    <h3>Vue的生命周期</h3>
    <ul>
      <li v-for="item in state" :key="item.time">Time: {{ item.time }} --- 阶段: {{ item.text }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {
  computed,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive
} from 'vue';
import { formatDate } from '@/utils/DateUitl';

const state: any[] = reactive([]);

onBeforeMount(() => {
  state.push({
    time: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
    text: 'onBeforeMount -- 组件挂载前 -- 生命周期阶段'
  });
});

onMounted(() => {
  // 组件已挂载
  state.push({
    time: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
    text: 'onMounted -- 组件已挂载 -- 生命周期阶段'
  });
});

onBeforeUpdate(() => {
  state.push({
    time: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
    text: 'onBeforeUpdate -- 组件更新前 -- 生命周期阶段'
  });
});

onUpdated(() => {
  state.push({
    time: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
    text: 'onUpdated -- 组件已更新 -- 生命周期阶段'
  });
});

onBeforeUnmount(() => {
  state.push({
    time: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
    text: 'onBeforeUnmount -- 组件卸载前 -- 生命周期阶段'
  });
});

onUnmounted(() => {
  state.push({
    time: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
    text: 'onBeforeUnmount -- 组件已卸载 -- 生命周期阶段'
  });
});
</script>

<style scoped></style>
