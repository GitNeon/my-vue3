<template>
  <div>这是子组件ItemThree,使用props接收路由参数,可以避免与route对象耦合度太高</div>
  <p>接收到的Props参数：{{ username }}</p>
</template>

<script setup lang="ts">
const { username } = defineProps(['username']);
console.log(username);
</script>

<style scoped></style>
