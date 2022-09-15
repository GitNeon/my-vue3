<template>
  <div style="padding: 20px; background-color: lightpink">ItemFour</div>
  <p>通过props接收路由传递过来的对象参数</p>
  <p>{{ props }}</p>
</template>

<script setup lang="ts">
const props = defineProps(['name', 'age', 'address']);
console.log(props);
</script>

<style scoped></style>
