// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueResource from 'vue-resource';

import VueScroller from 'vue-scroller';
Vue.use(VueScroller)
Vue.use(VueResource);
Vue.use(Mint);

Vue.config.productionTip = false;
Vue.config.debug = true;
/* eslint-disable no-new */
new Vue({
  router,
  store
}).$mount('#app')
