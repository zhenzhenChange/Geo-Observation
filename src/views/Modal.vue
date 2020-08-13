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
      <span><a-icon type="plus" class="mr-4" />{{ title }}</span>
    </template>

    <!-- 模态窗 - 主体（插槽：用于内容填充） -->
    <!--<template>{{ params.name }}</template>-->
    <MapVideo />

    <!--<video src="http://tanjm999.uav-cas.ac.cn/live/guilin7b77b1aa.flv"></video>-->

    <!-- 模态窗 - 底部 -->
    <template slot="footer">
      <a-button icon="rollback" @click="handleCancel">取消</a-button>
      <a-button icon="check-circle" type="primary" :loading="loading" @click="handleOk">
        提交
      </a-button>
    </template>
  </a-modal>
</template>

<script>
import MapVideo from '@/views/Video';

export default {
  // 基础模态窗
  name: 'BaseModal',
  props: {
    // 模态窗宽度
    visible: {
      type: Boolean,
      required: true,
    },
    params: {
      type: Object,
      required: true,
    },
    // 模态窗标题
    title: {
      type: String,
      default: '提示',
    },
    // 消息通知 - 接收父组件表单校验情况
    notify: {
      type: Boolean,
      default: false,
    },
  },
  components: { MapVideo },
  data: () => ({
    // 按钮 loading 控制
    loading: false,
  }),
  methods: {
    /**
     * 提交按钮
     * 1.触发父组件提交表单事件
     * 2.根据表单校验结果决定是否继续执行
     * 3.切换 loading
     * 4.延迟关闭
     * 5.使用父级作用域的关闭事件关闭模态窗
     */
    handleOk() {
      this.$emit('close-modal');

      /**
       * 1.父组件状态（数据）发生改变
       * 2.但组件更新是异步的，本事件处理是同步的
       * 3.所以本组件需在下一轮事件循环读取最新的状态（数据）
       */
      // this.$nextTick(() => {
      //   if (this.notify) return;
      //   this.toggleLoading();
      //   setTimeout(() => {
      //     this.toggleLoading();
      //     this.$emit('close-modal');
      //   }, 2000);
      // });
    },

    /**
     * 取消按钮
     * 1.使用父级作用域的关闭事件关闭模态窗
     */
    handleCancel() {
      this.$emit('close-modal');
    },

    /* 切换 loading */
    toggleLoading() {
      this.loading = !this.loading;
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
