<template>
  <div id="bd">
    <nav-header title="我"></nav-header>
    <footer-menu :idx="3"></footer-menu>
  </div>
</template>
<script>
import NavHeader from "../../components/NavHeader";
import FooterMenu from "../../components/footer";
export default {
  components: {
    FooterMenu,
    NavHeader
  }
};
</script>
<style lang="less" scoped>
</style>
