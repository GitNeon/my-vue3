<template>
  <div style="padding: 20px">
    <h1>详细学习事件的几种用法</h1>
    <h3>一、自定义事件的使用</h3>
    <p>组件的模板表达式中，可以直接使用 $emit 方法触发自定义事件:</p>
    请输入颜色：<input type="text" v-model="inputColor" />
    <ChangeColor @change-color="changeColor(inputColor)" :box-color="boxColor" />
    <p>声明式自定义事件用法:</p>
    <ChangeColor2 @change-color2="changeColor2(inputColor)" :box-color="boxColor2" />
    <h3>二、v-model在自定义组件上使用</h3>
    <p>自定义Input框输入的内容是：{{ inputValue }}</p>
    <CustomInput v-model:text-content="inputValue"></CustomInput>
  </div>
</template>

<script setup lang="ts">
import ChangeColor from './ChangeColor.vue';
import ChangeColor2 from './ChangeColor2.vue';
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';

const inputColor = ref('');

const boxColor = ref('#f2f2f2');

const boxColor2 = ref('lightgray');

const inputValue = ref('');

function changeColor(color: string) {
  console.log('执行了', color);
  boxColor.value = color;
}

function changeColor2(color: string) {
  console.log('执行了2', color);
  boxColor2.value = color;
}
</script>

<style scoped></style>
