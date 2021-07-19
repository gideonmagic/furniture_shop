<template>
  <div>
    <nav>
      <div class="logo">
        <img src="@/assets/img/logo.png" alt="" />
      </div>
      <div class="more">
        <svg class="icon" aria-hidden="true" @click="menuShow = !menuShow">
          <use xlink:href="#icon-caidan"></use>
        </svg>
      </div>
    </nav>
    <transition name="slide-fade">
      <div class="menu_wrap" v-if="menuShow" @click="menuShow = !menuShow">
        <div class="menu" @click.stop="">
          <span
            v-for="(item, index) in navList"
            :key="index"
            :class="{ 'selected-span': item.active == true }"
            @click="toPage(index)"
          >
            {{ item.navName }}
          </span>
        </div>
      </div>
    </transition>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/mFooter.vue";
import '@/assets/css/mobileGlobal.scss'


export default {
  components: {
    Footer,
  },
  data() {
    return {
      menuShow: false,
      navList: [
        { navName: "网站首页", englishName: "Home", active: true },
        { navName: "关于我们", englishName: "About", active: false },
        { navName: "产品中心", englishName: "Product", active: false },
        { navName: "公司服务", englishName: "Service", active: false },
        { navName: "联系我们", englishName: "Contact", active: false },
      ],
    };
  },

  methods: {
    showMenu() {
      console.log(111);
    },
    toPage(index) {
      this.navList.forEach((item) => {
        item.active = false;
      });
      console.log(index);
      this.navList[index].active = true;
      console.log(this.navList[index]);
      this.$router.push({ name: this.navList[index].englishName });
      this.sessionData("set", "navList", this.navList);
      this.menuShow = false;
    },
  },

  created() {
    // 图片预加载
    // this.preload();
    // 获取当前nav
    if (this.sessionData("get", "navList") != null) {
      this.navList = this.sessionData("get", "navList");
    }
  },
};
</script>
<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 0.6rem;
  background-color: #333333;
  z-index: 3000;
  border-radius: 0 0 0.6rem 0.6rem;
  overflow: hidden;
  padding: 0 0.3rem;
  box-sizing: border-box;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.7rem;
    height: 100%;
    // background-color: #fff;
    img {
      height: 90%;
    }
  }
  .more {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0.8rem;
    height: 100%;
    transform: rotate(180deg);
    // background-color: #fff;
    // color: #fff;
    .icon {
      height: 0.45rem;
    }
  }
}
.menu_wrap {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3000;
  .menu {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    top: 0;
    right: 0;
    width: 2rem;
    height: 100%;
    background-color: #333333;
    span {
      color: #666666;
      transition: color 0.36s;
      font-size: 0.18rem;
      cursor: pointer;
      line-height: 0.6rem;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    // span:hover {
    //   color: #fff;
    // }
    .selected-span {
      color: #fff;
    }
  }
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>>
