<template>
  <div id="my" @click.stop>
    <van-popup position="left" v-model="show">
      <div class="my-header">
        <div class="my-header-content">
          <img class="my-header-user" :src="logo" alt>
          <h1>Tenderness丶</h1>
          <img class="my-header-exit" :src="exit" @click="exitFn" alt>
          <p>批量出售玉米，红豆，等杂粮可长期合作,本人电话13084275942</p>
        </div>
      </div>
      <ul>
        <li
          v-for="(item,index) in menu"
          :class="index%2?'my-menu-bg':'my-menu-bg-hide'"
          @click="active = index"
          :key="index"
        >
          <p class="my-menu-title">
            <img :src="(active==index)?item.iconAt:item.icon" alt>
            {{item.name}}
          </p>
          <p class="my-menu-brief">{{item.brief}}</p>
        </li>
      </ul>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";
Vue.use(Popup);
export default {
  data() {
    return {
      show: false,
      active: 0,
      logo: require("../../assets/img/index/logo.png"),
      exit: require("../../assets/img/my/exit.png"),
      menu: [
        {
          name: "我的收藏",
          brief: "喜欢的全在这里",
          icon: require("../../assets/img/my/sc.svg"),
          iconAt: require("../../assets/img/my/schide.svg")
        },
        {
          name: "账户与安全",
          brief: "完善账户资料，保护账号安全",
          icon: require("../../assets/img/my/zh.svg"),
          iconAt: require("../../assets/img/my/zhhide.svg")
        },
        {
          name: "个人资料",
          brief: "完善账户资料，让别人更多的了解你",
          icon: require("../../assets/img/my/gr.svg"),
          iconAt: require("../../assets/img/my/grhide.svg")
        },
        {
          name: "我的农场",
          brief: "更好的管理自己的农场",
          icon: require("../../assets/img/my/nc.svg"),
          iconAt: require("../../assets/img/my/nchide.svg")
        },
        {
          name: "设置",
          brief: "系统功能偏好设置",
          icon: require("../../assets/img/my/sz.svg"),
          iconAt: require("../../assets/img/my/szhide.svg")
        },
        {
          name: "关于",
          brief: "APP操作手册及疑问解答",
          icon: require("../../assets/img/my/gy.svg"),
          iconAt: require("../../assets/img/my/gyhide.svg")
        }
      ]
    };
  },
  mounted() {},
  methods: {
    showMyFn() {
      this.show = true;
    },
    exitFn() {
      this.show = false;
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="less" scoped>
#my {
  .van-popup {
    width: 540px;
    height: 100%;
    .my-header {
      width: 540px;
      height: 240px;
      // background: url("../../assets/img/my/userbg.png") no-repeat;
      background-image: url("../../assets/img/my/userbg.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .my-header-content {
        position: relative;
        padding: 35px;
        .my-header-user {
          position: absolute;
          left: 35px;
          top: 35px;
          width: 80px;
          height: 80px;
          border-radius: 50%;
        }
        .my-header-exit {
          width: 46px;
          height: 38px;
          position: absolute;
          right: 35px;
          top: 35px;
          padding: 21px 17px;
        }
        h1 {
          padding-left: 100px;
          font-size: 34px;
          color: #ffffff;
          line-height: 80px;
        }
        p {
          padding-left: 100px;
          font-size: 22px;
          line-height: 38px;
          color: #ffffff;
        }
      }
    }
    ul {
      li {
        &.my-menu-bg-hide {
          background: #ffffff;
        }
        &.my-menu-bg {
          background: #eeeeee;
        }
        padding: 48px 35px;
        .my-menu-title {
          font-size: 30px;
          color: #333333;
          img {
            width: 30px;
            height: 30px;
            padding-right: 25px;
          }
        }
        .my-menu-brief {
          padding-left: 62px;
          padding-top: 15px;
          font-size: 24px;
          color: #999999;
        }
      }
    }
  }
}
</style>
