// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MixinGeneral from '@/mixins/general.js'
// import 'vue-material-design-icons/styles.css'
import VueTouch from 'vue-touch'

Vue.config.productionTip = false
Vue.mixin(MixinGeneral)
Vue.use(VueTouch)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
