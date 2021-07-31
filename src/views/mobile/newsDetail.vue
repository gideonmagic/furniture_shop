<template>
  <div class="mid-wrap" v-if="newsSingle && newsSingle.title">
    <div class="mid">
      <h1>{{ newsSingle.title }}</h1>
      <div class="count">
        <span>发布时间：</span>
        <span style="font-weight: bold"> {{ newsSingle.time }} </span>
        <!-- <span style="margin-left: 20px">浏览次数：</span>
        <span style="font-weight: bold">88</span><span>次</span> -->
      </div>
      <div class="gray-line"></div>
      <div class="content">
        <p v-for="(item, index) in newsSingle.content" :key="index">
          {{ item }}
        </p>
      </div>
      <div class="gray-line"></div>
      <div class="page-jump">
        <div class="last-page" v-if="+$route.query.id - 1 > -1">
          <span>上一篇：</span>
          <span
            style="cursor: pointer"
            @click="toNewsDetail(+$route.query.id - 1)"
            >{{ news[+$route.query.id - 1].title }}</span
          >
        </div>
        <div class="next-page" v-if="+$route.query.id - 1 < 2">
          <span>下一篇：</span>
          <span
            style="cursor: pointer"
            @click="toNewsDetail(+$route.query.id + 1)"
            >{{ news[+$route.query.id + 1].title }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import news from "public/json/news.json";
export default {
  data() {
    return {
      news: null,
      // newsSingle: null,
    };
  },
  computed: {
    newsSingle() {
      return this.news[+this.$route.query.id];
    },
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
    this.news = news.news;
    // this.newsSingle = this.news[this.$route.query.id];
  },
};
</script>

<style lang="scss" scoped>
.mid-wrap {
  margin: 0 auto;
  width: 100%;
  .mid {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 0 0.2rem;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 0.8rem;
    // background-color: #000;
    text-align: center;
    min-height: 520px;
    h1 {
      font-size: 0.25rem;
    }
    .count {
      margin-top: 20px;
    }
    .gray-line {
      margin-top: 20px;
      width: 100%;
      height: 1px;
      background-color: rgb(225, 225, 225);
    }
    .content {
      margin-top: 0.2rem;
      width: 100%;
      text-align: left;
      // height: 100px;
      // background-color: #000;
      p {
        margin-bottom: 15px;
        line-height: 25px;
      }
    }
    .page-jump {
      text-align: left;
      margin-top: 20px;
      span {
        line-height: 40px;
        font-size: 0.16rem;
      }
    }
  }
}
</style>