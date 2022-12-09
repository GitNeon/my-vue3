<template>
  <div class="screen-container">
    <div class="screen-content" ref="screenRef">
      <span class="screen-title">基于scale的适配方案</span>
      <p>当屏幕的尺寸比例刚好是 16:9 时，页面能刚好全屏展示，内容占满显示器</p>
      <p>当屏幕的尺寸比例小于 16:9 时，页面上下留白，左右占满并上下居中，显示比例保持 16:9</p>
      <p>当屏幕尺寸比例大于 16:9 时，页面左右留白，上下占满并居中，显示比例保持 16:9</p>
      <p>F11全屏不显示留白</p>
      <p>scale方案有缺点：3D或者地图鼠标点击事件会偏移，解决办法就是对元素本身所在的容器scale回去</p>
      <img class="screen-img" src="./img.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import windowResize from './resize.js';
import { onMounted, onUnmounted } from 'vue';

const { screenRef, calcRate, windowDraw, unWindowDraw } = windowResize();

onMounted(() => {
  // 监听浏览器窗口尺寸变化
  windowDraw();
  calcRate();
});

onUnmounted(() => {
  unWindowDraw();
});
</script>

<style lang="scss" scoped>
.screen-container {
  height: 100%;
  background-color: lightcyan;
  display: flex;
  justify-content: center;
  align-items: center;

  .screen-content {
    width: 1920px;
    height: 1080px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.2s ease-in-out;
    .screen-title {
      font-size: 32px;
    }

    .screen-img {
      margin-top: 20px;
    }
  }
}
</style>
