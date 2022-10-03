<template>
  <div>
    <h1>GSAP使用教程</h1>
    <div id="p" class="box green"></div>
    <p>往右移动500px，同时改变透明度</p>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { onMounted } from 'vue';

onMounted(() => {
  gsap.to('#p', { x: 500, duration: 5, opacity: 0, delay: 1 });
});
</script>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin-top: 4px;
  display: inline-block;
}

.green {
  background-color: #6fb936;
}
</style>
