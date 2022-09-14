<template>
  <div>
    <header style="background-color: skyblue">
      <slot name="header"></slot>
    </header>
    <main style="background-color: lavender">
      <slot name="main"></slot>
    </main>
    <footer style="background-color: lightpink">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
