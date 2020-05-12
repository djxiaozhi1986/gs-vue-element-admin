import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import GLOBAL from './global';
import '../theme/index.css';
import '@/styles/index.scss'; // global css
import ElementUI from 'element-ui';
import './permission';
import './mock';
import './assets/icon/iconfont.css';
import ECharts from 'vue-echarts';
import theme from '@/styles/chart-theme.json'

Vue.use(ElementUI);
Vue.config.productionTip = false;
ECharts.registerTheme('chart-theme',theme)
Vue.component('v-chart', ECharts);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
