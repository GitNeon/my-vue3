<template>
  <div class="box">
    <plselect/>
    <echartCompt class="box-chart" v-model="chartOption"/>
  </div>
</template>

<script>
import Plselect from "@/views/金四决策指挥平台/宏观经济发票监测-20220926/components/plselect";

export default {
  name: "xf-fyflxspxfzs",
  components: {Plselect},
  computed: {
    chartOption() {
      return {
        xAxis: {
          type: 'category',
          data: ['2022年1月', '2022年2月', '2022年3月', '2022年4月', '2022年5月', '2022年6月']
        },
        yAxis: {
          name:'单位（%）',
          min: -20,
          max: 30,
          interval: 10,
          type: 'value'
        },
        series: [
          {
            data: [9, -11, 9, 8, 10, 9],
            color:'#1c8ad2',
            type: 'line'
          }
        ]
      };
    }
  }
}
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