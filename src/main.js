import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

import store from './store';
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.use(VueRouter)

import Register from './components/Register'
import Home from './components/Home'

const routes = [
  { name: 'login', path: '/register', component: Register },
  { name: 'home', path: '/', component: Home },
]

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
  