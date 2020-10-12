<template>
  <div id="app">
    <nav>
      <div class="wrap">
        <img src="@/assets/img/logo.png" alt="" />
        <div class="nav-area">
          <span @click="selectedNav = 0" :class="{'selected-span':selectedNav === 0}">网站首页</span>
          <span @click="selectedNav = 1" :class="{'selected-span':selectedNav === 1}">关于我们</span>
          <span @click="selectedNav = 2" :class="{'selected-span':selectedNav === 2}">产品中心</span>
          <span @click="selectedNav = 3" :class="{'selected-span':selectedNav === 3}">公司服务</span>
          <span @click="selectedNav = 4" :class="{'selected-span':selectedNav === 4}">联系我们</span>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedNav: 0,
    }
  },
  methods:{
    toHome() {
      this.$router.push({name: Home})
    }
  }
};
</script>
<style lang="scss">
#app {
  // background-color: rgb(100, 100, 100);
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
</style>
