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
  data() {
    return {};
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
    <div class="other-content">
      <div class="legend">
        <div class="rect normal"></div>
        <div>基础事项</div>
      </div>
      <div class="legend">
        <div class="rect danger"></div>
        <div>风险事项</div>
      </div>
    </div>
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
  display: flex;
  gap: 10px;
  top: 0;
  left: 80px;
  text-align: center;
  z-index: 2;
  font-size: 12px;
}

.legend {
  display: flex;
  font-size: 12px;
  gap: 4px;
  align-items: center;
}

.rect.normal {
  width: 12px;
  height: 12px;
  background-color: #409eff;
}

.rect.danger {
  width: 12px;
  height: 12px;
  background-color: #f56c6c;
}
</style>
