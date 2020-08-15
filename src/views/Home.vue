<template>
  <a-card class="home" :bordered="false">
    <a-row>
      <a-col :span="4" class="left">
        <span class="left-title">地理观测中控</span>
        <a-card class="left-options" :bordered="false">
          <img slot="cover" :src="require('@/assets/images/options.jpg')" />
          <a-card-meta title="选项配置" description="This is very cool~" />
        </a-card>
      </a-col>
      <a-col :span="16">
        <Map @open-modal="handleOpenModal" />
      </a-col>
      <a-col :span="4" class="right">
        <a-card class="right-plate" :bordered="false">
          <img slot="cover" :src="require('@/assets/images/options.jpg')" />
          <a-card-meta title="在线地区" description="This is very cool~" />
        </a-card>
        <a-card class="right-plate" :bordered="false">
          <img slot="cover" :src="require('@/assets/images/options.jpg')" />
          <a-card-meta title="在线设备" description="This is very cool~" />
        </a-card>
        <a-card class="right-plate" :bordered="false">
          <img slot="cover" :src="require('@/assets/images/options.jpg')" />
          <a-card-meta title="异常处理" description="This is very cool~" />
        </a-card>
        <a-card class="right-plate" :bordered="false">
          <img slot="cover" :src="require('@/assets/images/options.jpg')" />
          <a-card-meta title="消息通知" description="This is very cool~" />
        </a-card>
      </a-col>
    </a-row>
    <Modal :visible="visible" :params="params" @close-modal="handleCloseModal" />
  </a-card>
</template>

<script>
import Map from '@/views/Map';
import Modal from '@/views/Modal';

export default {
  name: 'Home',
  components: { Map, Modal },
  data: () => ({ visible: false, params: {} }),
  methods: {
    handleOpenModal(params) {
      this.visible = true;
      this.params = { ...params };
      console.log(params);
    },
    handleCloseModal() {
      this.visible = false;
    },
  },
  created() {
    // const socket = new WebSocket('ws://120.79.196.97:8888/ws/server/zhenzhen');
    // socket.onopen = () =>
    //   socket.send(
    //     JSON.stringify({
    //       type: 'stop',
    //       msg: '钟祯',
    //       location: 'guilin',
    //       list: ['c3c3e2af'],
    //     }),
    //   );
    // socket.onmessage = event => {
    //   console.log(JSON.parse(event.data));
    // };
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  background-color: #0d325f;

  .left {
    text-align: center;

    .left-title {
      font-size: 24px;
      color: #ffffff;
      font-weight: bold;
      letter-spacing: 2px;
    }

    .left-options {
      width: 100%;
      margin-top: 16px;
    }
  }

  .right {
    text-align: center;

    .right-plate {
      width: 100%;
      margin: 16px 0;
    }
  }
}
</style>
