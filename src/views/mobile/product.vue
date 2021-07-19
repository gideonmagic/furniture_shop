<template>
  <div class="mid-wrap">
    <div class="mid">
      <div class="product">
        <div class="text-area">
          <h1 class="title-chinese">产品中心</h1>
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
import product from "public/json/product.json";
import ProductSingle from "@/components/mProductSingle.vue";
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
    // width: 1200px;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 0.6rem;
  }
}
.text-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .product-nav {
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3.2rem;
    height: 0.4rem;
    .product-nav-single {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
      transition: background-color 0.5s, color 0.5s;
      span {
        font-size: 0.19rem;
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