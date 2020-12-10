<template>
  <div class="product-single" @click="toProductDetail" v-loading="loading">
    <img :src="detail.mainImg" @load="loadImage" />
    <p class="title">{{ detail.name }}</p>
    <p class="desc">{{ detail.description }}</p>
    <p class="price">
      {{ detail.price }}元<span v-if="detail.price != detail.original"
        >{{ detail.original }}元</span
      >
    </p>
  </div>
</template>
<script>
export default {
  props: ["detail"],
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    toProductDetail() {
      this.$router.push({
        name: "ProductDetail",
        query: {
          type: this.detail.name,
        },
      });
    },
    loadImage() {
      this.loading = false;
      console.log(11111);
    },
  },
  mounted() {},
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
    height: 50%;
    // width: 90%;
  }
  .title {
    line-height: 20px;
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
    line-height: 30px;
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