import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css' // 初始化css引入
import './plugins/element.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')