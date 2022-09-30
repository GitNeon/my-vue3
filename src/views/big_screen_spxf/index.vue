<template>
  <div class="container">
    <div class="date-select">
      <div style="width: 65px">时间：</div>
      <el-date-picker v-model="value1" type="date" placeholder="选择日期"> </el-date-picker>
    </div>
    <div class="parent">
      <div class="top-left">
        <SrBox title=" 分月商品消费增速"></SrBox>
      </div>
      <div class="top-medium">
        <SrBox title=" 分月分类型商品消费增速"> </SrBox>
      </div>
      <div class="bottom">
        <SrBox title=" 分省份商品消费增速"></SrBox>
      </div>
      <div class="right">
        <SrBox title=" 分类型商品消费增速"></SrBox>
      </div>
    </div>
  </div>
</template>

<script>
import SrBox from './components/sr-box.vue';
export default {
  components: {
    SrBox,
  },
  data() {
    return {
      value1: '',
    };
  },
  methods: {},
};
</script>

<style scoped>
.container {
  padding: 40px 30px;
  height: 100%;
  background-image: url('../src/assets/img/bg.jpg');
  background-size: 100% 100%;
  color: white !important;
}

.date-select {
  display: flex;
  width: 240px;
  height: 40px;
  line-height: 40px;
  margin: 20px 10px;
}

.parent {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  height: calc(100% - 100px);
}

.parent div {
  padding: 10px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: auto;
}

.top-left {
  grid-area: 1 / 1 / 2 / 2;
  background-image: url('../src/assets/img/normal_container.png');
}

.top-medium {
  grid-area: 1 / 2 / 2 / 3;
  background-image: url('../src/assets/img/normal_container.png');
}

.bottom {
  grid-area: 2 / 1 / 3 / 3;
  background-image: url('../src/assets/img/width_container.png');
}

.right {
  grid-area: 1 / 3 / 3 / 4;
  background-image: url('../src/assets/img/height_container.png');
}
</style>
