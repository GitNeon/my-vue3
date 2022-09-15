<template>
  <div style="padding: 20px; background-color: skyblue">这是子路由组件ItemTwo -------</div>
  <p>接收到的query参数是：{{ route.query }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.query);
</script>

<style scoped></style>
