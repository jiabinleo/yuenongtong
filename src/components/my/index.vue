<template>
  <div id="my" @click.stop>
    <van-popup position="left" v-model="show">
      <div class="my-header"></div>
      <ul>
        <li v-for="(item,index) in menu" @click="active = index" :key="index">
          <p>
            <img :src="active==index?item.icon:item.iconAt" alt>
            {{item.name}}
          </p>
          <p>{{item.pre}}</p>
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
      show: true,
      active: 0,
      menu: [
        {
          name: "我的收藏",
          pre: "喜欢的全在这里",
          icon: require("../../assets/img/my/sc.svg"),
          iconAt: require("../../assets/img/my/schide.svg")
        },
        {
          name: "账户与安全",
          pre: "完善账户资料，保护账号安全",
          icon: require("../../assets/img/my/zh.svg"),
          iconAt: require("../../assets/img/my/zhhide.svg")
        },
        {
          name: "个人资料",
          pre: "完善账户资料，让别人更多的了解你",
          icon: require("../../assets/img/my/gr.svg"),
          iconAt: require("../../assets/img/my/grhide.svg")
        },
        {
          name: "我的农场",
          pre: "更好的管理自己的农场",
          icon: require("../../assets/img/my/nc.svg"),
          iconAt: require("../../assets/img/my/nchide.svg")
        },
        {
          name: "设置",
          pre: "系统功能偏好设置",
          icon: require("../../assets/img/my/sz.svg"),
          iconAt: require("../../assets/img/my/szhide.svg")
        },
        {
          name: "关于",
          pre: "APP操作手册及疑问解答",
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
      background: #1fa0e3;
    }
    ul {
      li {
        // height: 165px;
      }
    }
  }
}
</style>
