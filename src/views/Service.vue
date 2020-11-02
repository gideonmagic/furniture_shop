<template>
  <div class="service">
    <img :src="require(`@/assets/img/service-1.jpg`)" style="min-width: 1200px;" alt="" />
    <div class="content">
      <div class="brown-line"></div>
      <h1>全屋设计、省心省力</h1>
      <p>
        你可以自己完成所有事情，但是大可不必如此。我们提供一系列服务，让你的生活更加简便。无论你需要安装、组装帮助，还是要以可持续的方式回收旧家具，宜家的专业人员都可以帮你完成这些繁重的工作。
      </p>
      <img :src="require(`@/assets/img/service-2.jpg`)" alt="" align="right" />
      <p>
        丹致全屋设计，设计理想的家。丹致提供专业设计与优质家居用品，由免费预约到设计咨询，方案呈现到送货安装，丹致一站式服务，让您贴心便捷。
      </p>
      <p>
        丹致商业空间设计，丹致对公业务部门设计师的专业建业与设计，为您的办公室或任意商业空间提供灵感和创意，同时满足您的预算考量。支持远程对公采购，无需到店，您可以联系丹致对公业务部门，由专人为您解决设计、采购、送货、发票及售后问题，省时省心，安全方便。
      </p>
      <p>
        产品采用平板包装，需要组装。您可以享受自行组装的乐趣。若需要帮忙，丹致乐意提供上门组装服务，只收取合理费用。
      </p>
      <div class="brown-line"></div>
      <h1>安装服务</h1>
      <p>
        专业的安装服务能节省您宝贵的时间，特别是一些棘手的安装上，如上下水的连接和台面的切割开孔。
      </p>
      <img
        :src="require(`@/assets/img/service-3.jpg`)"
        alt=""
        style="width: 100%; margin-top: 50px; margin-left: 0px"
      />
      <div class="brown-line"></div>
      <h1>回收服务</h1>
      <p>买了新沙发、新床垫？旧产品交给我们来回收。</p>

      <p>在本地商场可为你提供测量、定制和安装完整窗帘的服务。</p>
      <p>
        测量定制和安装的完整窗帘服务可以为您节约时间和精力。您只需挑选适合您的布料款式，宜家指定服务商为您提供后续加工以及安装服务。
      </p>
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.service {
  margin: 0 auto;
  width: 100%;
  img {
    left: 0;
    top: 0;
    width: 100%;
    display: block;
  }
  .content {
    position: relative;
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
    // height: 900px;
    // background-color: #000;
    .brown-line {
      position: relative;
      margin-top: 50px;
      // margin-left: 100px;
      width: 100px;
      height: 5px;
      background-color: rgb(189, 154, 123);
    }
    h1 {
      font-weight: 500;
      font-size: 20px;
      // margin-bottom: 50px;
    }
    img {
      width: 500px;
      margin-left: 50px;
      // margin-bottom: 50px;
    }
    p {
      margin-top: 50px;
      font-weight: 200;
      font-size: 14px;
      line-height: 30px;
      text-indent: 2em;
    }
  }
}
</style>