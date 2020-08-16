<template>
  <a-card class="home" :bordered="false">
    <a-row>
      <a-col :span="4" class="left">
        <span class="left-title">地理观测中控</span>
        <a-card class="left-options" :bordered="false">
          <img slot="cover" :src="require('@/assets/images/options.jpg')" />
          <a-card-meta title="选项配置" description="This is very cool~" />
          <div class="item">
            <div class="item-label">自动推流：</div>
            <div class="item-switch">
              <a-switch checked-children="开" un-checked-children="关" default-checked />
            </div>
          </div>
          <div class="item">
            <div class="item-label">自动拉流：</div>
            <div class="item-switch">
              <a-switch checked-children="开" un-checked-children="关" default-checked />
            </div>
          </div>
          <div class="item">
            <div class="item-label">自动停流：</div>
            <div class="item-switch">
              <a-switch checked-children="开" un-checked-children="关" default-checked />
            </div>
          </div>
          <a-button block icon="save" type="primary">保存</a-button>
        </a-card>
      </a-col>
      <a-col :span="16">
        <Map @open-drawer="handleOpenDrawer" />
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
    <AreaDrawer
      :visible="visible"
      :area-params="params"
      @open-drawer="handleOpenDrawer"
      @close-drawer="handleCloseDrawer"
    />
  </a-card>
</template>

<script>
import Map from '@/views/Map';
import AreaDrawer from '@/views/AreaDrawer';

// 首次初始化所有地区数据 type: 'allInfo'
const initMessage = {
  msg: '',
  list: [],
  type: 'allInfo',
  location: '',
};

export default {
  name: 'Home',
  components: { Map, AreaDrawer },
  data: () => ({ socket: '', params: {}, mapData: '', visible: false }),
  created() {
    this.initWebSocket();
  },
  methods: {
    handleOpenDrawer(params) {
      this.visible = true;
      this.params = { ...params };
      console.log(params);
    },
    handleCloseDrawer() {
      this.visible = false;
    },
    initWebSocket() {
      /* 请求中控后台，接受地区心跳包，点亮地图 */
      this.socket = new WebSocket('ws://120.79.196.97:8888/ws/server/zhenzhen');
      this.socket.onopen = () => void this.sendMessage(initMessage);
      this.socket.onmessage = event => void (this.mapData = JSON.parse(event.data));
    },
    sendMessage(msg) {
      this.socket.send(JSON.stringify(msg));
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  background-color: #0d325f !important;

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

      .item {
        display: flex;
        margin: 16px 0;

        .item-label {
          flex: 4;
        }

        .item-switch {
          flex: 6;
          text-align: left;
        }
      }
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
