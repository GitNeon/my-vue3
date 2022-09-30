<template>
  <div class="box" >
    <plselect/>
    <div class="width-scroll">
      <echartCompt class="box-chart" style="width: 1000px;height: 80%;margin-top: 5%;margin-left: -30px" v-model="chartOption"/>
    </div>
  </div>
</template>

<script>
import Plselect from "@/views/金四决策指挥平台/宏观经济发票监测-20220926/components/plselect";

export default {
  name: "xf-fsfxfspzs",
  components: {Plselect},
  computed: {
    chartOption() {
      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          data: ['开票金额', '增速'],
          textStyle:{//图例文字的样式
            color:'#ccc',
            fontSize:14
          },
        },
        xAxis: [
          {
            type: 'category',
            data: ["北京", "天津", "河北", "山西", "内蒙古", "辽宁", "大连", "吉林", "黑龙江",
              "上海", "江苏", "浙江", "宁波", "安徽", "福建", "厦门", "江西", "山东", "青岛", "河南",
              "湖北", "湖南", "广东", "深圳", "广西", "海南", "重庆", "四川", "贵州", "云南", "西藏",
              "陕西", "甘肃", "青海", "宁夏", "新疆"],
            axisPointer: {
              type: 'shadow'
            },
            axisLabel: {
              interval:0,
              rotate:90,
              textStyle: {
                show:true,
                fontFamily:'微软雅黑',
                color: "#fff",
                fontSize: '14',
              },
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '亿元',
            nameTextStyle:{
              color: "#fff",
              fontSize: '14',
            },
            min: 0,
            max: 10000,
            interval: 5000,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                show:true,
                fontFamily:'微软雅黑',
                color: "#fff",
                fontSize: '14',
              },
            }
          },
          {
            type: 'value',
            name: '%',
            nameTextStyle:{
              color: "#fff",
              fontSize: '14',
            },
            min: 0,
            max: 20,
            interval: 10,
            axisLabel: {
              formatter: '{value} ',
              textStyle: {
                show:true,
                fontFamily:'微软雅黑',
                color: "#fff",
                fontSize: '14',
              },
            }
          }
        ],
        series: [
          {
            name: '开票金额',
            type: 'bar',
            color:'#25a9fb',
            tooltip: {
              valueFormatter: function (value) {
                return value;
              }
            },
            data: [
              5000.0, 1090, 1000, 2000, 1500, 2200, 2600,
              5000.0, 1000, 1000, 2000, 1500, 2200, 6000,
              5000.0, 1090, 1000, 2000, 5000, 2000, 6000,
              5000.0, 1090, 1000, 2000, 1500, 2000, 6000,
              5000.0, 900, 1000, 2000, 5000, 2000, 6000,
              5000,
            ]
          },
          {
            name: '增速',
            type: 'line',
            color: '#f5d592',
            yAxisIndex: 1,
            tooltip: {
              valueFormatter: function (value) {
                return value;
              }
            },
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 1.2, 0.3, 3.4, 3.0, 6.5, 12.0, 6.2,
              2.0, 2.2, 3.3, 4.5, 6.3, 1.2, 0.3, 3.4, 3.0, 6.5, 12.0, 6.2,2.0, 2.2,
              3.3, 4.5, 6.3, 1.2, 0.3, 3.4, 3.0, 6.5, 12.0, 6.2]
          }
        ]
      };
    }
  }
}
</script>

<style lang="scss" scoped>
.width-scroll{
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