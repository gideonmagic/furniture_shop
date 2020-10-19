<template>
  <div class="about">
    <img :src="require(`@/assets/img/about-1.jpg`)" alt="" />
    
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  margin: 0 auto;
  // margin-top: 70px;
  width: 100%;
  img {
    left: 0;
    top: 0;
    width: 100%;
  }
}
</style>