<template>
  <div class="container">
    <div>
      <h2>关于大屏的适配文章：https://mp.weixin.qq.com/s/mFQYkM8RXOKLg6xhCm_KQQ</h2>
    </div>
    <h3>下面是常见适配方案的简述：</h3>
    <div style="margin-bottom: 20px">
      <el-table :data="tableData" border>
        <el-table-column prop="fn" label="方案" width="180" />
        <el-table-column prop="fs" label="实现方式" width="240" />
        <el-table-column prop="yd" label="优点" width="240" />
        <el-table-column prop="qd" label="缺点" width="240" />
      </el-table>
    </div>
    <div style="margin-right: 20px">
      <el-button @click="go('/bigScreen/vwvh')">点我查看vw-vh方案</el-button>
    </div>
    <div style="margin-right: 20px">
      <el-button @click="go('/bigScreen/scale')">点我查看scale方案</el-button>
    </div>
    <div style="margin-right: 20px">
      <el-button @click="go('/bigScreen/vscale')">点我查看v-scale-screen插件方案</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const tableData = [
  {
    fn: 'vw vh',
    fs: '1.按照设计稿的尺寸，将px按比例计算转为vw和vh',
    yd: '1.可以动态计算图表的宽高，字体等，灵活性较高 2.当屏幕比例跟 ui 稿不一致时，不会出现两边留白情况',
    qd: '1.每个图表都需要单独做字体、间距、位移的适配，比较麻烦'
  },
  {
    fn: 'scale',
    fs: '1.通过 scale 属性，根据屏幕大小，对图表进行整体的等比缩放',
    yd: '1.代码量少，适配简单 2.一次处理后不需要在各个图表中再去单独适配',
    qd:
      '1.因为是根据 ui 稿等比缩放，当大屏跟 ui 稿的比例不一样时，会出现周边留白情况  2.当缩放比例过大时候，字体会有一点点模糊，' +
      '就一点点  3.当缩放比例过大时候，事件热区会偏移。'
  },
  {
    fn: 'rem + vm vh',
    fs: '1.获得 rem 的基准值 2.动态的计算html根元素的font-size 3.图表中通过 vm vh 动态计算字体、间距、位移等',
    yd: '1.布局的自适应代码量少，适配简单',
    qd: '1.因为是根据 ui 稿等比缩放，当大屏跟 ui 稿的比例不一样时，会出现周边留白情况 2.图表需要单个做字体、间距、位移的适配'
  }
];

const go = (path: string) => {
  router.push({
    path: path
  });
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  justify-content: center;
  align-items: center;
}
</style>
