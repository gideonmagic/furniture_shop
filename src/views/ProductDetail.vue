<template>
  <div class="mid-wrap">
    <div class="mid">
      <div class="product-area">
        <div class="product-img">
          <el-carousel height="400px" :interval="5000" :autoplay="true">
            <el-carousel-item
              v-for="item of productDetail.style[selectNum].img"
              :key="item"
            >
              <img :src="item" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="product-parameter">
          <h1>{{ productDetail.style[selectNum].name }}</h1>
          <div class="select-area">
            <div
              class="select"
              v-for="(item, index) of productDetail.style"
              :key="index"
              :class="{ selected: selectNum === index }"
              @click="selectStyle(index)"
            >
              <span> {{ item.name }} </span>
            </div>
          </div>
          <h2><span>¥ </span> {{ productDetail.style[selectNum].price }}</h2>
          <p
            v-for="(item, index) of productDetail.style[selectNum].description"
            :key="index"
          >
            {{ item }}
          </p>
          <p v-if="productDetail.style[selectNum].size">
            尺寸: {{ productDetail.style[selectNum].size }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from "public/json/product.json";
export default {
  data() {
    return {
      product: null,
      productDetail: null,
      selectNum: 0,
    };
  },
  methods: {
    selectStyle(index) {
      this.selectNum = index;
    },
  },
  created() {
    this.product = product;
    // alert(this.$route.query.type)
    // 两层for循环找到对应产品详情
    for (const productSingle of this.product) {
      for (const modelSingle of productSingle.model) {
        if (modelSingle.name === this.$route.query.type) {
          this.productDetail = modelSingle;
        }
      }
    }
  },
  destroyed() {
    this.selectNum = 0;
  },
};
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
        .select-area {
          user-select: none;
          display: flex;
          flex-wrap: wrap;
          .select {
            display: flex;
            cursor: pointer;
            width: 110px;
            margin-top: 10px;
            margin-right: 10px;
            height: 30px;
            justify-content: center;
            align-items: center;
            border: 1px solid #cccccc;
            color: #cccccc;
            font-size: 12px;
          }
          .select:hover {
            display: flex;
            cursor: pointer;
            margin-right: 10px;
            height: 30px;
            justify-content: center;
            align-items: center;
            border: 1px solid #ff6700;
            color: #ff6700;
          }
          .selected {
            display: flex;
            cursor: pointer;
            margin-right: 10px;
            height: 30px;
            justify-content: center;
            align-items: center;
            border: 1px solid #ff6700;
            color: #ff6700;
          }
        }

        h1 {
          font-size: 34px;
          font-weight: 600;
          line-height: 68px;
        }
        h2 {
          font-size: 30px;
          line-height: 60px;
          color: #ff6700;
          span {
            font-size: 20px;
          }
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
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    // width: 100%;
    // height: 100%;
    max-height: 100%;
    object-fit: cover;
  }
}
// .el-carousel__item:nth-child(2n) {
//   background-color: #99a9bf;
// }

// .el-carousel__item:nth-child(2n + 1) {
//   background-color: #d3dce6;
// }
</style>