<template>
  <div
    class="echartCompt"
    ref="echartCompt"
    @mouseover="pauseShowTip"
    @mouseout="playShowTip"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      debounce: 0, // resize防抖
      myChart: null,

      pause: false, // 是否暂停轮播
      tipTimerTask: 0, // tooltip任务线程
      pieTimerTask: 0,
      pieOldDataIndex: 0, // 饼图的上一次高亮数据索引
      seriesData: {
        seriesCount: 0, // 系列条数
        dataCount: 0, //数据条数
        seriesIndex: 0, // 系列索引
        dataIndex: 0, // 数据索引
      },
    };
  },
  /**
   * value: v-model绑定，传入echarts原生配置
   * tipTimer: 轮播显示tips的间隔（毫秒）
   */
  props: {
    value: Object,
    tipTimer: Number,
    pieTimer: Number,
  },
  watch: {
    value() {
      this.initChart();
    },
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      this.initAnimat();
      if (this.myChart) {
        this.myChart.clear();
      } else {
        this.myChart = this.$echarts.init(this.$refs.echartCompt);
        this.$emit('getEchart', this.myChart);
        window.addEventListener('resize', this.resizeChart);

        if (this.pieTimer) {
          this.bindPieEvent();
        }
      }

      this.renderChart();
    },
    renderChart() {
      if (this.myChart) {
        this.myChart.clear();
        this.myChart.setOption(this.value);
        this.setToolTipTimer();
      }
    },
    resizeChart() {
      let now = new Date().getTime();
      if (this.myChart && now - this.debounce > 500) {
        this.debounce = now;
        this.myChart.resize();
      }
    },
    // 初始化轮播参数
    initAnimat() {
      try {
        if (this.tipTimer || this.pieTimer) {
          if (Array.isArray(this.value.series)) {
            this.seriesData.seriesCount = this.value.series.length;
            // series为数组时，取第一个系列的data为总数
            this.seriesData.dataCount = this.value.series[0].data.length;
          } else {
            this.seriesData.seriesCount = 1;
            this.seriesData.dataCount = this.value.series.data.length;
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
    // 暂停轮播
    pauseShowTip() {
      this.pause = true;
    },
    // 继续轮播
    playShowTip() {
      this.pause = false;
    },
    // 设置tooltip的轮播显示
    setToolTipTimer() {
      if (this.tipTimer) {
        clearInterval(this.tipTimerTask);

        this.dispatchShowTip(0, 0);

        this.tipTimerTask = setInterval(() => {
          if (!this.pause) {
            this.setTimerIndex();
            this.dispatchShowTip(this.seriesData.seriesIndex, this.seriesData.dataIndex);
          }
        }, this.tipTimer);
      }

      // 饼图轮播
      if (this.pieTimer) {
        clearInterval(this.pieTimerTask);

        this.dispatchShowPie(0, 0);

        this.pieTimerTask = setInterval(() => {
          if (!this.pause) {
            this.setTimerIndex();
            this.dispatchShowPie(this.seriesData.seriesIndex, this.seriesData.dataIndex);
          }
        }, this.pieTimer);
      }
    },
    // 设置相关索引
    setTimerIndex() {
      if (this.seriesData.seriesIndex < this.seriesData.seriesCount) {
        // 系列索引小于系列总数时
        this.seriesData.dataIndex++;
        if (this.seriesData.dataIndex < this.seriesData.dataCount) {
          // 数据索引小于数据总长度
          // this.dispatchShowTip(this.seriesData.seriesIndex,this.seriesData.dataIndex);
        } else {
          // 遍历玩一个系列的 data 后，系列++，data重置为0
          this.seriesData.seriesIndex++;
          this.seriesData.dataIndex = 0;
          // 系列增加后立马进行一次判断，避免动画断层
          if (this.seriesData.seriesIndex >= this.seriesData.seriesCount) {
            this.seriesData.seriesIndex = 0;
          }
        }
      } else {
        // series遍历完成，所有重头开始
        this.seriesData.seriesIndex = 0;
        this.seriesData.dataIndex = 0;
      }
    },
    // 触发显示提示
    dispatchShowTip(seriesIndex, dataIndex) {
      // console.log(seriesIndex, dataIndex);
      this.myChart.dispatchAction({
        type: 'showTip',
        // 系列的 index，在 tooltip 的 trigger 为 axis 的时候可选。
        seriesIndex: seriesIndex,
        // 数据项的 index，如果不指定也可以通过 name 属性根据名称指定数据项
        dataIndex: dataIndex,
      });
    },
    // 触发显示饼图提示
    dispatchShowPie(seriesIndex, dataIndex) {
      this.myChart.dispatchAction({
        type: 'downplay',
        dataIndex: this.pieOldDataIndex,
      });
      this.pieOldDataIndex = dataIndex;
      this.myChart.dispatchAction({
        type: 'highlight',
        dataIndex: dataIndex,
      });
    },
    // 绑定图表事件
    bindPieEvent() {
      let _this = this;
      this.myChart.on('mouseover', function (e) {
        //当检测到鼠标悬停事件，取消默认选中高亮
        _this.myChart.dispatchAction({
          type: 'downplay',
          dataIndex: _this.pieOldDataIndex,
        });
        //高亮显示悬停的那块
        _this.myChart.dispatchAction({
          type: 'highlight',
          dataIndex: e.dataIndex,
        });
      });

      //检测鼠标移出后显示之前默认高亮的那块
      this.myChart.on('mouseout', function (e) {
        //当检测到鼠标悬停事件，取消默认选中高亮
        _this.myChart.dispatchAction({
          type: 'downplay',
          dataIndex: e.dataIndex,
        });
        _this.myChart.dispatchAction({
          type: 'highlight',
          dataIndex: _this.pieOldDataIndex,
        });
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.tipTimerTask);
    clearInterval(this.pieTimerTask);
    window.removeEventListener('resize', this.resizeChart);
  },
};
</script>

<style lang="scss" scoped>
.echartCompt {
}
</style>
