import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Antd from 'ant-design-vue';
import 'video.js/dist/video-js.css';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({ router, render: h => h(App) }).$mount('#app');
