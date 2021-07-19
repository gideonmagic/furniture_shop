<template>
  <div>
    <PC v-if="PC" />
    <Mobile v-if="!PC" />
  </div>
</template>
<script>
import PC from "@/PCApp.vue";
import Mobile from "@/MobileApp.vue";
export default {
  components: {
    PC,
    Mobile,
  },
  data() {
    return {
      PC: false,
    };
  },
  created() {
    let _this = this;
    if (this._isMobile()) {
      // 手机端
      console.log("手机端");
      _this.PC = false;
      // this.$router.replace("/mobile/home");
    } else {
      // pc端
      console.log("PC端");
      _this.PC = true;
      // this.$router.replace("/home");
    }
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows phone)/i
      );
      // localStorage.setItem('ismobile', flag? 1:0)
      return flag;
    },
  },
};
</script>
<style lang="scss">
</style>
