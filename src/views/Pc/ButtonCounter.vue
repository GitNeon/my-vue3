<template>
  <div style="padding: 20px">
    <button @click="add">你点击了{{ count }}次</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

function add() {
  return count.value++;
}
</script>

<style scoped></style>
