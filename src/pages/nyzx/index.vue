<template>
  <div id="nyzx">
    <nav-header title="农业资讯"></nav-header>
    <div class="nyzx-content">
      <van-tabs v-model="active" animated @click="getNews(active)">
        <van-tab v-for="(item,index) in newsCategoryList" :title="item.categoryName" :key="index">
          <div class="nyzx-wrap">
            <van-swipe :show-indicators="false">
              <van-swipe-item v-for="(item, index) in category" :key="index">
                <img :src="item.cover">
              </van-swipe-item>
            </van-swipe>
            <div class="nyzx-list">
              <ul>
                <li v-for="(item,index) in list" :key="index" @click="$router.push({path:`xw/${item.id}`,query:{title:xwTitle}})">
                  <div class="nyzx-text">
                    <h2 v-text="item.title"></h2>
                    <p class="nyzx-text-content" v-text="item.brief"></p>
                    <div class="nyzx-text-time-reading">
                      <p v-text="item.publishTime"></p>
                      <p v-text="item.reading"></p>
                    </div>
                  </div>
                  <div class="nyzx-img">
                    <img :src="item.iconTwo" alt>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Tab, Tabs, Swipe, SwipeItem } from "vant";
import NavHeader from "../../components/NavHeader";
Vue.use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem);
export default {
  data() {
    return {
      active: 0,
      newsCategoryList: [],
      category: [],
      title: "",
      label: "",
      pageNum: 1,
      pageSize: 10,
      list: [],
      xwTitle: ""
    };
  },
  components: {
    NavHeader
  },
  mounted() {
    axios.get(`/v1/news/newsCategory`).then(res => {
      this.newsCategoryList = res.data.data.newsCategoryList;
      this.getNews(0);
    });
  },
  methods: {
    getNews(active) {
      this.xwTitle = this.newsCategoryList[active].categoryName;
      axios
        .get(
          `/v1/news/topNewsListByCategory?category=${
            this.newsCategoryList[active].categoryCode
          }`
        )
        .then(res => {
          if (res.status == 200) {
            var category = res.data.data.newsList;
            for (let i = 0; i < category.length; i++) {
              category[i].cover =
                "https://www.kwantler.com.cn" + category[i].cover;
            }
            this.category = category;
          }
        })
        .catch();
      axios
        .get(
          `/v1/news/newsList?category=${
            this.newsCategoryList[active].categoryCode
          }& title=${this.title}& label=${this.label}& pageNum=${
            this.pageNum
          }& pageSize=${this.pageSize}`
        )
        .then(res => {
          if (res.status == 200) {
            var list = res.data.data.newsList.rows;
            for (let i = 0; i < list.length; i++) {
              list[i].iconTwo = "https://www.kwantler.com.cn" + list[i].iconTwo;
              list[i].publishTime = list[i].publishTime.split(" ")[0];
              list[i].reading = "阅读 " + list[i].reading;
            }
            this.list = list;
          }
        });
    }
  }
};
</script>
<style lang="less" scoped>
#nyzx {
  margin-top: 90px;
  .nyzx-content {
    /deep/.van-tabs__wrap {
      height: 80px;
      .van-tab--active {
        color: #1d9fe2;
      }
      .van-ellipsis {
        line-height: 80px;
        font-size: 28px;
      }
      .van-tabs__line {
        background-color: #1d9fe2;
      }
    }
    /deep/.van-tabs__content {
      border-top: solid #eeeeee 1px;
      margin-top: 36px;
      line-height: 96px;
      .nyzx-wrap {
        margin-top: 20px;
        /deep/.van-swipe {
          background: #ffffff;
          padding: 20px 0;
          .van-swipe__track {
            width: 750px;
            height: 360px;
            .van-swipe-item {
              width: 680px;
              img {
                width: 100%;
                height: 360px;
              }
            }
          }
        }
        .nyzx-list {
          background: #ffffff;
          margin-top: 20px;
          ul {
            padding: 0 35px;
            li {
              overflow: hidden;
              padding: 24px 0;
              border-bottom: solid 1px #eeeeee;
              &:last-of-type {
                border-bottom: none;
              }
              .nyzx-text {
                float: left;
                width: 430px;
                h2 {
                  font-size: 28px;
                  color: #333333;
                  line-height: 40px;
                  height: 80px;
                  overflow: hidden;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;
                  text-overflow: ellipsis;
                }
                .nyzx-text-content {
                  font-size: 24px;
                  padding-top: 4px;
                  color: #999999;
                  line-height: 30px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  height: 90px;
                }
                .nyzx-text-time-reading {
                  overflow: hidden;
                  padding-top: 16px;
                  p {
                    line-height: 1;
                    font-size: 20px;
                    color: #999999;
                    float: left;
                    &:last-of-type {
                      float: right;
                    }
                  }
                }
              }
              .nyzx-img {
                float: right;
                width: 206px;
                height: 206px;
                padding-top: 6px;
                img {
                  border-radius: 8px;
                  width: 206px;
                  height: 206px;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
