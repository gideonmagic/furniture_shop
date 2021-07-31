import Vue from 'vue'
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
import App from './App.vue'
import router from './router'
import '@/assets/css/reset.css' // 初始化css引入
import './plugins/element.js'

// Vue.use(MintUI)
Vue.config.productionTip = false
// 缓存方法
import {
  localData,
  sessionData
} from "@/assets/js/local"
Vue.prototype.localData = localData;
Vue.prototype.sessionData = sessionData;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')