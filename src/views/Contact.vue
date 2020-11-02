<template>
  <div class="mid-wrap">
    <div class="mid">
      <div class="contact">
        <div class="text-area">
          <h1>联系我们</h1>
          <div class="english"><span>Contact</span></div>
        </div>
        <div class="ways">
          <div class="way-single">
            <i class="el-icon-phone"></i>
            <div class="text">
              <h1>电话</h1>
              <span>183-7873-0110</span>
              <span>191-0203-2297</span>
            </div>
          </div>
          <div class="way-single">
            <i class="el-icon-message"></i>
            <div class="text">
              <h1>邮箱</h1>
              <span>magicgideon@foxmail.com</span>
            </div>
          </div>
          <div class="way-single">
            <i class="el-icon-position"></i>
            <div class="text">
              <h1>位置</h1>
              <span>广西钦州市钦南区沿水路30-11号</span>
            </div>
          </div>
        </div>
      </div>
      <div class="message-board">
        <div class="text-area">
          <h1>留言给我们</h1>
          <div class="english"><span>Message Board</span></div>
        </div>
        <div class="input-area">
          <div class="input-area-top-line">
            <el-input v-model="nameInput" placeholder="您的称呼"></el-input>
            <div style="width: 20px"></div>
            <el-input v-model="phoneInput" placeholder="您的电话"></el-input>
          </div>
          <div style="width: 100%">
            <el-input
              type="textarea"
              :rows="10"
              placeholder="您的需求和建议"
              v-model="suggest"
              resize="none"
            >
            </el-input>
          </div>
          <button class="brown-button" @click="submit">提交留言</button>
        </div>
      </div>
    </div>
    <div class="map">
      <div id="container" style="width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script>
import AMap from "AMap";
export default {
  components: {},
  data() {
    return {
      nameInput: "",
      phoneInput: "",
      suggest: "",
    };
  },
  methods: {
    submit() {
      this.$message.success("感谢您的留言！")
    },
    initMap() {
      let _this = this;
      this.map = new AMap.Map("container", {
        resizeEnable: true, //是否监控地图容器尺寸变化
        zoom: 20, //级别
        center: [108.619132, 21.961243], //中心点坐标
      });
      var marker = new AMap.Marker({
        position: new AMap.LngLat(108.619132, 21.961243),
        // offset: new AMap.Pixel(-10, -10),
        icon: "//vdata.amap.com/icons/b18/1/2.png", // 添加 Icon 图标 URL
        title: "Denzo Inc.",
      });
      marker.setLabel({
        offset: new AMap.Pixel(-65, 25),
        content: "广西丹致家具制造有限公司",
      });
      var onMarkerClick = function (e) {
        // infoWindow.open(map, e.target.getPosition()); //打开信息窗体
        //e.target就是被点击的Marker
        _this.$message({
          message: "广西省钦州市钦南区沿水路30-11号",
          type: "success",
        });
      };
      this.map.add(marker);
      marker.on("click", onMarkerClick); //绑定click事件
    },
  },
  mounted() {
    this.initMap();
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
}
.ways {
  display: flex;
  width: 100%;
  height: 200px;
  //   background-color: #000;
  .way-single {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    i {
      font-size: 50px;
      color: #c72225;
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      height: 100px;
      //   background-color: #000;
      h1 {
        font-size: 20px;
        line-height: 40px;
      }
      span {
        color: #999;
      }
    }
  }
}
.message-board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .input-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    // height: 400px;
    // background-color: #000;
    .input-area-top-line {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
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
.map {
  margin-top: 50px;
  width: 100%;
  height: 300px;
  // background-color: #000;
}
</style>