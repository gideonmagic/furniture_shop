<template>
  <div class="foot">
    <!-- <div class="a-link-line">
      <span @click="selectedNav = 0">网站首页</span>
      <span @click="selectedNav = 1">关于我们</span>
      <span @click="selectedNav = 2">产品中心</span>
      <span @click="selectedNav = 3">产业新闻</span>
      <span @click="selectedNav = 4">公司服务</span>
      <span @click="selectedNav = 6">联系我们</span>
    </div> -->
    <div class="company-info">
      <p>地址: 广西省钦州市钦南区沿水路30-11号</p>
      <p>电话: 183-7873-0110、151-0777-3002</p>
    </div>
    <div class="line"></div>
    <p class="copyright">Copyright © 2020 广西丹致家具制造有限公司</p>
    <p class="copyright">All Right Reserved. 桂ICP备2020009614号-1</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
p {
  font-size: 0.12rem;
  line-height: 0.2rem;
}
.foot {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 0.6rem;
  padding: 0.1rem 0;
  width: 100%;
  // min-width: 1200px;
  // height: 100px;
  color: #ccc;
  background-color: #333333;
  .a-link-line {
    user-select: none;
    span {
      line-height: 0.04rem;
      margin-right: 0.025rem;
      cursor: pointer;
    }
  }
  .company-info {
    p {
    }
  }
  .line {
    width: 100%;
    height: 0.001rem;
    background-color: #555;
    margin-top: 0.03rem;
    margin-bottom: 0.03rem;
  }
  .copyright {
    white-space: nowrap;
  }
}
</style>