<template>
  <div class="mid-wrap">
    <div class="mid">
      <div class="product">
        <div class="text-area">
          <h1>产品中心</h1>
          <div class="english"><span>Product</span></div>
          <div class="product-nav">
            <div
              class="product-nav-single"
              v-for="(item, index) of product"
              :class="{
                'product-nav-single-active': +index === +productActive,
              }"
              :key="index"
              @click="productActive = index"
            >
              <span>{{ item.chineseName }}</span>
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
            v-for="(item, index) in productSingle.model"
            :key="index"
            :detail="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import product from "@/assets/json/product.json";
import ProductSingle from "@/components/ProductSingle.vue";
export default {
  components: { ProductSingle },
  data() {
    return {
      productActive: 0,
      product: null,
    };
  },
  methods: {},
  created() {
    this.product = product;
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
  }
}
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
  margin-top: 50px;
  box-sizing: border-box;
  //   height: 600px;
  //   background-color: #000;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
</style>