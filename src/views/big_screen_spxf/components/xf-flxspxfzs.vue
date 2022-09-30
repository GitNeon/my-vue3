<template>
  <div class="box">
    <echartCompt class="box-chart" v-model="chartOption" />
  </div>
</template>

<script>
import echartCompt from './echarts.vue';
export default {
  components: {
    echartCompt,
  },
  computed: {
    chartOption() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'value',
          name: '(%)',
          boundaryGap: [0, 0.01],
        },
        yAxis: {
          type: 'category',
          data: [
            '住宿服务',
            '餐饮服务',
            '家具类',
            '烟酒饮料类',
            '服装鞋帽',
            '化妆品类',
            '住宿服务',
            '餐饮服务',
            '家具类',
            '烟酒饮料类',
            '服装鞋帽',
            '化妆品类',
            '住宿服务',
            '餐饮服务',
            '家具类',
            '烟酒饮料类',
          ],
        },
        series: [
          {
            name: '增速',
            color: '#25a9fb',
            type: 'bar',
            data: [19, 23, 30, 54, 34, 67, 19, 23, 30, 54, 34, 67, 19, 23, 30, 54],
          },
        ],
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.width-scroll {
  height: 93%;
  width: 466.83px;
  overflow: scroll;
}

.box {
  height: 100%;
  position: relative;

  &-select {
    position: absolute;
    right: 0;
    top: 0;
  }

  &-chart {
    height: calc(100% - 10px);
  }
}

.bj-1 {
  position: absolute;
  left: -1px;
  top: -1px;
}

.bj-2 {
  position: absolute;
  right: -1px;
  top: -1px;
}

.bj-3 {
  position: absolute;
  right: -1px;
  bottom: -1px;
}

.bj-4 {
  position: absolute;
  left: -1px;
  bottom: -1px;
}
</style>
