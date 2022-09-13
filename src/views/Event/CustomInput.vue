<template>
  <div contenteditable="true" class="input" @input.prevent="updateValue">{{ textContent }}</div>
</template>

<script setup lang="ts">
defineProps(['textContent']);
const emit = defineEmits(['update:textContent']);

function updateValue(e: Event) {
  const target = e.target as HTMLElement;
  emit('update:textContent', target.innerText);
}
</script>

<style scoped>
.input {
  min-width: 350px;
  padding: 10px;
  line-height: 35px;
  border: 1px solid #83baf6;
  border-radius: 3px;
  outline: none;
}

.input:focus {
  box-shadow: 0 0 5px rgba(9, 82, 218, 0.5);
}
</style>
