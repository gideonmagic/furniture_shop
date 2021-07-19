<template>
  <div class="wrap">
    <div class="carousel-wrap">
      <el-carousel indicator-position="outside" height="550px">
        <el-carousel-item v-for="(item, index) in json.carousel" :key="index">
          <img :src="item" alt="" />
          <!-- <img :src="require(`@/assets/img/home-top-${item}.jpg`)" alt="" /> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-area">
      <!-- <div class="product">
        <div class="text-area">
          <h1>产品</h1>
          <div class="english"><span>Product</span></div>
          <div class="product-nav">
            <div
              class="product-nav-single"
              v-for="(item, index) in product"
              :class="{
                'product-nav-single-active': +index === +productActive,
              }"
              :key="index"
              @click="changeProductActive(index)"
            >
              <span> {{ item.chineseName }}</span>
            </div>
          </div>
        </div>
        <div
          class="product-area"
          v-for="(productSingle, index) of product"
          :key="index"
          v-show="productActive === index"
        >
          <ProductSingle
            v-for="(item, index) in productSingle.model.slice(0, 6)"
            :key="index"
            :detail="item"
          />
        </div>
      </div> -->
      <div class="about">
        <div class="about-left">
          <h1>丹致</h1>
          <div class="english"><span>About</span></div>
          <p>丹致家居集团股份有限公司（曾用名安顾家居集团）创立于1994年，</p>
          <p>总部位于广东深圳。丹致家居集团秉承为全球智慧家居需求提供解决</p>
          <p>方案、改善人们的智慧家居生活品质的核心价值，致力于为全球家庭</p>
          <p>提供智慧家居产品与服务...</p>
          <button class="brown-button" @click="toAbout">关于我们</button>
        </div>
        <div class="about-right">
          <img :src="json.about" alt="" />
        </div>
      </div>
      <div class="news">
        <div class="text-area">
          <h1>新闻</h1>
          <div class="english"><span>News</span></div>
        </div>
        <div class="news-area">
          <div
            class="news-single"
            v-for="(info, index) of news"
            :key="index"
            @click="toNewsDetail(index)"
          >
            <div class="img_area">
              <img :src="news[index].img[0]" alt="" />
            </div>
            <div class="news-content">
              <p class="time">{{ info.time }}</p>
              <h1>{{ info.title }}</h1>
              <div class="line">
                <div class="line-black"></div>
              </div>
              <p class="text">
                {{ info.content[0] }}
              </p>
            </div>
          </div>
        </div>
        <!-- <button class="brown-button">更多讯息</button> -->
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
            <img :src="json.partner[index]" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "public/json/home.json";
import news from "public/json/news.json";
import product from "public/json/product.json";
import ProductSingle from "@/components/ProductSingle.vue";
export default {
  data() {
    return {
      productActive: 0,
      json: null,
      news: null,
      product: null,
    };
  },
  methods: {
    toNewsDetail(index) {
      this.$router.push({
        name: "NewsDetail",
        query: {
          id: index,
        },
      });
    },
    toAbout() {
      this.$router.push({
        name: "About",
      });
    },
    changeProductActive(index) {
      this.productActive = index;
    },
  },
  components: { ProductSingle },
  created() {
    this.json = json;
    this.news = news.news;
    this.product = product;
  },
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
      cursor: pointer;
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
        cursor: pointer;
        justify-content: center;
        align-items: center;
        flex: 1;
        height: 100%;
        transition: background-color 0.5s, color 0.5s;
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
  .news-area {
    width: 100%;
    height: 300px;
    // background-color: #000;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    .news-single {
      position: relative;
      display: flex;
      align-items: center;
      user-select: none;
      cursor: pointer;
      width: 43%;
      height: 45%;
      background-color: #fff;

      .img_area {
        position: relative;
        width: 35%;
        height: 70%;
        margin-right: 15px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .news-content {
        height: 100%;
        // width: 65%;
        flex: 1;
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
          width: 350px;
          white-space: nowrap; /*强制在一行显示*/
          text-overflow: ellipsis; /*设置超出内容显示...*/
          overflow: hidden; /*一定不能少 超出的内容进行隐藏*/
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
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          text-overflow: ellipsis; /*设置超出内容显示...*/
          overflow: hidden; /*一定不能少 超出的内容进行隐藏*/
        }
      }
    }
    .news-single:hover > .news-content > .line > .line-black {
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
        width: 70%;
        object-fit: cover;
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