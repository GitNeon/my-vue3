<template>
  <div class="container">
    <v-scale-screen width="1920" height="1080" :full-screen="true" :box-style="{ backgroundColor: 'transparent' }">
      <div style="width: 500px; height: 500px; background-color: skyblue"></div>
    </v-scale-screen>
  </div>
</template>

<script setup lang="ts">
import VScaleScreen from 'v-scale-screen';
</script>

<style scoped>
.container {
}
</style>
