<template>
  <div id="app">
    <nav>
      <div class="wrap">
        <img src="@/assets/img/logo.png" alt="" />
        <div class="nav-area">
          <span
            v-for="(item, index) in navList"
            :key="index"
            :class="{ 'selected-span': selectedNav == index }"
            @click="toPage(item)"
          >
            {{ item.navName }}
          </span>
        </div>
      </div>
    </nav>
    <div class="empty-box"></div>
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
      selectedNav: 0,
      navList: [
        { index: 0, navName: "网站首页", englishName: "Home" },
        { index: 1, navName: "关于我们", englishName: "About" },
        { index: 2, navName: "产品中心" },
        { index: 3, navName: "产业新闻" },
        { index: 4, navName: "公司服务" },
        { index: 5, navName: "联系我们" },
      ],
    };
  },
  components: {
    Footer,
  },
  methods: {
    toPage(item) {
      this.selectedNav = item.index;
      this.sessionData("set", "selectedNav", item.index);
      this.$router.push({ name: item.englishName });
    },
  },
  created() {
    // 获取当前nav
    if (this.sessionData("get", "selectedNav") != null) {
      this.selectedNav = this.sessionData("get", "selectedNav");
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #333333;
  z-index: 50;
  .wrap {
    display: flex;
    justify-content: space-between;
    width: 1200px;
    height: auto;
    img {
      height: 100%;
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
