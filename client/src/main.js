import Vue from 'vue'
import App from './App.vue'
import '../public/css/global.css'


import store from './store/index'

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

import { Toast } from 'vant';

Vue.use(Toast);

import router from './router'


import axios from 'axios';
Vue.prototype.$axios = axios;

import sha256 from 'js-sha256';
Vue.prototype.$sha256 = sha256;

import qs from	'qs';
Vue.prototype.$qs = qs;

import contextPath from '../public/js/config'
Vue.prototype.$url = contextPath;

import vfilters from './filters/index'
for (const key in vfilters) {
    Vue.filter(key,vfilters[key])
}


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
