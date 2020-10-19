<template>
  <div class="foot">
    <div class="a-link-line">
      <span @click="selectedNav = 0">网站首页</span>
      <span @click="selectedNav = 1">关于我们</span>
      <span @click="selectedNav = 2">产品中心</span>
      <span @click="selectedNav = 3">产业新闻</span>
      <span @click="selectedNav = 4">公司服务</span>
      <span @click="selectedNav = 6">联系我们</span>
    </div>
    <div class="company-info">
      <p>地址: 广西省钦州市钦南区沿水路30-11号</p>
      <p>电话: 183-7873-0110、151-0777-3002</p>
    </div>
    <div class="line"></div>
    <p class="copyright">
      Copyright © 2020 广西丹致家具制造有限公司 All Right Reserved.
      桂ICP备10048445号
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.foot {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  padding-top: 10px;
  width: 100%;
  min-width: 1200px;
  // height: 100px;
  color: #ccc;
  background-color: #333333;
  .a-link-line {
    user-select: none;
    span {
      line-height: 40px;
      margin-right: 25px;
      cursor: pointer;
    }
  }
  .company-info {
    p {
      line-height: 40px;
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #555;
  }
  .copyright {
    white-space:nowrap;
    line-height: 40px;
  }
}
</style>