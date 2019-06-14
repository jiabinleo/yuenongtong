<template>
  <div id="app">
    <router-view/>
    <my v-on:isShowFn="isShowFn(111)"></my>
  </div>
</template>

<script>
import My from "./components/my";
export default {
  name: "App",
  components: {
    My
  },
  methods: {
    isShowFn(data) {
      console.log(data);
      console.log("///");
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
