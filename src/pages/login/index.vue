<template>
  <div id="login">
    <h1>
      <img :src="loginImg" alt>
    </h1>
    <h2>
      <img :src="briefImg" alt>
    </h2>
    <div class="cell">
      <van-cell-group>
        <van-field left-icon="contact" v-model="account" clearable placeholder="请输入用户名"/>
      </van-cell-group>
      <van-cell-group>
        <van-field left-icon="contact" v-model="password" type="password" placeholder="请输入密码"/>
      </van-cell-group>
    </div>
    <van-button type="info" @click="testing">登录</van-button>
  </div>
</template>
<script>
import Vue from "vue";
import axios from "axios";
import md5 from "md5";
import { Cell, CellGroup, Field, Button, Toast } from "vant";
Vue.use(Cell)
  .use(CellGroup)
  .use(Field)
  .use(Button)
  .use(Toast);
export default {
  data() {
    return {
      loginImg: require("../../assets/img/login/login_logo.png"),
      briefImg: require("../../assets/img/login/login_brief.png"),
      account: "18516239367",
      password: "123456"
    };
  },
  methods: {
    testing() {
      this.account && this.password ? this.login() : Toast("请输入账号或密码");
    },
    login() {
      let logining = Toast.loading({
        mask: false,
        message: "登录中..."
      });
      let account = this.account;
      let password = md5(this.password);
      axios
        .post("/v1/user/login", {
          account,
          password
        })
        .then(res => {
          logining.clear();
          if (res.data.code == "0") {
            localStorage.setItem("token", res.data.data.token);
            this.$router.push("/");
          } else {
            Toast.fail(res.data.message);
          }
        })
        .catch(function(err) {
          Toast.fail("登录失败，请稍后再试！");
        });
    }
  }
};
</script>
<style lang="less" scoped>
#login {
  padding: 140px 35px 0 35px;
  height: 100vh;
  h1 {
    text-align: center;
    img {
      width: 200px;
    }
  }
  h2 {
    margin-top: 34px;
    text-align: center;
    img {
      width: 500px;
    }
  }
  .cell {
    margin-top: 80px;
    /deep/.van-cell-group {
      background: #ffffff;
      margin-top: 30px;
      border: solid #eeeeee 1px;
      padding: 1px;
      border-radius: 10px;
      overflow: hidden;
      .van-cell {
        padding: 0 30px;
        .van-field__left-icon {
          line-height: 80px;
          margin-right: 34px;
        }
        .van-field__control {
          height: 80px;
          line-height: 80px;
          font-size: 24px;
        }
      }
    }
  }
  /deep/.van-button {
    margin-top: 50px;
    width: 680px;
    height: 80px;
    border-radius: 10px;
    overflow: hidden;
    background-color: #34b8ef;
    border: solid 1px #34b8ef;
    .van-button__text {
      font-size: 28px;
      letter-spacing: 6px;
    }
  }
}
</style>
