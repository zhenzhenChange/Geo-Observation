export default {
  title: {
    x: 'center',
    y: 'bottom',
    link: 'http://www.bootstrapmb.com/',
    text: '地图模板 http://www.bootstrapmb.com/',
  },
  geo: {
    map: 'china',
    layoutSize: '100%',
    aspectScale: 0.85,
    layoutCenter: ['50%', '50%'],
    itemStyle: {
      normal: {
        opacity: 0.5,
        shadowColor: '#276fce',
        shadowOffsetX: 0,
        shadowOffsetY: 15,
      },
    },
    regions: [
      {
        name: '南海诸岛',
        itemStyle: {
          areaColor: 'rgba(0, 10, 52, 1)',
          borderColor: 'rgba(0, 10, 52, 1)',
          normal: {
            opacity: 0,
            label: {
              show: false,
              color: '#009cc9',
            },
          },
        },
      },
    ],
  },
  tooltip: {
    trigger: 'item',
  },
  toolbox: {
    y: 'top',
    x: 'center',
    itemGap: 15,
    itemSize: 32,
    feature: {
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  series: [
    {
      map: 'china',
      type: 'map',
      name: '设备数量',
      layoutSize: '100%',
      aspectScale: 0.85,
      layoutCenter: ['50%', '50%'],
      itemStyle: {
        normal: {
          areaColor: '#0c274b',
          borderColor: '#1cccff',
          borderWidth: 1.5,
        },
        emphasis: {
          areaColor: '#02102b',
          label: {
            color: '#fff',
          },
        },
      },
      data: [
        { name: '北京', value: Math.round(Math.random() * 100) },
        { name: '天津', value: Math.round(Math.random() * 100) },
        { name: '上海', value: Math.round(Math.random() * 100) },
        { name: '重庆', value: Math.round(Math.random() * 100) },
        { name: '河北', value: Math.round(Math.random() * 100) },
        { name: '河南', value: Math.round(Math.random() * 100) },
        { name: '云南', value: Math.round(Math.random() * 100) },
        { name: '辽宁', value: Math.round(Math.random() * 100) },
        { name: '湖南', value: Math.round(Math.random() * 100) },
        { name: '安徽', value: Math.round(Math.random() * 100) },
        { name: '山东', value: Math.round(Math.random() * 100) },
        { name: '新疆', value: Math.round(Math.random() * 100) },
        { name: '江苏', value: Math.round(Math.random() * 100) },
        { name: '浙江', value: Math.round(Math.random() * 100) },
        { name: '江西', value: Math.round(Math.random() * 100) },
        { name: '湖北', value: Math.round(Math.random() * 100) },
        { name: '广西', value: Math.round(Math.random() * 100) },
        { name: '甘肃', value: Math.round(Math.random() * 100) },
        { name: '山西', value: Math.round(Math.random() * 100) },
        { name: '陕西', value: Math.round(Math.random() * 100) },
        { name: '吉林', value: Math.round(Math.random() * 100) },
        { name: '福建', value: Math.round(Math.random() * 100) },
        { name: '贵州', value: Math.round(Math.random() * 100) },
        { name: '广东', value: Math.round(Math.random() * 100) },
        { name: '青海', value: Math.round(Math.random() * 100) },
        { name: '西藏', value: Math.round(Math.random() * 100) },
        { name: '四川', value: Math.round(Math.random() * 100) },
        { name: '宁夏', value: Math.round(Math.random() * 100) },
        { name: '海南', value: Math.round(Math.random() * 100) },
        { name: '台湾', value: Math.round(Math.random() * 100) },
        { name: '香港', value: Math.round(Math.random() * 100) },
        { name: '澳门', value: Math.round(Math.random() * 100) },
        { name: '黑龙江', value: Math.round(Math.random() * 100) },
        { name: '内蒙古', value: Math.round(Math.random() * 100) },
      ],
    },
    {
      type: 'effectScatter',
      symbolSize: 8,
      coordinateSystem: 'geo',
      rippleEffect: {
        scale: 10,
        color: 'red',
        period: 2,
        brushType: 'stroke',
      },
      label: {
        normal: {
          show: true,
          color: '#b3e2f2',
          fontSize: 14,
          position: 'insideTop',
          formatter: '{b}',
        },
      },
      data: [
        {
          name: '北京',
          value: [116.24, 39.55],
        },
        {
          name: '深圳',
          value: [114.271522, 22.753644],
        },

        {
          name: '重庆',
          value: [106.54, 29.59],
        },
        {
          name: '浙江',
          value: [120.19, 30.26],
        },
        {
          name: '上海',
          value: [121.4648, 31.2891],
        },
      ],
      itemStyle: {
        normal: {
          show: true,
          color: 'red',
          shadowBlur: 20,
          shadowColor: '#fff',
        },
        emphasis: {
          areaColor: '#f00',
        },
      },
    },
  ],
};
