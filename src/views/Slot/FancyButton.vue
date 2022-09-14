<template>
  <div class="fancy-button">
    <!-- 插槽可以提供默认内容   -->
    <slot> click me! </slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.fancy-button {
  width: 60px;
  padding: 5px;
  font-size: 14px;
  background-color: skyblue;
  border-radius: 3px;
  text-align: center;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(9, 82, 218, 0.5);
}
</style>
