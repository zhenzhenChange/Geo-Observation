<template>
  <div id="mapVideo"></div>
</template>

<script>
// import flv from 'flv.js';
import Hls from 'hls.js';
import DPlayer from 'dplayer';

export default {
  name: 'MapVideo',
  data: () => ({
    mapVideo: '',
    videoSrc: 'http://tanjm999.uav-cas.ac.cn/live/guilin-ab30d3e0.m3u8',
    posterSrc:
      'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
    address: 'http://192.168.3.16:8848',
    id: '',
    pushRequest: {
      markList: [],
    },
    stopRequest: {
      idList: [],
    },
  }),
  mounted() {
    new DPlayer({
      container: document.getElementById('mapVideo'),
      video: {
        url: this.videoSrc,
        /* type: 'customFlv',
        customType: {
          customFlv(video, player) {
            const flvPlayer = flv.createPlayer({
              type: 'flv',
              url: video.src,
            });
            flvPlayer.attachMediaElement(video);
            flvPlayer.load();
            console.log(player);
          },
        }, */
        type: 'customHls',
        customType: {
          customHls(video /* player */) {
            const hls = new Hls();
            hls.loadSource(video.src);
            hls.attachMedia(video);
          },
        },
      },
    });
  },
  created() {
    this.getInfo();
    this.pushVideo();
    this.stopVideo();
    this.isAlive();
  },
  methods: {
    //获取信息函数
    getInfo: function() {
      this.$HTTP.get(this.address + '/api/steam/info').then(
        resp => {
          console.log(resp);
        },
        err => {
          console.log(err);
        },
      );
    },
    //拉流函数
    pushVideo: function() {
      this.$HTTP.post(this.address + '/api/stream/push', this.pushRequest).then(
        resp => {
          console.log(resp);
        },
        err => {
          console.log(err);
        },
      );
    },
    //停流函数
    stopVideo: function() {
      this.$HTTP.post(this.address + '/api/stream/stop', this.stopRequest).then(
        resp => {
          console.log(resp);
        },
        err => {
          console.log(err);
        },
      );
    },
    //检查进程是否运行的函数
    isAlive: function() {
      this.$HTTP.get(this.address + '/api/steam/alive?id=' + this.id).then(
        resp => {
          console.log(resp);
        },
        err => {
          console.log(err);
        },
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.vjs-paused .vjs-big-play-button,
.vjs-paused.vjs-has-started .vjs-big-play-button {
  display: block;
}

.video-js .vjs-big-play-button {
  font-size: 2.5em;
  line-height: 2.3em;
  height: 2.5em;
  width: 2.5em;
  -webkit-border-radius: 2.5em;
  -moz-border-radius: 2.5em;
  border-radius: 2.5em;
  background-color: #73859f;
  background-color: rgba(115, 133, 159, 0.5);
  border-width: 0.15em;
  margin-top: -1.25em;
  margin-left: -1.75em;
}
/* 中间的播放箭头 */
.vjs-big-play-button .vjs-icon-placeholder {
  font-size: 1.63em;
}
/* 加载圆圈 */
.vjs-loading-spinner {
  font-size: 2.5em;
  width: 2em;
  height: 2em;
  border-radius: 1em;
  margin-top: -1em;
  margin-left: -1.5em;
}
</style>
