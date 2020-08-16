<template>
  <div class="echarts-map">
    <div id="map"></div>
  </div>
</template>

<script>
import 'echarts/theme/shine';
import echarts from 'echarts';
import mapOptions from '@/echartsConfig/options';
import chinaMapGeo from 'echarts/map/json/china.json';

export default {
  name: 'Map',
  data: () => ({ map: '' }),
  created() {
    echarts.registerMap('china', chinaMapGeo);
  },
  mounted() {
    setTimeout(() => {
      this.map = echarts.init(document.getElementById('map'));
      this.renderMap();
    });

    window.addEventListener('resize', () => void this.map.resize());
  },
  methods: {
    renderMap() {
      this.map = echarts.init(document.getElementById('map'));
      /* 赋值为新数据 */
      // mapOptions.series.find(option => option.type == 'effectScatter').data = [];

      this.map.setOption(mapOptions);
      this.map.on('click', params => void this.$emit('open-drawer', params));
    },
  },
};
</script>

<style lang="scss" scoped>
.echarts-map {
  margin: 0 auto;
  width: calc(100% - 75px);
  height: calc(100vh - 75px);

  #map {
    width: 100%;
    height: 100%;
    border: solid 1px #124583;
  }
}
</style>
