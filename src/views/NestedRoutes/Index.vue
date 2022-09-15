<template>
  <div style="padding: 20px; display: flex">
    <el-row class="tac">
      <el-col :span="12">
        <h5 class="mb-2">Default colors</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>Navigator One</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1" @click="onItemClick">item one</el-menu-item>
              <el-menu-item index="1-2" @click="onItemClick">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <main>
      <RouterView> </RouterView>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const onItemClick = (item: any) => {
  console.log(item);
  if (item.index === '1-1') {
    router.push('/nestedRoute/ItemOne');
    return;
  }

  if (item.index === '1-2') {
    router.push('/nestedRoute/ItemTwo');
    return;
  }
};
</script>

<style scoped>
.tac {
  width: 400px;
  height: 100%;
}
</style>
