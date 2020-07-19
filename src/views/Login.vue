<template>
  <div class="login" :class="{'show': show}">
    <div class="el-icon-close" @click="show = false"></div>
    <h1 class="title">Login</h1>
    <light-input class="eff-shadow" v-model="loginFrom.account" placeholder="手机号"/>
    <light-input class="eff-shadow" v-model="loginFrom.password" type="password" placeholder="密码"/>
    <el-button class="login-button eff-shadow" type="primary" :loading="logging"
               @click="onLogin">登录</el-button>
  </div>
</template>

<script>
  import LightInput from "@/components/common/LightInput";

  import cookie from "../utils/cookie";
  import BusTypes from "../utils/bus/types";
  import StoreTypes from "../store/types";

  import { login_cellphone } from "@/network/request_login";
  import { future, str_empty } from "@/utils/utils";

  export default {
    name: "Login",
    components: {
      LightInput,
    },
    data() {
      return {
        show: false,
        logging: false,
        loginFrom: {
          account: '',
          password: ''
        }
      }
    },

    created() {
      const _this = this
      this.$bus.$on(BusTypes.LOGIN_PANEL_CUTOVER, function () {
        _this.show = !_this.show
      })
    },

    methods: {
      onLogin() {
        if (str_empty(this.loginFrom.account) || str_empty(this.loginFrom.password)) {
          this.$notify.warning({
            title: '格式错误',
            message: '用户名或密码不能为空'
          })

          return
        }

        this.login()
      },

      login() {
        this.logging = true
        login_cellphone(this.loginFrom.account, this.loginFrom.password)
          .then(result => {
            this.$store.commit(StoreTypes.UPDATE_LOGIN_STATUS, {
              isLogin: true,
              profile: result.profile
            })

            //保存Cookie
            cookie.value = result.cookie

            future(function () {
              this.logging = false; this.show = false
              this.$notify.success({
                title: '登录成功',
                message: `欢迎登录 ${this.$store.state.profile.name}`
              })
            }, 1000, this)

          }).catch(error => {
          future(function () {
            this.$notify.error({ title: '登录失败', message: `请检查用户名或密码` })
            this.logging = false;
          }, 1000, this)
        })
      }
    }
  }
</script>

<style scoped>
  .login {
    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: hidden;
  }

  .login {
    width: 360px;
    height: 0;

    visibility: hidden;
    position: absolute;
    top: 50%;
    left: 50%;

    transition: all 0.6s;
    transform: translate(-50%, -50%);
    border-radius: 6px;
    background-color:  #fafafa;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);

    z-index: 2000;
  }

  .login .el-icon-close {
    position: absolute;
    top: 10px;
    right: 10px;

    cursor: pointer;
  }

  .login .title {
    color: #4caf50;
    font-weight: bold;
    font-size: 40px;
    text-shadow: 3px 3px 10px #4caf5066
  }

  .show {
    height: 400px;
    visibility: visible;
    transform: translate(-50%, -50%)
  }

  .login .light-input {
    margin-top: 25px;
  }

  .login-button {
    margin-top: 60px;
    height: 4em;
    border-radius: 2em;
    background-color: #81c784;
  }

  .login .login-button:hover {
    background-color: #66bb6a;
  }

  .login .light-input, .login .login-button {
    width: 300px;
    border: none;
  }
</style>
