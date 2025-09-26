<script>
import iconA from '../img/icon/a.svg';
import iconA2 from '../img/icon/a2.svg';
import iconB from '../img/icon/b.svg';
import iconB2 from '../img/icon/b2.svg';
import iconC from '../img/icon/c.svg';
import iconC2 from '../img/icon/c2.svg';
import iconD from '../img/icon/d.svg';
import iconD2 from '../img/icon/d2.svg';
import iconE from '../img/icon/e.svg';
import iconE2 from '../img/icon/e2.svg';
import iconF from '../img/icon/f.svg';
import iconF2 from '../img/icon/f2.svg';

const iconMap = {
  a: iconA,
  a2: iconA2,
  b: iconB,
  b2: iconB2,
  c: iconC,
  c2: iconC2,
  d: iconD,
  d2: iconD2,
  e: iconE,
  e2: iconE2,
  f: iconF,
  f2: iconF2
};

export default {
  name: 'TreeLeaf',
  props: {
    /**
     * 叶子方向
     * left: 叶子向左
     * right: 叶子向右
     * top: 顶部叶子
     */
    direction: {
      type: String,
      required: true
    },
    /**
     * 高度偏移
     */
    offsetHeight: {
      type: Number,
      default: 0
    },
    /**
     * 数据
     */
    nodeData: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getIcon(data) {
      const status = data.status;
      const icon = data.icon;
      const key = icon + (status === 'danger' ? '2' : '');
      return iconMap[key];
    },
    handleTreeLeafClick(nodeData) {
      this.$emit('treeLeafClick', nodeData);
    }
  }
};
</script>

<template>
  <div :style="{ bottom: offsetHeight + 'px' }" :class="['leaf-item', direction, nodeData.status]">
    <div class="content" @click="handleTreeLeafClick(nodeData)">
      <div class="title">{{ nodeData.title || '--' }} {{ nodeData.eventCount || '' }}</div>
      <div class="sub-title">{{ nodeData.subTitle || '--' }}</div>
      <div class="date">{{ nodeData.date || '--' }}</div>
    </div>
    <img class="small-icon" :src="getIcon(nodeData)" alt="icon" />
  </div>
</template>

<style scoped>
.leaf-item {
  position: absolute;
  width: 175px;
  height: 224px;
  cursor: pointer;
}

.leaf-item.left {
  left: 13px;
  background-image: url('../img/leaf-bg-left.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.leaf-item.left.danger {
  background-image: url('../img/leaf-bg-left-danger.svg');
}

.leaf-item.right {
  right: 0;
  background-image: url('../img/leaf-bg-right.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.leaf-item.right.danger {
  background-image: url('../img/leaf-bg-right-danger.svg');
}

.content {
  width: 96px;
  height: 91px;
  z-index: 2;
  text-align: center;
  color: white;
}

.leaf-item.left .content {
  margin-left: 10px;
  margin-top: 18px;
}

.leaf-item.right .content {
  margin-left: 66px;
  margin-top: 18px;
}

.leaf-item.top .content {
  margin-left: 40px;
  margin-top: 20px;
}

.leaf-item.left .small-icon {
  position: absolute;
  left: 6px;
  top: 9px;
}

.leaf-item.right .small-icon {
  position: absolute;
  right: 9px;
  top: 9px;
}

.leaf-item.top .small-icon {
  position: absolute;
  left: 125px;
  top: 9px;
}

.content .title {
  font-size: 18px;
  font-weight: 700;
  text-decoration-line: underline;
  text-underline-offset: 4px;
}

.content .sub-title,
.content .date {
  font-size: 14px;
}

.top {
  left: 50%;
  background-image: url('../img/leaf-bg-top.svg');
  background-repeat: no-repeat;
  background-size: contain;
  transform: translateX(-50%);
  background-position: 31px center;
}

.top .danger {
  background-image: url('../img/leaf-bg-top.svg');
}
</style>
