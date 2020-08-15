<template>
  <div id="map"></div>
</template>

<script>
import 'echarts/theme/shine';
import echarts from 'echarts';
import mapOptions from '@/echartsConfig/options';
import chinaMapGeo from 'echarts/map/json/china.json';

export default {
  name: 'Map',
  created() {
    echarts.registerMap('china', chinaMapGeo);
  },
  mounted() {
    const map = echarts.init(document.getElementById('map'), 'shine');
    map.setOption(mapOptions);
    map.on('click', params => void this.$emit('open-modal', params));
    window.onresize = () => void map.resize();
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 45vw;
  height: 45vw;
  margin: 0 auto;
  border: solid 1px #124583;
}
</style>
