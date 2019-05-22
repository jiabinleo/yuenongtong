<template>
  <div id="index">
    <van-row class="i-header" justify="space-between">
      <van-col span="3">
        <img class="i-sweep" src="../../assets/img/index/sweep.png" alt>
      </van-col>
      <van-col span="18">
        <div class="i-search">
          <input type="text" placeholder="请输入您想搜索的内容">
          <img class="i-ellipse" src="../../assets/img/index/ellipse.png" alt srcset>
        </div>
      </van-col>
      <van-col span="3">
        <img class="i-msg" src="../../assets/img/index/alarm.png" alt>
      </van-col>
    </van-row>
    <div class="i-swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item
          v-for="(item, index) in bannerList"
          @click="getUrl(item.linkUrl)"
          :key="index"
        >
          <img :src="'https://www.kwantler.com.cn'+item['bannerImg']" alt>
        </van-swipe-item>
      </van-swipe>
    </div>
    <ul class="i-menu">
      <li v-for="(item, index) in menuList" :key="index">
        <img :src="'https://www.kwantler.com.cn'+item['icon']" alt srcset>
        <p>{{item['title']}}</p>
      </li>
    </ul>
    <div class="i-weather">
      <div class="i-weather-icon">
        <img src="../../assets/img/index/PARTLY_CLOUDY_NIGHT_hide.png" alt srcset>
      </div>
      <div class="i-weather-msg">
        <p>
          智能天气推送
          <img src="../../assets/img/index/rexiao.png" alt srcset>
        </p>
        <p>{{weather.description}}</p>
      </div>
      <span class="i-weather-else">
        详细天气
        <img src="../../assets/img/index/016.png" alt srcset>
      </span>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Row, Col, Search, Swipe, SwipeItem, Lazyload } from "vant";
Vue.use(Row)
  .use(Col)
  .use(Search)
  .use(Swipe)
  .use(SwipeItem)
  .use(Lazyload);
export default {
  data() {
    return {
      bannerList: [],
      menuList: [],
      weather: {}
    };
  },
  mounted() {
    axios
      .get("https://www.kwantler.com.cn/v1/index/bannerList?category=index")
      .then(res => {
        this.bannerList = res.data.data.bannerList;
      })
      .catch();
    axios
      .get("https://www.kwantler.com.cn/v1/index/menuList")
      .then(res => {
        this.menuList = res.data.data.menuList;
      })
      .catch();
    axios
      .get(
        "https://www.kwantler.com.cn/v1/weather/forecast?longitude=121.6544&latitude=25.1552"
      )
      .then(res => {
        this.weather = res.data.data;
      })
      .catch();
  },
  methods: {
    onSearch() {},
    onCancel() {},
    getUrl(url) {
      console.log(url);
      // this.$router.push(url);
    }
  }
};
</script>
<style lang="less" scoped>
#index {
  .i-header {
    position: fixed;
    z-index: 99;
    height: 90px;
    width: 100%;
    background: #1d9fe2;
    .i-sweep {
      width: 40px;
      height: 40px;
      padding-left: 35px;
      padding-top: 25px;
    }
    .i-msg {
      width: 40px;
      height: 40px;
      float: right;
      padding-right: 35px;
      padding-top: 25px;
    }
    .i-search {
      position: relative;
      height: 56px;
      width: 540px;
      line-height: 90px;
      margin-left: 16px;
      input {
        text-align: left;
        height: 56px;
        width: 380px;
        border-radius: 28px;
        border: none;
        font-size: 28px;
        padding: 0 80px;
        background: rgba(255, 255, 255, 0.3);
        color: #ffffff;
        &::placeholder {
          color: #ffffff;
        }
      }
      .i-ellipse {
        position: absolute;
        left: 30px;
        top: 34px;
        width: 30px;
        height: 30px;
      }
    }
  }
  .i-swiper {
    padding-top: 90px;
    img {
      width: 750px;
      height: 360px;
    }
  }
  .i-menu {
    padding: 35px 23px;
    background: #ffffff;
    overflow: hidden;
    li {
      float: left;
      width: 25%;
      text-align: center;
      &:nth-of-type(n + 5) {
        padding-top: 36px;
      }
      img {
        width: 90px;
      }
      p {
        color: #666666;
        font-size: 24px;
        line-height: 36px;
      }
    }
  }
  .i-weather {
    margin-top: 20px;
    position: relative;
    padding: 30px 35px;
    background: #ffffff;
    overflow: hidden;
    .i-weather-icon {
      position: absolute;
      top: 50%;
      transform: translateY(-28px);
      width: 66px;
      height: 66px;
      img {
        width: 66px;
      }
    }
    .i-weather-msg {
      margin-left: 80px;
      p {
        line-height: 35px;
        &:first-of-type {
          font-size: 22px;
          color: #666666;
          img {
            width: 52px;
            height: 24px;
            vertical-align: -4px;
            margin-left: 4px;
          }
        }
        &:last-of-type {
          font-size: 20px;
          color: #999999;
        }
      }
    }
    .i-weather-else {
      position: absolute;
      right: 35px;
      top: 30px;
      font-size: 18px;
      color: #999999;
      padding-right: 20px;
      img {
        width: 9px;
        height: 16px;
        vertical-align: 0;
        line-height: 18px;
      }
    }
  }
}
</style>
