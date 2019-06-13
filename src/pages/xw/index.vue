<template>
  <div id="xw">
    <Nav-header :title="xwtitle"></Nav-header>
    <section>
      <h2>{{newsList.title}}</h2>
    </section>
  </div>
</template>
<script>
import NavHeader from "../../components/NavHeader";
import axios from "axios";
export default {
  data() {
    return {
      xwtitle: "",
      newsList: {}
    };
  },
  components: {
    NavHeader
  },
  mounted() {
    this.xwtitle = this.$router.currentRoute.query.title;
    console.log(this.$router.currentRoute);
    axios.get(
      `/v1/news/detail/${
        this.$router.currentRoute.params.id
      }`
    )
      .then(res => {
        if (res.status == 200) {
          this.newsList = res.data.data.newsList;
        }
      })
      .catch();
  }
};
</script>
<style lang="less" scoped>
#xw {
}
</style>
