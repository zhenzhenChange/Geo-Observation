<template>
  <!-- 基础组件 - 模态窗 -->
  <a-modal
    width="35%"
    class="base-modal"
    v-model="visible"
    :centered="true"
    :closable="false"
    :keyboard="false"
    :mask-closable="false"
    :destroy-on-close="true"
  >
    <!-- 模态窗 - 头部 -->
    <template slot="title">
      <span><a-icon type="home" class="mr-4" />{{ params.name }}</span>
    </template>

    <!-- 模态窗 - 主体（插槽：用于内容填充） -->
    <!--<template>{{ params.name }}</template>-->
    <MapVideo />

    <!--<video src="http://tanjm999.uav-cas.ac.cn/live/guilin7b77b1aa.flv"></video>-->

    <!-- 模态窗 - 底部 -->
    <template slot="footer">
      <a-button icon="rollback" @click="handleCancel">取消</a-button>
      <a-button icon="check-circle" type="primary" @click="handleOk">确定</a-button>
    </template>
  </a-modal>
</template>

<script>
import MapVideo from '@/views/Video';

export default {
  name: 'AreaModal',
  props: {
    // 控制模态窗的显示状态
    visible: {
      type: Boolean,
      required: true,
    },
    params: {
      type: Object,
      required: true,
    },
  },
  components: { MapVideo },
  methods: {
    handleOk() {
      this.$emit('close-modal');
    },
    handleCancel() {
      this.$emit('close-modal');
    },
  },
};
</script>

<style lang="scss" scoped>
.base-modal {
  ::v-deep .ant-form-item {
    margin: 16px 0;
  }

  ::v-deep .ant-modal-body {
    padding: 16px 24px;
  }
}
</style>
