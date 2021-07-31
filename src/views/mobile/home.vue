<template>
  <div>
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="(item, index) in json.carousel" :key="index">
        <img :src="item" alt="" />
        <!-- <img :src="require(`@/assets/img/home-top-${item}.jpg`)" alt="" /> -->
      </el-carousel-item>
    </el-carousel>
    <div class="home-area">
      <div class="about-content">
        <h1 class="title-chinese">丹致</h1>
        <div class="english"><span>About</span></div>
        <p>
          丹致家居集团股份有限公司（曾用名安顾家居集团）创立于1994年，
          总部位于广东深圳。丹致家居集团秉承为全球智慧家居需求提供解决
          方案、改善人们的智慧家居生活品质的核心价值，致力于为全球家庭
          提供智慧家居产品与服务...
        </p>
      </div>
      <div class="about-img-div">
        <img :src="json.about" alt="" />
      </div>
      <div class="news">
        <h1 class="title-chinese">新闻</h1>
        <div class="english"><span>News</span></div>
        <div class="news-area">
          <div
            class="news-single"
            v-for="(info, index) of news"
            :key="index"
            @click="toNewsDetail(index)"
          >
            <div class="news-content">
              <p class="time">{{ info.time }}</p>
              <h1>{{ info.title }}</h1>
              <p class="text">
                {{ info.content[0] }}
              </p>
            </div>
          </div>
        </div>
        <!-- <button class="brown-button">更多讯息</button> -->
      </div>
      <div class="partners">
        <h1 class="title-chinese">合作伙伴</h1>
        <div class="english"><span>Cooperative partner</span></div>
        <p>
          我们与世界高度家居品牌合作，作为亚洲中国的销售商与亚洲各大销售平台与卖场紧密合作
        </p>
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
  },
  created() {
    this.json = json;
    this.news = news.news;
    this.product = product;
  },
};
</script>

<style lang="scss" scoped>
.el-carousel__item h3 {
  color: #475669;
  // font-size: 14px;
  opacity: 0.75;
  // line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-area {
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  width: 100%;
  .about-img-div {
    position: relative;
    margin-top: 0.5rem;
    height: 3rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .about-content {
    margin-top: 1rem;
    padding: 0 0.12rem;
    box-sizing: border-box;
    text-align: center;
    height: auto;
    width: 100%;
    // background-color: rgb(222, 222, 222);
  }
  .news {
    // padding: 0.3rem;
    margin-top: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
    padding: 0 0.12rem;

    // background-color: rgb(222, 222, 222);
    h1 {
      font-size: 0.36rem;
    }
    .news-area {
      width: 100%;
      .news-single {
        // height: 1.7rem;
        border-bottom: rgb(231, 231, 231) 1px solid;
      }
      .news-single:hover {
        background-color: #333333;
      }
    }
    .news-content {
      p {
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
      }
      h1 {
        font-size: 0.22rem;
        font-weight: 500;
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis; /*超出部分用...代替*/
      }
      .text {
        // max-width: 70em;
        margin-top: 0.05rem;
        overflow: hidden;
        // white-space: nowrap;
        // text-overflow: ellipsis; /*超出部分用...代替*/
      }
    }
  }
  .partners {
    // padding: 0.3rem;
    margin-top: 1rem;
    padding: 0 0.12rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: auto;
    width: 100%;
    // background-color: rgb(222, 222, 222);
    h1 {
      font-size: 0.36rem;
    }
    .logo-area {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      width: 100%;
      height: 1rem;
      margin-top: 0.5rem;
      .single {
        width: 25%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        height: 50%;
        background-color: #f8f8f8;
        border: 1px solid #efefef;
        img {
          // width: 70%;
          height: 80%;
          object-fit: contain;
          // filter: grayscale(100%);
        }
      }
      .single {
        border-right: none;
      }
      .single:last-child {
        border-right: 1px solid #efefef;
      }
      .single:hover > img {
        // filter: grayscale(0%);
      }
    }
  }
}
</style>