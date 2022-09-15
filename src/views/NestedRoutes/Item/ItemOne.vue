<template>
  <div style="padding: 20px">这是子路由组件ItemOne</div>
  <p>接收到的参数是：{{ route.params }}</p>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.params); // { id: 32 }
</script>

<style scoped></style>
