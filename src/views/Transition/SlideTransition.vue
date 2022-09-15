<!-- 封装的可复用的动画组件 -->
<!--suppress CssUnusedSymbol -->
<template>
  <Transition name="fade" appear mode="out-in">
    <!-- 向插槽传递内容 -->
    <slot></slot>
  </Transition>
</template>

<script setup lang="ts"></script>

<!-- 避免在这里使用 <style scoped> 因为那不会应用到插槽内容上 -->
<style>
/* 动画进入 - 起始 */
.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

/* 动画进入 - 进行中 */
.fade-enter-active {
  transition: all 0.4s;
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
  transition: all 0.4s;
}

/* 动画离开 - 结束 */
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
