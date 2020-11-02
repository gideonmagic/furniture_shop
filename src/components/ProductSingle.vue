<template>
  <div class="product-single" @click="toProductDetail">
    <img src="@/assets/img/product.jpg" alt="" />
    <p class="title">椅子:摩其</p>
    <p class="desc">骁龙845/双模5G</p>
    <p class="price">300元<span>428元</span></p>
  </div>
</template>
<script>
export default {
  methods: {
    toProductDetail() {
      this.$router.push({name: 'ProductDetail'})
    }
  }
};
</script>

<style lang="scss" scoped>
.product-single {
  position: relative;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  height: 260px;
  width: 30%;
  // width: 100px;
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
</style>