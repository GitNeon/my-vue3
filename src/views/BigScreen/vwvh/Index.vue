<template>
  <main class="container">
    <div class="content">
      <p>假设设计稿尺寸为 1920*1080（做之前一定问清楚 ui 设计稿的尺寸） 即： 网页宽度=1920px 网页高度=1080px</p>
      <p>
        我们都知道,网页宽度=100vw 网页宽度=100vh 所以，在 1920px*1080px 的屏幕分辨率下 1920px = 100vw 1080px = 100vh
      </p>
      <p>这样一来，以一个宽 300px 和 200px 的 div 来说，其所占的宽高，以 vw 和 vh 为单位，</p>
      <p>
        计算方式如下: vwDiv = (300px / 1920px ) * 100vw vhDiv = (200px / 1080px ) * 100vh 所以，就在 1920*1080
        的屏幕分辨率下，计算出了单个 div 的宽高 当屏幕放大或者缩小时，div 还是以 vw 和 vh
        作为宽高的，就会自动适应不同分辨率的屏幕
      </p>
    </div>
    <div ref="barChart" v-chart-resize class="content"></div>
    <div ref="lineChart" v-chart-resize class="content"></div>
    <div class="content">
      <chart-dom />
    </div>
  </main>
</template>

<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { getLineOption } from '@/views/BigScreen/vwvh/options/line-option';
import ChartDom from '@/views/BigScreen/components/chartDom.vue';

const barChart = ref<any>(null);
const initBarChart = () => {
  let myChart = echarts.init(barChart.value);
  let options = {
    title: {
      text: 'Awesome Chart'
    },
    xAxis: {
      data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    },
    yAxis: {},
    series: [
      {
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310]
      }
    ]
  };
  myChart.setOption(options);
};

const lineChart = ref<any>(null);

let myChart = ref<any>(null);

const initLineChart = () => {
  myChart = echarts.init(lineChart.value);
  let options = getLineOption();
  myChart.setOption(options, true);
};

const resizeFn = () => {
  let options = getLineOption();
  myChart.setOption(options, true);
};

let arr = [];

for (let i = 0; i < 100000; i++) {
  arr.push('A');
}

onMounted(() => {
  initBarChart();
  initLineChart();

  // 如果需要实现随着屏幕缩放echarts字体
  window.addEventListener('resize', resizeFn);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeFn);
});
</script>

<style scoped lang="scss">
main.container {
  display: flex;
  width: vw(1920);
  height: vh(1080);
  background-color: #f2f2f2;
}

main > div {
  border: 1px solid;
}

.content {
  width: vw(400);
  height: vh(500);
  margin: 20px;
}

p {
  font-size: vh(16);
}
</style>
