// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 解决es6-prosime问题
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300ms延迟
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

// 官网用法，点击没有300ms延时
fastclick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
