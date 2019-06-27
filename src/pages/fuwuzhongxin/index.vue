<template>
  <div id="fwzx">
    <nav-header title="服务中心"></nav-header>
    <div class="fwzx-content">
      <van-tabs v-model="active" animated>
        <van-tab title="全部问题">
          <div class="fwzx-wrap">
            <div class="fwzx-hot">
              <h3>
                <img src="../../assets/img/footer/hot.svg" alt> 热门问题
              </h3>
              <ul>
                <li v-for="(item, index) in tipTab" :key="index">{{item.name}}</li>
              </ul>
            </div>
          </div>
        </van-tab>
        <van-tab title="保险相关">
          <div class="fwzx-wrap">
            <div class="fwzx-hot">
              <h3>保险相关</h3>
            </div>
          </div>
        </van-tab>
        <van-tab title="意见反馈">
          <div class="fwzx-wrap">
            <div class="fwzx-hot">
              <h3>意见反馈</h3>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
    <footer-menu @isShowF="isShowI" :idx="1"></footer-menu>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import { Tab, Tabs } from "vant";
import FooterMenu from "../../components/footer";
import NavHeader from "../../components/NavHeader";
Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 0,
      tipTab: [
        {
          name: "农业问题"
        },
        {
          name: "农业问题"
        },
        {
          name: "农业问题"
        },
        {
          name: "农业问题"
        },
        {
          name: "农业问题"
        },
        {
          name: "农业问题"
        }
      ]
    };
  },
  mounted() {
    axios
      .get("/v1/index/bannerList?category=index")
      .then(res => {
        console.log(res);
      })
      .catch();
  },
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
#fwzx {
  margin-top: 90px;
  .fwzx-content {
    /deep/.van-tabs__wrap {
      height: 80px;
      .van-ellipsis {
        line-height: 80px;
      }
      .van-tabs__line {
        background-color: #1d9fe2;
      }
    }
    /deep/.van-tabs__content {
      border-top: solid #eeeeee 1px;
      margin-top: 36px;
      background: #ffffff;
      line-height: 96px;
      .fwzx-wrap {
        padding: 0 35px;
        .fwzx-hot {
          img {
            width: 27px;
            height: 27px;
            vertical-align: middle;
            margin-right: 10px;
          }
          h3 {
            font-size: 28px;
            color: #333333;
          }
        }
      }
    }
  }
}
</style>
