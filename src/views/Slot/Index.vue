<template>
  <div style="padding: 20px">
    <h1>插槽的使用</h1>
    <p>利用slot占位符，可以使得组件接收模板内容</p>
    <FancyButton>
      <span style="color: mediumvioletred">按钮</span>
    </FancyButton>
    <p>-----------------------------------------------------------------------</p>
    <p>具名插槽，给多个插槽指定具体的名字，方便对应</p>
    <NamedSlot>
      <template #header>
        <h2>这是标题</h2>
      </template>
      <template #main>
        <span>这是文本内容</span>
      </template>
      <template #footer>
        <span>footer</span>
      </template>
    </NamedSlot>
    <p>如果父组件想要用到子组件内的值，就必须得使用作用域插槽</p>
    <PropsSlot>
      <template #header="headerProps">
        {{ headerProps }}
      </template>
      <template #main="mainProps">
        {{ mainProps }}
      </template>
    </PropsSlot>
  </div>
</template>

<script setup lang="ts">
import FancyButton from './FancyButton.vue';
import NamedSlot from './NamedSlot.vue';
import PropsSlot from './PropsSlot.vue';
</script>

<style scoped></style>
