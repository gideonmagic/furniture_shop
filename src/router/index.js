import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routes = [{
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
  }
]
const router = new VueRouter({
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