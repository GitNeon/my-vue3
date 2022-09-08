<template>
  <div style="padding: 20px">
    <h2>侦听器：用于侦听属性变化</h2>
    <p>侦听简单值：</p>
    <p>ref: {{ str }}</p>
    <button @click="changeRef">改变ref</button>
    <p>----------------------------------------------------------------------</p>
    <p>侦听复杂的对象，嵌套值</p>
    <p>Info： {{ JSON.stringify(person) }}</p>
    <button @click="person.books++">增加数量</button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue';

const str = ref('字符串内容....');

const person = reactive({
  name: '小明',
  age: 18,
  otherInfo: {
    address: '北京',
  },
  books: 0,
});

function changeRef() {
  str.value = '被改变的字符串内容...';
}

watch(str, (newValue, oldValue) => {
  console.log(newValue, oldValue);
});

watch(person, (newValue, oldValue) => {
  // newValue和oldValue是相等的，因为他们来自同一个对象
  console.log(newValue, oldValue);
});

watch(
  () => person.books,
  (newValue, oldValue) => {
    // 监听复杂对象的嵌套属性时，必须使用回调函数
    console.log('books', newValue, oldValue);
  },
);
</script>

<style scoped></style>
