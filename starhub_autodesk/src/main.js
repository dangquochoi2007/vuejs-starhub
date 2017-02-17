// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import App from './components/App'

/* App sass */
import './assets/style/app.scss'
/* App component */

/* eslint-disable no-new */
new Vue({
  el: '#wrapper',
  router,
  template: '<App/>',
  components: { App }
})
