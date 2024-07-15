<template>
  <div>
    <div class="template-container">
      <h3>从模板库选择字段</h3>
      <p>字段1</p>
      <p>字段2</p>
      <p>字段3</p>
      <p>字段4</p>
      <p>字段5</p>
    </div>
    <el-button @click="handleBtnClick">增大宽度</el-button>
    <div class="grid-layout-container">
      <div class="inner-container" :style="{ width: maxWidth }">
        <grid-layout v-model:layout="layout" :col-num="colNum" :row-height="40" :margin="[0, 0]">
          <template #default="{ gridItemProps }">
            <grid-item
              v-for="item in layout"
              v-bind="gridItemProps"
              :id="item.id"
              :key="item.id"
              :x="item.x"
              :y="item.y"
              :w="item.w"
              :h="item.h"
              @noc-resize="handleResize"
              @noc-move="handleMove"
              @noc-move-end="handleMoveEnd"
            >
              {{ item.id }}
            </grid-item>
          </template>
        </grid-layout>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const layout = ref([
  { h: 1, id: 1, w: 1, x: 0, y: 0 },
  { h: 1, id: 2, w: 1, x: 1, y: 0 },
  { h: 1, id: 3, w: 1, x: 2, y: 0 },
  { h: 1, id: 4, w: 1, x: 3, y: 0 },
  { h: 1, id: 5, w: 1, x: 4, y: 0 },
  { h: 1, id: 6, w: 1, x: 5, y: 0 },
  { h: 1, id: 7, w: 1, x: 6, y: 0 },
  { h: 1, id: 8, w: 1, x: 7, y: 0 },
  { h: 1, id: 9, w: 1, x: 8, y: 0 },
  { h: 1, id: 10, w: 1, x: 9, y: 1 },
  { h: 1, id: 1, w: 1, x: 0, y: 2 },
  { h: 1, id: 2, w: 1, x: 1, y: 3 },
  { h: 1, id: 3, w: 1, x: 2, y: 4 },
  { h: 1, id: 4, w: 1, x: 3, y: 5 },
  { h: 1, id: 5, w: 1, x: 4, y: 6 },
  { h: 1, id: 6, w: 1, x: 5, y: 7 },
  { h: 1, id: 7, w: 1, x: 6, y: 8 },
  { h: 1, id: 8, w: 1, x: 7, y: 9 },
  { h: 1, id: 9, w: 1, x: 8, y: 10 },
  { h: 1, id: 10, w: 1, x: 9, y: 11 }
]);

const innerStyle = ref({
  width: 1900
});
const maxWidth = computed(() => `${innerStyle.value.width}px`);
const colNum = computed(() => innerStyle.value.width / 100);

function handleResize() {
  console.log('handleResize');
}

function handleMove(moveInfo: any) {
  console.log('handleMove:', moveInfo);
}

function handleMoveEnd(moveInfo: any) {
  console.log('handleMoveEnd:', moveInfo);
}

function handleBtnClick() {
  innerStyle.value.width += 100;
}
</script>

<style scoped>
.grid-layout-container {
  height: 750px;
  background-color: white;
  border: 1px solid #83baf6;
  overflow: auto;
}

.inner-container {
  height: 100%;
  border: 1px solid lightseagreen;
}

.template-container {
  flex-basis: 300px;
  border: 1px solid #83baf6;
}

::v-deep(.vue-grid-item) {
  background-color: #f3f4f5;
  border: 1px solid #cce3df;
}
</style>
