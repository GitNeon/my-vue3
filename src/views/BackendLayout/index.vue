<template>
  <el-container class="layout-container">
    <el-aside :width="isCollapsed ? '64px' : '200px'" class="sidebar-aside">
      <el-menu
        :collapse="isCollapsed"
        :collapse-transition="true"
        background-color="#001529"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="sidebar-menu"
      >
        <el-menu-item index="1">
          <el-icon><House /></el-icon>
          <template #title>首页</template>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><DataLine /></el-icon>
          <template #title>数据</template>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Setting /></el-icon>
          <template #title>设置</template>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header class="layout-header">
        <el-icon @click="toggleSidebar" class="toggle-icon">
          <component :is="isCollapsed ? Expand : Fold" />
        </el-icon>
        <span>后台管理系统</span>
      </el-header>

      <el-main class="layout-main">
        <h1>主内容区域</h1>
        <p>这里是页面的主要内容...</p>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref } from 'vue';
// 导入 Element Plus 图标
import { House, DataLine, Setting, Fold, Expand } from '@element-plus/icons-vue';

const isCollapsed = ref(false);

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.sidebar-aside {
  background-color: #001529;
  /* 关键：添加过渡动画 */
  transition: width 0.3s ease;
}

.sidebar-menu {
  border-right: none; /* 移除 el-menu 默认的右边框 */
  height: 100%;
}

.layout-header {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #dcdfe6;
}

.toggle-icon {
  font-size: 24px;
  cursor: pointer;
  margin-right: 15px;
}

.layout-main {
  background-color: #f0f2f5;
}
</style>
