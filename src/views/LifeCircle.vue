<template>
  <div style="padding: 20px">
    <h3>Vue的生命周期</h3>
    <ul>
      <li v-for="item in state" :key="item.time">
        Time: {{ item.time }} --- 阶段: {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeMount, onMounted, reactive } from 'vue';
import { formatDate } from '@/utils/DataUitl';

const state: any[] = reactive([]);

onBeforeMount(() => {
  state.push({
    time: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
    text: 'onBeforeMount生命周期阶段',
  });
});

onMounted(() => {
  // 组件已挂载
  state.push({
    time: formatDate(new Date(), 'yyyy-MM-dd hh:mm:ss'),
    text: 'onMounted生命周期阶段',
  });
});
</script>

<style scoped></style>
