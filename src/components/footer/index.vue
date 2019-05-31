<template>
  <div id="footerMenu">
    <div
      v-for="(item,index) in menu"
      class="footer-item"
      @click="$router.push(item.page)"
      :key="index"
    >
      <img :src="index===idx?item.iconSelect:item.icon" alt>
      <p :class="{colorSelect:index===idx}">{{item.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterMenu",
  props: ["idx"],
  data() {
    return {
      menu: [
        {
          icon: require("../../assets/img/footer/home.svg"),
          name: "首页",
          page: "/",
          iconSelect: require("../../assets/img/footer/homeSelect.svg"),
          cls: "footer-item"
        },
        {
          icon: require("../../assets/img/footer/home.svg"),
          name: "服务中心",
          page: "fwzx",
          iconSelect: require("../../assets/img/footer/homeSelect.svg"),
          cls: "footer-item"
        },
        {
          icon: require("../../assets/img/footer/home.svg"),
          name: "保单",
          page: "bd",
          iconSelect: require("../../assets/img/footer/homeSelect.svg"),
          cls: "footer-item"
        },
        {
          icon: require("../../assets/img/footer/home.svg"),
          name: "我",
          page: "wo",
          iconSelect: require("../../assets/img/footer/homeSelect.svg"),
          cls: "footer-item"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
#footerMenu {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 98px;
  background: #ffffff;
  border-top: solid 1px #d3d3d3;
  display: flex;
  .footer-item {
    flex: 1;
    text-align: center;
    img {
      width: 56px;
      height: 56px;
    }
    p {
      color: #999999;
      font-size: 20px;
      &.colorSelect {
        color: #1d9fe2;
      }
    }
  }
}
</style>
