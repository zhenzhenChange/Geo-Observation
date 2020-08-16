<template>
  <a-drawer
    height="70%"
    placement="top"
    :visible="visible"
    :keyboard="false"
    :destroy-on-close="true"
    @close="hanldeClose"
  >
    <template slot="title"><a-badge status="success" />{{ areaParams.name }}</template>
    <p>{{ areaParams.name }}</p>
    <p>设备数量：{{ areaParams.data }}</p>
  </a-drawer>
</template>
<script>
export default {
  props: {
    areaParams: {
      type: Object,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    hanldeClose() {
      this.$emit('close-drawer');
    },
  },
};
</script>
