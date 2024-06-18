<template>
  <p>分屏方案适配</p>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const go = (path: string) => {
  router.push({
    path: path
  });
};
</script>

<style scoped></style>
