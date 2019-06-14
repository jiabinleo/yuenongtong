<template>
  <div id="xw">
    <Nav-header :title="xwtitle"></Nav-header>
    <section>
      <h2>{{newsList.title}}</h2>
      <h3>
        <img class="xw-userLogo" :src="newsList.authorIcon" alt="Icon" @error="imgError($event)">
        <p>{{newsList.author}}{{newsList.publishTime|filetime}}</p>
        <img class="xw-zz" src alt srcset>
      </h3>
      <div class="xw-content" v-html="newsList.content"></div>
    </section>
  </div>
</template>
<script>
import NavHeader from "../../components/NavHeader";
import axios from "axios";
let moment = require("moment");
export default {
  data() {
    return {
      xwtitle: "",
      newsList: {},
      logoImg: require("../../assets/img/index/logo.png")
    };
  },
  components: {
    NavHeader
  },
  mounted() {
    this.xwtitle = this.$router.currentRoute.query.title;
    console.log(this.$router.currentRoute);
    axios
      .get(`/v1/news/detail/${this.$router.currentRoute.params.id}`)
      .then(res => {
        if (res.status == 200) {
          var newsList = res.data.data.newsList;
          newsList.authorIcon = newsList.authorIcon
            ? "https://www.kwantler.com.cn" + newsList.authorIcon
            : this.logoImg;
          this.newsList = newsList;
        }
      })
      .catch();
  },
  filters: {
    filetime(value) {
      return value ? moment(value).format("YYYY-MM-DD HH:mm") : "";
    }
  },
  methods: {
    imgError(e) {
      e.target.src = this.logoImg;
    }
  }
};
</script>
<style lang="less" scoped>
img {
  width: 100px;
}
#xw {
  section {
    padding: 120px 35px 100px 35px;
    h2 {
      font-size: 32px;
      color: #333333;
      font-weight: bold;
      line-height: 40px;
    }
    .xw-content {
      overflow: hidden;
      p {
        width: 100px;
        height: 100px;
        overflow: hidden;
      }
      img {
        width: 100px !important;
      }
    }
  }
}
</style>
