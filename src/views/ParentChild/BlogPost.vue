<template>
  <div style="border: 1px solid; padding: 10px; margin: 10px">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <footer>{{ author }} --- {{ date }}</footer>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['title', 'content', 'author', 'date']);

// 通过对象类型定义
/*defineProps({
  title: String,
  content: String,
  author: String,
  date: String,
})*/
console.log(props);
</script>

<style scoped></style>
