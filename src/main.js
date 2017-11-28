// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('swiper/dist/css/swiper.css')

import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import router from './router'
import Axios from 'axios'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {Tabs,  TabPane,Form,FormItem,Dialog,Button, Collapse,CollapseItem,Input,InputNumber}  from 'element-ui'
import jquery from 'jquery'
import qs from "qs"
import VueResource from 'vue-resource'
Vue.use(VueAwesomeSwiper);
Vue.use(VueResource)
Vue.prototype.$axios = Axios;
Vue.use(Tabs);
Vue.use(Mint);
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(TabPane);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Input,InputNumber)
Vue.prototype.music='/music'
Vue.config.productionTip = false


Axios.interceptors.request.use(function(config) {
	if (config.method == "post") {
		config.data = qs.stringify(config.data);
	}
	return config;
}, function(error) {
	return Promise.reject(error);
});

Axios.interceptors.response.use(function(response) {
	return response;
}, function(error) {
	return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
