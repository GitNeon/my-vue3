import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as echarts from 'echarts/core';
import { bind, unbind } from '@/directive/chart-resize';
import App from './App.vue';
import router from './router';
import PristineUI from 'pristine-ui';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

import BqDesign from 'bq-design';
import 'bq-design/dist/index.css';

import '@/assets/style/base.css';
import 'pristine-ui/dist/index.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import VueDraggableGrid from '@noction/vue-draggable-grid';
import '@noction/vue-draggable-grid/styles';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PristineUI);
app.use(BqDesign);
app.use(ElementPlus);
app.use(VueDraggableGrid);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.config.globalProperties.$echarts = echarts;

// 全局的Provide提供依赖数据
app.provide('username', 'admin');
app.provide('password', '123456');

app.directive('chart-resize', {
  mounted: bind,
  unmounted: unbind
});

app.mount('#app');
