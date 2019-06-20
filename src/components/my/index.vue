<template>
  <div id="my" @click.stop>
    <van-popup position="left" v-model="show">
      <ul>
        <li>菜单栏</li>
        <li>菜单栏</li>
        <li>菜单栏</li>
        <li>菜单栏</li>
        <li>菜单栏</li>
        <li>菜单栏</li>
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
      show: false
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
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  .cbl {
    width: 400px;
    height: 100%;
    background: #eeeeee;
  }
}
</style>
