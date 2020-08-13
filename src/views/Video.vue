<template>
  <video
    id="mapVideo"
    class="video-js vjs-default-skin vjs-big-play-centered vjs-16-9"
    controls
    preload="auto"
    webkit-playsinline="true"
    playsinline="true"
    type="application/x-mpegURL"
    allowsInlineMediaPlayback="YES"
    webview.allowsInlineMediaPlayback="YES"
    width="100%"
    ref="videoRef"
    x5-video-player-fullscreen="true"
    :poster="posterSrc"
  >
    <source id="sourceBox" :src="videoSrc" />
    <p class="vjs-no-js">不支持播放</p>
  </video>
</template>

<script>
import 'videojs-contrib-hls';
import video from 'video.js';

const options = {
  bigPlayButton: true,
  textTrackDisplay: true,
  posterImage: true,
  errorDisplay: false,
  controlBar: false,
  playbackRates: [0.5, 1, 1.5, 2],
  ControlBar: {
    customControlSpacer: true,
  },
};

export default {
  name: 'MapVideo',
  data: () => ({
    mapVideo: '',
    videoSrc:
      'https://vdept.bdstatic.com/6a764d366843596b5566385937673144/3854733856553378/c8b639388bc9637913cd94ff6203b64b3abc3e851def2e8533985fd83becdfaea7d88b717ef4f8f75d30ec7a8f11dcf7.mp4?auth_key=1597322383-0-0-ea1650ec2b0f32a47688c98a80b60c46',
    posterSrc:
      'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2534506313,1688529724&fm=26&gp=0.jpg',
  }),
  mounted() {
    const that = this;
    this.mapVideo = video(this.$refs.videoRef, options, function() {
      console.log(that);
      console.log(this);
    });
  },
  destroyed() {
    this.mapVideo.dispose();
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
