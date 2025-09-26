<script>
export default {
  name: 'GrowingTreeContainer',
  computed: {
    svgAttr() {
      return {
        viewBox: '0 0 676 616',
        width: 676,
        height: 616,
        fill: 'none'
      };
    }
  }
};
</script>

<template>
  <svg v-bind="svgAttr">
    <slot name="axis"></slot>
    <slot name="content"></slot>
  </svg>
</template>

<style scoped></style>
