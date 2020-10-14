<template>
  <div class="wrap">
    <div class="carousel-wrap">
      <el-carousel indicator-position="outside" height="550px">
        <el-carousel-item v-for="item in 3" :key="item">
          <img :src="require(`@/assets/img/home-top-${item}.jpg`)" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="about">
      <div class="about-left">
        <h1>丹致</h1>
        <div class="english"><span>About</span></div>
        <p>丹致家居集团股份有限公司（曾用名安顾家居集团）创立于1994年，</p>
        <p>总部位于广东深圳。丹致家居集团秉承为全球智慧家居需求提供解决</p>
        <p>方案、改善人们的智慧家居生活品质的核心价值，致力于为全球家庭</p>
        <p>提供智慧家居产品与服务...</p>
        <button class="about-button">关于我们</button>
      </div>
      <div class="about-right">
        <img src="@/assets/img/about.jpg" alt="" />
      </div>
    </div>
    <div class="product">
      <div class="product-title-line">
        <h1>产品</h1>
        <div class="english"><span>Product</span></div>
        <div class="product-nav">
          <div class="product-nav-single"><span>沙发</span></div>
          <div class="product-nav-single"><span>椅子</span></div>
          <div class="product-nav-single"><span>办公家具</span></div>
          <div class="product-nav-single"><span>灯具</span></div>
        </div>
        <div class="product-area">
          <div class="product-single" v-for="(item, index) in 6" :key="index">
            <img src="@/assets/img/product.jpg" alt="" />
            <p class="title">椅子:摩其</p>
            <p class="desc">骁龙845/双模5G</p>
            <p class="price">300元<span>428元</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wrap {
  margin: 0 auto;
  margin-top: 70px;
  width: 1200px;
}
.carousel-wrap {
  width: 100%;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.about {
  display: flex;
  position: relative;
  width: 100%;
  height: 600px;
  .about-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;
    h1 {
      color: #000;
      font-size: 30px;
      font-weight: 500;
      line-height: 50px;
    }
    p {
      color: #878787;
      font-size: 14px;
      line-height: 30px;
    }
    .about-button {
      width: 130px;
      height: 50px;
      margin-top: 30px;
      border: none;
      background-color: rgb(189, 154, 123);
      transition: background-color 0.36s;
      color: #fff;
      outline: none;
    }
    .about-button:hover {
      background-color: rgb(148, 110, 75);
    }
  }
}
.product {
  width: 100%;
  height: 500px;
  // background-color: rgb(245, 245, 245);
  .product-title-line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      color: #000;
      font-size: 30px;
      font-weight: 500;
      line-height: 50px;
    }
    .product-nav {
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 30px;
      .product-nav-single {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 100%;
        span {
          cursor: pointer;
        }
      }
    }
    .product-area {
      width: 100%;
      height: 600px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      .product-single {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 44%;
        width: 31%;
        transition: box-shadow 0.5s;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        img {
          height: 70%;
        }
        .title {
          font-size: 14px;
          font-weight: 400;
          color: #333;
        }
        .desc {
          line-height: 20px;
          font-size: 12px;
          font-weight: 300;
          color: #b0b0b0;
        }
        .price {
          line-height: 35px;
          font-size: 12px;
          font-weight: 300;
          color: #ff6700;
          span {
            color: #b0b0b0;
            margin-left: 10px;
            text-decoration: line-through;
          }
        }
      }
      .product-single:hover {
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.23);
        top: -1px;
      }
    }
  }
}
.english {
  text-align: center;
  width: 130px;
  height: 30px;
  // background-color: #000;
  span {
    color: #999;
  }
  span::before,
  span::after {
    display: inline-block;
    width: 30px;
    height: 1px;
    background: #999;
    vertical-align: middle;
    content: "";
    margin: 0 2px;
    margin-bottom: 2px;
  }
}
</style>