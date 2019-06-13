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
      <li v-for="(item, index) in menuList" @click="$router.push(item.code)" :key="index">
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
    <div class="i-news">
      <div class="i-content">
        <h2 class="i-news-title">推荐新闻</h2>
        <div v-for="(item,index) in newsList" class="i-list" @click="$router.push('xw')" :key="index">
          <div v-if="index%4" class="i-list-bottom">
            <div class="i-list-bottom-top">
              <img :src="'https://www.kwantler.com.cn'+item.iconTwo" alt srcset>
            </div>
            <p class="i-list-bottom-bottom">{{item.brief}}</p>
          </div>
          <div v-else class="i-list-top">
            <div class="i-list-left">
              <img :src="'https://www.kwantler.com.cn'+item.iconTwo" alt srcset>
            </div>
            <div class="i-list-right">
              <h2>{{item.title}}</h2>
              <div class="i-list-right-center">
                <p>{{item.brief}}</p>
              </div>
              <div class="i-list-right-bottom">
                <span class="i-list-right-bottom-left">{{item.publishTime}}</span>
                <span class="i-list-right-bottom-right">阅读 {{item.reading}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-menu :idx="0"></footer-menu>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Row, Col, Search, Swipe, SwipeItem, Lazyload } from "vant";
import FooterMenu from "../../components/footer";
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
      weather: {},
      newsList: []
    };
  },
  mounted() {
    axios
      .get("/v1/index/bannerList?category=index")
      .then(res => {
        this.bannerList = res.data.data.bannerList;
      })
      .catch();
    axios
      .get("/v1/index/menuList")
      .then(res => {
        this.menuList = res.data.data.menuList;
      })
      .catch();
    axios
      .get(
        "/v1/weather/forecast?longitude=121.6544&latitude=25.1552"
      )
      .then(res => {
        this.weather = res.data.data;
      })
      .catch();
    axios
      .get("/v1/news/indexNewsList")
      .then(res => {
        this.newsList = res.data.data.newsList;
        console.log(this.newsList[0]);
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
  },
  components: {
    FooterMenu
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
  .i-news {
    padding: 0 35px;
    margin-top: 20px;
    background: #ffffff;
    overflow: hidden;
    margin-bottom: 100px;
    .i-news-title {
      position: relative;
      color: #333333;
      font-size: 28px;
      height: 86px;
      line-height: 86px;
      border-bottom: solid 1px #eeeeee;
      &::before {
        position: absolute;
        left: -35px;
        top: 30px;
        display: block;
        content: "";
        width: 4px;
        height: 26px;
        border-radius: 1px;
        background: #1d9fe2;
      }
      &::after {
        position: absolute;
        left: -35px;
        top: 30px;
        display: block;
        content: "";
        width: 4px;
        height: 26px;
        border-radius: 1px;
        background: #1d9fe2;
      }
    }
    .i-list {
      float: left;
      &:nth-of-type(4n + 2) {
        .i-list-bottom {
          margin-left: 0;
        }
      }
      .i-list-top {
        float: left;
        overflow: hidden;
        padding: 30px 0;
        border-bottom: solid 1px #eeeeee;
        .i-list-left {
          float: left;
          img {
            width: 260px;
            height: 174px;
            border-radius: 8px;
          }
        }
        .i-list-right {
          float: left;
          width: 390px;
          margin-left: 30px;
          h2 {
            color: #333333;
            font-size: 28px;
            font-weight: bold;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .i-list-right-center {
            font-size: 24px;
            color: #747474;
            p {
              line-height: 35px;
              padding-top: 10px;
              height: 98px;
              width: 390px;
              color: #747474;
              text-overflow: ellipsis;
              overflow: hidden;
              display: -webkit-box;
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }
          }
          .i-list-right-bottom {
            padding-top: 16px;
            span {
              color: #999999;
              font-size: 20px;
              &.i-list-right-bottom-left {
                float: left;
              }
              &.i-list-right-bottom-right {
                float: right;
              }
            }
          }
        }
      }
      .i-list-bottom {
        padding: 30px 0;
        width: 206px;
        float: left;
        margin-left: 30px;
        .i-list-bottom-top {
          width: 206px;
          height: 206px;
          img {
            width: 206px;
            height: 206px;
            border-radius: 8px;
          }
        }
        .i-list-bottom-bottom {
          line-height: 35px;
          padding-top: 10px;
          height: 98px;
          color: #333333;
          font-size: 24px;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
}
</style>
