<template>
  <div>
    <h1>GSAP使用案例</h1>
    <div ref="box" class="box green">box1</div>
    <div ref="box2" class="box blue">bo2</div>
    <div ref="box3" class="box blue">box3</div>
    <el-button @click="moveBox">box1移动</el-button>
    <el-button @click="reMoveBox">box2移动</el-button>
    <el-button @click="moveBox3">box3移动</el-button>
    <h3>对SVG进行动画处理</h3>
    <div>
      <svg ref="svg" id="svg" viewBox="0 0 100 100">
        <rect class="svgBox" fill="#28a92b" x="0" y="35" width="30" height="30" rx="2" />
      </svg>
    </div>
    <el-button @click="transformSVG">变换SVG</el-button>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import TweenMax from 'gsap';
import { onMounted, ref } from 'vue';

const box = ref(null);
const box2 = ref(null);
const box3 = ref(null);
const svgBox = ref(null);

function moveBox() {
  TweenMax.to(box.value, 3, {
    x: 600,
    opacity: 0.5,
  });
}

function reMoveBox() {
  console.log(box2.value);
  TweenMax.from(box2.value, { x: 600, duration: 500 });
}

function moveBox3() {
  gsap.to(box3.value, {
    x: 400,
    rotation: 360,
    duration: 2,
  });
}

function transformSVG() {
  gsap.to('.svgBox', {
    duration: 1,
    x: 100,
    xPercent: -100,
    attr: {
      fill: 'pink',
      rx: 50,
    },
  });
}
</script>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  border-radius: 6px;
  margin-top: 4px;
}

.green {
  background-color: #6fb936;
}

.blue {
  background-color: skyblue;
}

svg {
  height: 90vh;
  max-height: 300px;
  border: solid 2px black;
  overflow: visible;
}
</style>
