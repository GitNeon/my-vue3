<template>
  <div style="padding: 20px">
    <h3>计算属性:</h3>
    <p>计算属性用来简写模板插值表达式</p>
    <p>当前书本数量: {{ bookNum }}</p>
    <p>是否有书？{{ isBook }}</p>
  </div>

</template>

<script setup lang="ts">
import { computed, reactive } from "vue";

const book_state = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const bookNum = computed(() => book_state.books.length);

const isBook = computed(() => book_state.books.length > 0 ? 'true' : 'false')
</script>

<style scoped>

</style>
