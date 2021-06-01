import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./core"
import "./assets/css/normalize.css" //引入初始化样式

import a from './components/common/a'
Vue.use(a)

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
import {
  MoveModal
} from './components/moveModal/index.js';
Vue.use(MoveModal);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')