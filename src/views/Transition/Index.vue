<template>
  <div>
    <h3>动画过渡组件的使用：</h3>
    <p>一、基于v-show场景的使用</p>
    <Transition name="fade">
      <ComponentA v-show="show"></ComponentA>
    </Transition>
    <el-button @click="toggleShow">切换</el-button>
    <p>二、基于component动态组件切换场景的使用</p>
    <p>mode="out-in"可以解决布局问题</p>
    <Transition name="fade" appear mode="out-in">
      <component :is="tabs_component[default_tabs]"></component>
    </Transition>
    <el-button @click="default_tabs = 'ComponentA'">切换组件A</el-button>
    <el-button @click="default_tabs = 'ComponentB'">切换组件B</el-button>
  </div>
</template>

<script setup lang="ts">
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';
import { ref } from 'vue';

const show = ref(true);

const tabs_component = { ComponentA, ComponentB };
const default_tabs = ref('ComponentA');

function toggleShow() {
  show.value = !show.value;
}
</script>

<style scoped>
/* 动画进入 - 起始 */
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

/* 动画进入 - 进行中 */
.fade-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

/* 动画进入 - 结束 */
.fade-enter-to {
  opacity: 1;
  transform: translateX(0);
}

/* 动画离开 - 起始 */
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* 动画离开 - 进行中 */
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

/* 动画离开 - 结束 */
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
