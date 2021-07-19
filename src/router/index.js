import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routesPC = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue')
  },
  {
    path: '/newsDetail',
    name: 'NewsDetail',
    component: () => import('../views/NewsDetail.vue')
  }
]
const routesM = [
  // 手机端
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/mobile/home"),
    // component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/mobile/about.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/mobile/product.vue')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/mobile/service.vue')
  },
]

var routes = []
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
  routes = routesM
} else {
  routes = routesPC
}

const router = new VueRouter({
  mode: "history",
  routes,
  // 路由跳转时滚轴位置
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router