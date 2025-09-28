<script>
export default {
  name: 'GrowingTreeAxis',
  props: {
    xAxis: {
      type: Object,
      require: true
    },
    yAxis: {
      type: Object,
      require: true
    }
  },
  data() {
    return {};
  },
  methods: {
    parseXItem(index) {
      if (!this.xAxis) {
        return '--';
      }
      return this.xAxis.data[index];
    },
    parseYItem(index) {
      if (!this.yAxis) {
        return '--';
      }
      return this.yAxis.data[index];
    }
  }
};
</script>

<template>
  <g>
    <g id="y-axis-container">
      <text id="y-axis-name" fill="black" y="12">{{ yAxis.name }}</text>
      <path id="y-axis-arrow" d="M0 0 L6 9 L-6 9 Z" transform="translate(6,16)" />
      <path id="y-axis-line-limit" d="M4 39L8 39L8 25L4 25Z" />
      <path id="y-axis-line" d="M4 39L8 39L8 596L4 596Z" />
      <g id="y-axis-tick">
        <g class="axis-tick-item limit">
          <text x="24" y="35">{{ parseYItem(0) }}</text>
          <rect x="8" y="30" width="11" height="2" />
        </g>
        <g class="axis-tick-item">
          <text x="24" y="65" class="active">{{ parseYItem(1) }}</text>
          <rect x="8" y="60" width="11" height="2" />
          <line x1="50" y1="61" x2="591" y2="61" stroke-width="2" />
        </g>
        <g class="axis-tick-item">
          <text x="24" y="133">{{ parseYItem(2) }}</text>
          <rect x="8" y="128" width="11" height="2" />
          <line x1="50" y1="129" x2="591" y2="129" stroke-dasharray="2,2" />
        </g>
        <g class="axis-tick-item">
          <text x="24" y="201">{{ parseYItem(3) }}</text>
          <rect x="8" y="196" width="11" height="2" />
          <line x1="50" y1="197" x2="591" y2="197" stroke-dasharray="2,2" />
        </g>
      </g>
    </g>
    <g id="x-axis-container">
      <text id="x-axis-name" fill="black" x="598" y="598">{{ xAxis.name }}</text>
      <path id="x-axis-arrow" d="M0 0 L6 9 L-6 9 Z" transform="matrix(0,1,-1,0,592,594)" />
      <path id="x-axis-line" d="M0 0L4 0L4 578L0 578L0 0Z" transform="matrix(0,1,-1,0,584,592.119)" />
      <g id="x-axis-tick">
        <g class="axis-tick-item">
          <text x="46" y="611" text-anchor="middle">{{ parseXItem(0) }}</text>
          <rect x="46" y="581" width="2" height="11" />
        </g>
        <g class="axis-tick-item">
          <text x="166" y="611" text-anchor="middle">{{ parseXItem(1) }}</text>
          <rect x="166" y="581" width="2" height="11" />
        </g>
        <g class="axis-tick-item">
          <text x="286" y="611" text-anchor="middle">{{ parseXItem(2) }}</text>
          <rect x="286" y="581" width="2" height="11" />
        </g>
        <g class="axis-tick-item">
          <text x="406" y="611" text-anchor="middle">{{ parseXItem(3) }}</text>
          <rect x="406" y="581" width="2" height="11" />
        </g>
        <g class="axis-tick-item">
          <text x="528" y="611" text-anchor="middle">{{ parseXItem(4) }}</text>
          <rect x="528" y="581" width="2" height="11" />
        </g>
      </g>
    </g>
  </g>
</template>

<style scoped>
#y-axis-container,
#x-axis-container path {
  fill: rgb(208, 231, 255);
}

.axis-tick-item rect {
  fill: rgb(208, 231, 255);
}

.axis-tick-item text {
  fill: #909399;
}

.axis-tick-item text.active {
  fill: #409eff;
  font-weight: 600;
}

.axis-tick-item line {
  stroke: rgb(208, 231, 255);
}

text {
  font-size: 12px;
  fill: black;
  font-weight: 400;
}
</style>
