<template>
  <div>
    <header>
      <slot name="header" :title="title"></slot>
    </header>
    <main>
      <slot name="main" :content="content"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const title = ref('子组件内的新闻标题');

const content = ref('子组件内的新闻内容');
</script>

<style scoped></style>
