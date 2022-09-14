<template>
  <router-view v-slot="{ Component }">
    <SlideTransition>
      <component :is="Component"></component>
    </SlideTransition>
  </router-view>
</template>

<script setup lang="ts">
import SlideTransition from '@/views/Transition/SlideTransition.vue';
</script>

<style></style>
