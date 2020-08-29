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
        <a-button @click="stopStream(ids)">Stop</a-button>
        <MapVideo v-if="m3u8" :m3u8="m3u8" />
        <!--<a-card class="right-plate" :bordered="false">
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
        </a-card>-->
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
import MapVideo from '@/views/Video';
import AreaDrawer from '@/views/AreaDrawer';

export default {
  name: 'Home',
  components: { Map, MapVideo, AreaDrawer },
  data: () => ({
    m3u8: '',
    socket: '',
    params: {},
    mapData: '',
    visible: false,
  }),
  created() {
    this.initWebSocket();
  },
  methods: {
    handleOpenDrawer(params) {
      this.visible = true;
      this.params = params;
      console.log(params);
    },
    handleCloseDrawer() {
      this.visible = false;
    },
    initWebSocket() {
      /* 请求中控后台，接受地区心跳包，点亮地图 */
      this.socket = new WebSocket('ws://120.79.196.97:8888/ws/server/zhenzhen');
      this.socket.onopen = () => void this.initStream();
      this.socket.onmessage = event => {
        this.mapData = JSON.parse(event.data);
        console.log(this.mapData.type, this.mapData);
        switch (this.mapData.type) {
          case 'push':
            console.log('push');
            this.m3u8 = this.mapData.aircraftList[0].resultUrl.m3u8Url;
            this.ids = this.mapData.aircraftList.map(item => item.id);
            break;
          case 'pull':
            console.log('pull');
            break;
          case 'stop':
            console.log('stop');
            break;
          case 'info':
            console.log('info');
            this.pushStream(this.mapData.aircraftList.map(item => item.mark));
            break;
          case 'allInfo':
            console.log('allInfo');
            break;
        }
      };
    },
    sendMessage(msg) {
      this.socket.send(JSON.stringify(msg));
    },
    initStream() {
      const initMessage = { msg: '', list: [], type: 'allInfo', location: '' };
      this.sendMessage(initMessage);
    },
    pushStream(push) {
      const pushMessage = { msg: '推流', list: push, type: 'push', location: 'guilin' };
      this.sendMessage(pushMessage);
    },
    pullStream(pull) {
      const pullMessage = { msg: '拉流', list: pull, type: 'pull', location: 'guilin' };
      this.sendMessage(pullMessage);
    },
    stopStream(stop) {
      const stopMessage = { msg: '停流', list: stop, type: 'stop', location: 'guilin' };
      this.sendMessage(stopMessage);
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
