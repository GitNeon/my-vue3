<template>
  <div style="padding: 20px">
    <h2>DOM ref的引用</h2>
    <p>通过ref属性，可以直接获得底层的dom元素</p>
    <div>输入框: <input type="text" ref="input_ref" /></div>
    <button @click="focusInput">聚焦输入框</button>
    <p>-------------------------------------------------------------------------</p>
    <h2>在v-for模板中使用</h2>
    <ul>
      <li v-for="item in list" ref="itemRef">
        {{ item }}
      </li>
    </ul>
    <p>-------------------------------------------------------------------------</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const input_ref = ref<HTMLInputElement | null>(null);

function focusInput() {
  console.dir(input_ref.value);
  input_ref.value?.focus();
}

const list = ref([1, 2, 3]);
const itemRef = ref([]);

onMounted(() => {
  console.log(itemRef.value);
});
</script>

<style scoped></style>
