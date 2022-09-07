<template>
  <div style="padding: 20px">
    <h3>响应式基础-(组合式api)练习：</h3>
    <div>当前计数count: {{ state.count }}</div>
    <div>当前数组内容：{{ JSON.stringify(state.arr) }}</div>
    <div>当前state内容： {{ JSON.stringify(state) }}</div>
    <button @click="increment">+1</button>
    <button @click="push">push</button>
    <p>-----------------------------------------------------------------------------</p>
    <h3>利用ref创建不会丢失响应式引用的任意值</h3>
    <p>const count = ref(0); 输出的值为：{{ count }}</p>
    <p>-----------------------------------------------------------------------------</p>
    <h3>利用ref可以替换整个响应式对象</h3>
    <div>const state_ref = ref({ name: '小明', age: 18 })的输出结果是: {{ JSON.stringify(state_ref) }}</div>
    <button @click="changeStateRef">改变state_ref对象</button>
    <p>点击以上按钮，页面对象的值发生变化</p>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";


const state = reactive({ count: 0, arr: ['foo','bar','baz'] });

const count = ref(0);

const state_ref = ref({ name: '小明', age: 18 } as any)

function increment() {
  state.count++;
}

function push() {
  state.arr.push('apple');
}

function changeStateRef(){
  state_ref.value = {
    apple: '苹果',
    price: '5'
  }
}

</script>

<style scoped></style>
