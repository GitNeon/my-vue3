import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as echarts from 'echarts/core';
import { bind, unbind } from '@/directive/chart-resize';
import App from './App.vue';
import router from './router';
import PristineUI from 'pristine-ui-beta';

import '@/assets/style/base.css';
// 全局使用
// import 'pristine-ui-beta/es/theme-chalk/common/root.css';
import 'pristine-ui-beta/dist/index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PristineUI);

app.config.globalProperties.$echarts = echarts;
app.mount('#app');

// 全局的Provide提供依赖数据
app.provide('username', 'admin');
app.provide('password', '123456');

app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info);
};

app.directive('chart-resize', {
  mounted: bind,
  unmounted: unbind
});
