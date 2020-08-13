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

    map.on('click', params => {
      this.$emit('open-modal', params);
    });

    window.onresize = function() {
      // resizeMyChartContainer();
      map.resize();
    };
  },
};
</script>

<style lang="scss" scoped>
#map {
  width: 100vw;
  height: 100vh;
}
</style>
