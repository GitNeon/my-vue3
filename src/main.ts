import { createApp } from 'vue';
import { createPinia } from 'pinia';
import * as echarts from 'echarts/core';

import App from './App.vue';
import router from './router';

import '@/assets/style/base.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.config.globalProperties.$echarts = echarts;
app.mount('#app');

// 全局的Provide提供依赖数据
app.provide('username', 'admin');
app.provide('password', '123456');

app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info);
  // do something
};
