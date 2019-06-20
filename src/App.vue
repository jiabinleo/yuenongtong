<template>
  <div id="app">
    <router-view @isShowA="isShowFnA"/>
    <my ref="showMy"></my>
  </div>
</template>

<script>
import My from "./components/my";
export default {
  name: "App",
  data() {
    return {
      isShowFB: false
    };
  },
  components: {
    My
  },
  methods: {
    isShowFnA(data) {
      this.$refs.showMy.showMyFn(data);
    }
  }
};
</script>
window.onload = function() {
  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault()
    }
  })
  document.addEventListener('gesturestart', function(event) {
    event.preventDefault()
  })
}
<style>
</style>
