<template>
  <div>
    <h2>本地excel导入</h2>
    <el-upload class="upload-demo" drag :limit="1" :auto-upload="false" action="#" :on-change="handleBeforeUpload">
      <el-icon class="el-icon--upload">
        <upload-filled />
      </el-icon>
      <div class="el-upload__text">将文件拖拽这里 <em>或点击上传</em></div>
      <template #tip>
        <div class="el-upload__tip">仅接受xlsx文件格式</div>
      </template>
    </el-upload>
  </div>
</template>

<script setup lang="ts">
import { read } from 'xlsx';
import { getSheetCells, transformCellsToTableHeader } from './util/core-parse.js';

// 用于存储表头信息的数组
const headers = [];

async function handleBeforeUpload(file: any) {
  const fileData = await file.raw.arrayBuffer();
  const workbook = read(fileData);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  console.log(worksheet);
  const allCells = getSheetCells(worksheet);
  console.log('allCells', allCells);
  const header = transformCellsToTableHeader(allCells);
}
</script>

<style scoped></style>
