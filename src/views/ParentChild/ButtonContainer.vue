<template>
  <h3>组件的引入，每一个引入都是单独的实例</h3>
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />
  <ButtonCounter />
  <p>-----------------------------------------------------</p>
  <p>传递props</p>
  <div :style="{ fontSize: `${postFontSize}em` }">
    <BlogPost
      title="新闻标题"
      content="新闻内容新闻内容新闻内容"
      author="system"
      :date="new Date().toLocaleDateString()"
    ></BlogPost>
  </div>
  <p>
    子组件可以通过调用内置的 $emit
    方法，通过传入事件名称来抛出一个事件，这父组件可以动态传入子组件方法实现
  </p>
  <BlogPostEvent @enlargeText="postFontSize += 0.1"></BlogPostEvent>
</template>

<script setup lang="ts">
import ButtonCounter from './ButtonCounter.vue';
import BlogPost from './BlogPost.vue';
import { ref } from 'vue';
import BlogPostEvent from './BlogPostEvent.vue';

const postFontSize = ref(1);
</script>

<style scoped></style>
