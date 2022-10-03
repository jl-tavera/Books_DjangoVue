// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'node_modules/bootstrap/scss/bootstrap.scss';
import 'node_modules/bootstrap-vue/src/index.scss';
import './app.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
