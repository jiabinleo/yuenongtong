<template>
  <div id="header">
    <div class="goReturn" @click="goReturn">
      <img src="../../assets/img/footer/return.svg" alt srcset>
    </div>
    {{title}}
  </div>
</template>
<script>
export default {
  props: {
    title: String
  },
  methods: {
    goReturn() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
#header {
  position: fixed;
  width: 100%;
  z-index: 999;
  overflow: hidden;
  top: 0;
  height: 90px;
  line-height: 90px;
  text-align: center;
  font-size: 32px;
  color: #ffffff;
  background: #20a4e4;
  .goReturn {
    position: absolute;
    left: 0;
    top: 0;
    width: 90px;
    height: 90px;
    img {
      padding: 5px;
      width: 50px;
      height: 80px;
    }
  }
}
</style>
