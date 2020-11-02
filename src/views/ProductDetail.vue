<template>
  <div class="mid-wrap">
    <div class="mid">
      <div class="product-area">
        <div class="product-img">
          <el-carousel height="400px" :interval="5000" direction="vertical" :autoplay="true">
            <el-carousel-item v-for="item in 3" :key="item">
                <img :src="require(`@/assets/img/productDetail-1.png`)" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="product-parameter">
            <h1>CA-20034</h1>
            <h2>5333元</h2>
            <p>三人转角沙发, 单边开放式/金斯托 深褐色</p>
            <p>尺寸: 2600mm x 1000mm x 500mm</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mid-wrap {
  margin: 0 auto;
  width: 100%;
  .mid {
    position: relative;
    width: 1200px;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 50px;
    .product-area {
      display: flex;
      align-items: center;
      width: 100%;
      height: 520px;
    //   background-color: #000;
      .product-img {
        width: 60%;
      }
      .product-parameter {
          flex: 1;
          box-sizing: border-box;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30px;
        //   background-color: rgb(235, 195, 195);
          height: 100%;
          h1 {
              font-size: 34px;
              font-weight: 600;
              line-height: 68px;
          }
          h2 {
              font-size: 30px;
              line-height: 60px;
              color: #ff6700;
          }
          p {
              font-size: 14px;
              line-height: 28px;
          }
          
      }
    }
  }
}

.el-carousel__item {
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>