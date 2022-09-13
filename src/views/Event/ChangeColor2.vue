<template>
  <div style="padding: 20px">
    <div class="box" :style="{ backgroundColor: boxColor }"></div>
    <el-button @click="changeColor">改变box颜色</el-button>
  </div>
</template>

<script setup lang="ts">
defineProps(['boxColor']);
const emit = defineEmits(['change-color2']);

function changeColor() {
  emit('change-color2');
}
</script>

<style scoped>
.box {
  margin: 10px;
  width: 300px;
  height: 300px;
  border: 1px solid;
}
</style>
