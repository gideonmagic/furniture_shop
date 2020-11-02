<template>
  <div class="wrap">
    <div class="carousel-wrap">
      <el-carousel indicator-position="outside" height="550px">
        <el-carousel-item v-for="item in 3" :key="item">
          <img :src="require(`@/assets/img/home-top-${item}.jpg`)" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-area">
      <div class="product">
        <div class="text-area">
          <h1>产品</h1>
          <div class="english"><span>Product</span></div>
          <div class="product-nav">
            <div
              class="product-nav-single"
              :class="{ 'product-nav-single-active': productActive === 0 }"
            >
              <span @click="productActive = 0">沙发</span>
            </div>
            <div
              class="product-nav-single"
              :class="{ 'product-nav-single-active': productActive === 1 }"
            >
              <span @click="productActive = 1">椅子</span>
            </div>
            <div
              class="product-nav-single"
              :class="{ 'product-nav-single-active': productActive === 2 }"
            >
              <span @click="productActive = 2">办公家具</span>
            </div>
            <div
              class="product-nav-single"
              :class="{ 'product-nav-single-active': productActive === 3 }"
            >
              <span @click="productActive = 3">灯具</span>
            </div>
          </div>
        </div>
        <div class="product-area">
          <ProductSingle v-for="(item, index) in 6" :key="index" />
          <!-- <div class="product-single" v-for="(item, index) in 6" :key="index">
            <img src="@/assets/img/product.jpg" alt="" />
            <p class="title">椅子:摩其</p>
            <p class="desc">骁龙845/双模5G</p>
            <p class="price">300元<span>428元</span></p>
          </div> -->
        </div>
      </div>
      <div class="about">
        <div class="about-left">
          <h1>丹致</h1>
          <div class="english"><span>About</span></div>
          <p>丹致家居集团股份有限公司（曾用名安顾家居集团）创立于1994年，</p>
          <p>总部位于广东深圳。丹致家居集团秉承为全球智慧家居需求提供解决</p>
          <p>方案、改善人们的智慧家居生活品质的核心价值，致力于为全球家庭</p>
          <p>提供智慧家居产品与服务...</p>
          <button class="brown-button">关于我们</button>
        </div>
        <div class="about-right">
          <img src="@/assets/img/about.jpg" alt="" />
        </div>
      </div>
      <div class="news">
        <div class="text-area">
          <h1>新闻</h1>
          <div class="english"><span>News</span></div>
        </div>
        <div class="new-area">
          <div class="new-single" v-for="(info, index) of 4" :key="index">
            <img :src="require('@/assets/img/news-1.jpg')" alt="" />
            <div class="new-content">
              <p class="time">2020-04-16</p>
              <h1>智能坐便器能效水效标准延期实施</h1>
              <div class="line">
                <div class="line-black"></div>
              </div>
              <p class="text">
                4月1日，国家标准化管理委员会发布通知称，因受新冠肺炎疫情影响，原定于...
              </p>
            </div>
          </div>
        </div>
        <button class="brown-button">更多讯息</button>
      </div>
      <div class="partners">
        <div class="text-area">
          <h1>合作伙伴</h1>
          <div class="english"><span>Cooperative partner</span></div>
          <p>
            我们与世界高度家居品牌合作，作为亚洲中国的销售商与亚洲各大销售平台与卖场紧密合作
          </p>
        </div>
        <div class="logo-area">
          <div class="single" v-for="(item, index) of 8" :key="index">
            <img :src="require('@/assets/img/home-partners-1.png')" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductSingle from "@/components/ProductSingle.vue";
export default {
  data() {
    return {
      productActive: 0,
    };
  },
  components: { ProductSingle },
};
</script>

<style lang="scss" scoped>
.wrap {
  // margin-top: 70px;
  width: 100%;
  min-width: 1200px;
  .home-area {
    margin: 0 auto;
    width: 1200px;
  }
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
  margin-top: 80px;
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
    .brown-button {
      width: 130px;
      height: 50px;
      margin-top: 30px;
      border: none;
      background-color: rgb(189, 154, 123);
      transition: background-color 0.36s;
      color: #fff;
      outline: none;
    }
    .brown-button:hover {
      background-color: rgb(148, 110, 75);
    }
  }
}
.brown-button {
  width: 130px;
  height: 50px;
  margin-top: 30px;
  border: none;
  background-color: rgb(189, 154, 123);
  transition: background-color 0.36s;
  color: #fff;
  outline: none;
}
.brown-button:hover {
  background-color: rgb(148, 110, 75);
}
.product {
  width: 100%;
  // height: 500px;
  // background-color: rgb(245, 245, 245);
  .text-area {
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
        transition: background-color 0.5s, color 0.5s;
        span {
          cursor: pointer;
        }
      }
      .product-nav-single:hover {
        background-color: rgb(189, 154, 123);
        color: #fff;
      }
      .product-nav-single-active {
        background-color: rgb(189, 154, 123);
        color: #fff;
      }
    }
  }
  .product-area {
    width: 100%;
    // height: 600px;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
  }
}
.english {
  text-align: center;
  width: 300px;
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
.news {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  // background-color: #000;
  .text-area {
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
  }
  .new-area {
    width: 100%;
    height: 300px;
    // background-color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    .new-single {
      position: relative;
      user-select: none;
      cursor: pointer;
      width: 43%;
      height: 45%;
      background-color: #fff;
      display: flex;
      align-items: center;
      img {
        height: 70%;
        width: 35%;
        object-fit: cover;
        margin-right: 15px;
      }
      .new-content {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        // background-color: #000;
        .time {
          color: #a1a1a1;
          line-height: 20px;
        }
        h1 {
          color: #000;
          font-size: 14px;
          font-weight: 500;
          line-height: 25px;
        }
        .line {
          width: 100%;
          height: 1px;
          background-color: #efefef;
          margin-top: 5px;
          margin-bottom: 5px;
          .line-black {
            width: 13px;
            height: 1px;
            background-color: #000;
            transition: width 1s;
          }
        }
        .text {
          color: #a1a1a1;
          line-height: 20px;
        }
      }
    }
    .new-single:hover > .new-content > .line > .line-black {
      width: 100%;
      height: 1px;
      background-color: #000;
    }
  }
}
.partners {
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  .text-area {
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
    p {
      color: #878787;
      font-size: 14px;
      line-height: 30px;
    }
  }
  .logo-area {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    height: 120px;
    .single {
      width: 12.5%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      height: 100%;
      background-color: #f8f8f8;
      border: 1px solid #efefef;
      img {
        width: 100%;
        filter: grayscale(100%);
      }
    }
    .single {
      border-right: none;
    }
    .single:last-child {
      border-right: 1px solid #efefef;
    }
    .single:hover > img {
      filter: grayscale(0%);
    }
  }
}
</style>