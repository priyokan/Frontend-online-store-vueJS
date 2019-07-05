import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import VueRouter from 'vue-router'
import {Routes} from './routes'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueRouter)
Vue.use(VueMaterial)
Vue.config.productionTip = false

const router = new VueRouter({
  mode :'history',
  routes :Routes() 
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
