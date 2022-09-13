<template>
  <div style="border: 1px solid; padding: 10px; margin: 10px">
    <button @click="$emit('enlargeText')">放大字体</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['enlargeText']);
console.log('emit', emit);
</script>

<style scoped></style>
