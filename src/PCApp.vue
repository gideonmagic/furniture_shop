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
    <router-view @changeNavList="changeNavList(index)" />
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  watch: {
    // 检测路由跳转，改变nav
    $route(val, oldVal) {
      if (val.name === "About") {
        this.changeNav(val.name);
      }
    },
  },
  data() {
    return {
      imgCount: 0,
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
    changeNav(routeName) {
      this.navList.forEach((item) => {
        item.active = false;
      });
      if (routeName === routeName) {
        for (const item of this.navList) {
          if (item.englishName === routeName) {
            item.active = true;
          }
        }
        this.sessionData("set", "navList", this.navList);
      }
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
    },
    // preload() {
    //   let imgs = [
    //     "https://s3.ax1x.com/2020/11/18/DmEsI0.png",
    //     "https://s3.ax1x.com/2020/11/18/DmEraq.png",
    //     "https://s3.ax1x.com/2020/11/18/DmEDZn.png",
    //     "https://s3.ax1x.com/2020/11/18/DmEMKH.png",
    //     "https://s3.ax1x.com/2020/11/18/DmEn2D.png",
    //     "https://s3.ax1x.com/2020/11/18/DmEm8O.png",
    //     "https://s3.ax1x.com/2020/11/18/DmA7vQ.jpg",
    //     "https://s3.ax1x.com/2020/11/18/DmAIC8.jpg",
    //     "https://s3.ax1x.com/2020/11/18/DmA44f.jpg",
    //     "https://s3.ax1x.com/2020/11/18/DmFMKs.png",
    //     "https://s3.ax1x.com/2020/11/18/DmFuvj.png",
    //     "https://s3.ax1x.com/2020/11/18/DmFePS.jpg",
    //     "https://s3.ax1x.com/2020/11/18/DmFV58.jpg",
    //     "https://s3.ax1x.com/2020/11/18/DmFEUf.jpg",
    //     "https://s3.ax1x.com/2020/11/18/DmFAVP.png",
    //     "https://s3.ax1x.com/2020/11/18/DmFFbt.png",
    //     "https://s3.ax1x.com/2020/11/16/DAfekd.jpg",
    //     "https://s3.ax1x.com/2020/11/16/DAwRqx.jpg",
    //     "https://s3.ax1x.com/2020/11/16/DAw2s1.jpg",
    //     "https://s3.ax1x.com/2020/11/16/DAwgMR.jpg",
    //     "https://s3.ax1x.com/2020/11/15/DFaMzq.jpg",
    //     "https://s3.ax1x.com/2020/11/15/DFaKWn.jpg",
    //     "https://s3.ax1x.com/2020/11/15/DFUibF.jpg",
    //     "https://s3.ax1x.com/2020/11/15/DFJPkn.jpg",
    //     "https://s3.ax1x.com/2020/11/15/DFKPBt.jpg",
    //     "https://s3.ax1x.com/2020/11/15/DFKCnI.jpg",
    //     "https://s3.ax1x.com/2020/11/15/DFKpjA.jpg",
    //     "https://s3.ax1x.com/2020/11/15/Di7xtH.jpg",
    //     "https://s3.ax1x.com/2020/11/12/BxfUyt.jpg",
    //     "https://s3.ax1x.com/2020/11/12/BxftSA.jpg",
    //     "https://s3.ax1x.com/2020/11/12/BxfJWd.jpg",
    //     "https://s3.ax1x.com/2020/11/12/BxfGJH.png",
    //     "https://s3.ax1x.com/2020/11/12/Bxf8Fe.jpg",
    //     "https://s3.ax1x.com/2020/11/12/Bxf1oD.jpg",
    //     "https://s3.ax1x.com/2020/11/12/BxfldO.png",
    //     "https://s3.ax1x.com/2020/11/12/BxfQeK.png",
    //     "https://s3.ax1x.com/2020/11/12/Bxfusx.png",
    //     "https://s3.ax1x.com/2020/11/12/BxfnQ1.jpg",
    //     "https://s3.ax1x.com/2020/11/12/BxfezR.jpg",
    //     "https://s3.ax1x.com/2020/11/12/BxfZW9.jpg",
    //     "https://s1.ax1x.com/2020/11/08/BobXEd.jpg",
    //     "https://s1.ax1x.com/2020/11/08/BobLHH.jpg",
    //     "https://s1.ax1x.com/2020/11/08/BobqDe.jpg",
    //     "https://s1.ax1x.com/2020/11/08/BobbuD.jpg",
    //     "https://s1.ax1x.com/2020/11/08/BoyOWn.png",
    //     "https://s1.ax1x.com/2020/11/08/BoykKf.png",
    //     "https://s1.ax1x.com/2020/11/08/BoyixP.png",
    //     "https://s1.ax1x.com/2020/11/08/Bosgg0.png",
    //     "https://s1.ax1x.com/2020/11/08/Bost3t.png",
    //     "https://s1.ax1x.com/2020/11/08/BosY9I.png",
    //     "https://s1.ax1x.com/2020/11/08/BosG4A.png",
    //     "https://s1.ax1x.com/2020/11/08/Bos3AH.png",
    //     "https://s1.ax1x.com/2020/11/08/BosQBD.png",
    //     "https://s1.ax1x.com/2020/11/04/BgWot0.png",
    //     "https://s1.ax1x.com/2020/11/04/BgWIkq.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgW47n.png",
    //     "https://s1.ax1x.com/2020/11/04/BgWh0s.png",
    //     "https://s1.ax1x.com/2020/11/04/BgWfmj.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgW26g.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWg1S.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWcp8.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWyff.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWstP.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWrkt.png",
    //     "https://s1.ax1x.com/2020/11/04/BgWBTI.png",
    //     "https://s1.ax1x.com/2020/11/04/BgW00A.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWwmd.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWaOH.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWU6e.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWNlD.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWtSO.jpg",
    //     "https://s1.ax1x.com/2020/11/04/BgWJfK.png",
    //   ];
    //   for (let img of imgs) {
    //     let image = new Image();
    //     image.src = img;
    //     image.onload = () => {
    //       this.imgCount++;
    //     };
    //   }
    // },
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
      height: 90%;
      object-fit: contain;
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
