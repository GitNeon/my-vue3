<template>
  <div style="padding: 20px">
    <span>鼠标的移动位置：{{ x }},{{ y }}</span>
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@/views/Composables/common/mouse';
const [x, y] = useMouse();
console.log(x, y);
</script>

<style scoped></style>
