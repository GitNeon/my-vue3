<script>
import GrowingTreeContainer from './modules/Container.vue';
import GrowingTreeAxis from './modules/Axis.vue';
import TreeContent from './modules/Tree.vue';

export default {
  name: 'GrowingTree',
  props: {
    config: {
      type: Object,
      require: true
    }
  },
  components: {
    TreeContent,
    GrowingTreeContainer,
    GrowingTreeAxis
  },
  methods: {
    handleTreeContentClick(data) {
      this.$emit('tree-click', data);
    }
  }
};
</script>

<template>
  <div class="outer-container">
    <GrowingTreeContainer>
      <template #axis>
        <GrowingTreeAxis :x-axis="config.xAxis" :y-axis="config.yAxis" />
      </template>
      <template #content>
        <TreeContent :list="config.treeList" @tree-click="handleTreeContentClick" />
      </template>
    </GrowingTreeContainer>
    <div class="other-content">其他区域内容</div>
  </div>
</template>

<style scoped>
.outer-container {
  position: relative;
  width: 680px;
  height: 620px;
}

.other-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  z-index: 2;
}
</style>
