<template>
  <div style="padding: 20px">
    <section>
      <el-button @click="add">添加一项</el-button>
      <el-button @click="remove">移除一项</el-button>
      <el-button @click="shuffleArray">打乱数组</el-button>
    </section>
    <section>
      <h3>利用TransitionGroup进行列表动画</h3>
      <ListTransition>
        <li v-for="item in list.value" :key="item.id">{{ item.title }} - {{ item.content }}</li>
      </ListTransition>
    </section>
  </div>
</template>

<script setup lang="ts">
import ListTransition from './ListTransition.vue';
import { reactive } from 'vue';

const list = reactive({
  value: [
    {
      id: 1,
      title: 1,
      content: 1,
    },
    {
      id: 2,
      title: 2,
      content: 2,
    },
    {
      id: 3,
      title: 3,
      content: 3,
    },
    {
      id: 4,
      title: 4,
      content: 4,
    },
    {
      id: 5,
      title: 5,
      content: 5,
    },
  ],
});

function add() {
  list.value.push({
    id: list.value.length + 1,
    title: Math.random(),
    content: Math.random(),
  });
}

function remove() {
  list.value.pop();
}

function shuffleArray() {
  list.value = shuffle(list.value);
}

function shuffle(array: any[]) {
  let newArr = array.slice(); // 不改变原数组，将数组剪切一份给newArr
  for (let i = 0; i < newArr.length; i++) {
    const j = getRandomNum(0, i);
    const temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }
  return newArr;
}

function getRandomNum(min: number, max: number) {
  // 返回[min, max]之间的随机数
  return Math.floor(Math.random() * (max - min + 1) + min);
}
</script>

<style scoped></style>
