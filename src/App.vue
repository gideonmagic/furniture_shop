<template>
  <div id="app">
    <nav>
      <div class="wrap">
        <img src="@/assets/img/logo.png" alt="" />
        <div class="nav-area">
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
    </nav>
    <!-- <div class="empty-box"></div> -->
    <router-view />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  watch: {},
  data() {
    return {
      navList: [
        { navName: "网站首页", englishName: "Home", active: true },
        { navName: "关于我们", englishName: "About", active: false },
        { navName: "产品中心", englishName: "Product", active: false },
        { navName: "公司服务", englishName: "Service", active: false },
        { navName: "联系我们", englishName: "Contact", active: false },
      ],
    };
  },
  components: {
    Footer,
  },
  methods: {
    toPage(index) {
      this.navList.forEach((item) => {
        item.active = false;
      });
      console.log(index);
      this.navList[index].active = true;
      console.log(this.navList[index]);
      this.$router.push({ name: this.navList[index].englishName });
      this.sessionData("set", "navList", this.navList);
    },
  },
  created() {
    // 获取当前nav
    if (this.sessionData("get", "navList") != null) {
      this.navList = this.sessionData("get", "navList");
    }
  },
};
</script>
<style lang="scss">
#app {
  // background-color: rgb(100, 100, 100);
  display: flex;
  flex-direction: column;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); //解决安卓点击蓝框问题
}
nav {
  display: flex;
  justify-content: center;
  // position: fixed;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-width: 1200px;
  height: 70px;
  background-color: #333333;
  z-index: 50;
  .wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: auto;
    img {
      height: 95%;
    }
    .nav-area {
      user-select: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 600px;
      // background-color: #fff;
      span {
        color: #666666;
        transition: color 0.36s;
        font-size: 16px;
        cursor: pointer;
      }
      span:hover {
        color: #fff;
      }
      .selected-span {
        color: #fff;
      }
    }
  }
}
.empty-box {
  height: 70px;
}
</style>
