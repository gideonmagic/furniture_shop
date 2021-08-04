import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const routesPC = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue'),
    meta: {
      keepAlive: true,
    }
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
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/mobile/about.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/mobile/product.vue'),
    meta: {
      keepAlive: true,
    }
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import('../views/mobile/service.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/mobile/contact.vue')
  },
  {
    path: '/productDetail',
    name: 'ProductDetail',
    component: () => import('../views/mobile/productDetail.vue')
  },
  {
    path: '/newsDetail',
    name: 'NewsDetail',
    component: () => import('../views/mobile/newsDetail.vue')
  }
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

// 路由拦截器
router.beforeEach((to, from, next) => {
  let toDepth = to.path.split('/').length
  let fromDepth = from.path.split('/').length
  if (toDepth < fromDepth) {
    // console.log('后退。。。')
    from.meta.keepAlive = false
    to.meta.keepAlive = true
  }
  next()
})

export default router