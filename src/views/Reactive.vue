<template>
  <h3>响应式基础-(组合式api)练习：</h3>
  <div>当前计数count: {{ state.count }}</div>
  <button @click="increment">+1</button>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({ count: 0 });

function increment() {
  state.count++;
}
</script>

<style scoped></style>
