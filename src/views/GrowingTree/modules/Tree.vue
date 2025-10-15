<script>
import TreeLeaf from './TreeLeaf.vue';
export default {
  name: 'TreeContent',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {
    TreeLeaf
  },
  methods: {
    handleLeafClick(nodeData) {
      this.$emit('tree-click', nodeData);
    },
    getColor(status) {
      if (status === 'normal') {
        return 'rgb(62, 152, 255)';
      }
      if (status === 'danger') {
        return 'red';
      }
    },
    getDirection(index, list) {
      if (index === list.length - 1) return 'top';
      return index % 2 ? 'left' : 'right';
    }
  }
};
</script>

<template>
  <g id="tree-area">
    <foreignObject x="172" y="60" width="350" height="530">
      <div xmlns="http://www.w3.org/1999/xhtml" class="tree-container" @click="handleLeafClick">
        <tree-leaf
          :key="index"
          v-for="(item, index) in list"
          :direction="getDirection(index, list)"
          :offset-height="60 * index"
          :color="getColor(item.status)"
          :nodeData="item"
          :level="index + 2"
          @tree-leaf-click="handleLeafClick"
        ></tree-leaf>
        <div class="base-line" @click.stop="handleLeafClick({ type: 'bottom-line' })"></div>
      </div>
    </foreignObject>
  </g>
</template>

<style scoped>
.tree-container {
  position: relative;
  width: 350px;
  height: 530px;
  /*  background-color: aliceblue;*/
}

.base-line {
  position: absolute;
  bottom: 0;
  width: 84px;
  height: 11px;
  background-color: rgb(62, 152, 255);
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  cursor: pointer;
}

text {
  fill: black;
}
</style>
