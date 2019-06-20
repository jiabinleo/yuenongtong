<template>
  <div id="bd">
    <nav-header title="保单"></nav-header>
    <footer-menu @isShowF="isShowI" :idx="2"></footer-menu>
  </div>
</template>
<script>
import NavHeader from "../../components/NavHeader";
import FooterMenu from "../../components/footer";
export default {
  components: {
    FooterMenu,
    NavHeader
  },
  methods: {
    isShowI(data) {
      this.$emit("isShowA", data);
    }
  }
};
</script>
<style lang="less" scoped>
</style>
