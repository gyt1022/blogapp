<template>
  <div class="login-main">
    <div class="iconfont close"></div>
    <div class="login-tip">登录注册更精彩</div>

    <div style="margin-top: 100px">
      <div class="WxBookContent">
        <div class="FormItemEdit">
          <input type="text" class="TextBox" placeholder="请输入账号" v-model="account">
        </div>
        <div class="FormItemEdit">
          <input type="password" class="TextBox" placeholder="请输入登录密码" v-model="password">
        </div>
      </div>
      <div><a style="float:left; margin-left: 25px; color: #0799c1" @click="regist">没有账号，去注册一个</a></div>
      <br>
      <div class="login-yzm" @click="login">登录</div>
    </div>
  </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    export default {
        name: "login",
        data(){
          return{
            account:'',
            password:''
          }

        },
        methods:{
          login(){
            var _that=this;
            if(this.account.length>0){
              if(this.password.length>0){
                axios.post("http://localhost:8088/blog/user/login",{userId : this.account,password : this.password}).then(function (response) {
                  console.log(response.data.msg)
                  if(response.data.msg=="null"){
                    Toast("用户不存在")
                  }else{
                    if(response.data.msg==false){
                      Toast("密码错误")
                    }else{
                      _that.toMain();
                      localStorage.setItem("user",response.data.user)
                      console.log(localStorage.getItem("user"))
                    }
                  }
                })
              }else{
                Toast("密码不能为空")
              }
            }else{
              Toast('用户名不能为空');
            }

          },
          toMain(){
            this.$router.push('/main');
          },
          regist(){
            this.$router.push('/regist');
          }
        }
    }
</script>

<style scoped>
  .login-main{
    overflow: hidden;
  }
  .close{
    width: 100%;
    height: 35px;
    font-size: 22px;
    line-height: 20px;
    margin-top: 3%;
    margin-left: 3%;
  }
  .login-tip{
    width: 100%;
    height: 40px;
    font-size: 30px;
    /* font-weight: bold; */
    margin-top: 3%;
    margin-left: 3%;
  }
  .login-input{
    width: 94%;
    height: 40px;
    border-bottom: 0.8px solid #28accc;
    margin-left: 3%;
    margin-right: 2%;
    margin-top: 21%;
  }
  input:focus{
     outline: none;
    border: 1px solid #28accc
  }
  #inp{
    width: 100%;
    height: 80px;
    border-bottom: 0.8px solid #cccccc;
    margin-left: 3%;
    margin-right: 2%;
    margin-top: 21%;
  }
  .inp1{
     border-bottom:0.8px solid #cccccc;
   }
  .inp2{
    border-bottom:0.8px solid #cccccc;
  }
  .login-input input{
    width: 95%;
    height: 40px;
    text-indent: 7px;
  }
  .login-input input::-webkit-input-placeholder{
    font-size: 18px;
    color: #131313;
  }
  .login-yzm{
    width: 94%;
    height: 38px;
    margin: 0 auto;
    margin-top: 6%;
    text-align: center;
    line-height: 38px;
    background-color: #2496ff;
    color: #fff;
    font-size: 17px;
    border-radius: 3px;
  }
  .WxBookContent .FormItemEdit {
    background: #ffffff;
    padding: 0px 26px;
    margin-bottom: 10px;
    position: relative;
  }
  .WxBookContent .FormItemEdit:before {
    content: " ";
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    border-top: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    z-index: 5;
  }
  .WxBookContent .FormItemEdit:after {
    content: " ";
    position: absolute;
    left: 0px;
    bottom: 0px;
    right: 0px;
    border-bottom: 1px solid #d9d9d9;
    color: #d9d9d9;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    z-index: 5;
  }
  .WxBookContent .InputTips {
    font-size: 14px;
    line-height: 1.5;
    color: #888888;
    padding: 0px 16px;
    margin-bottom: 10px;
    text-align: center;
  }
  .WxBookContent .FormItemEdit .TextBox {
    height: 24px;
    width: 100%;
    border: 0px;
    border-radius: 0px;
    line-height: 24px;
    padding: 10px 0px;
    font-size: 16px;
    font-weight: normal;
  }
  .WxBookContent .FormItemEdit .BtnClear {
    width: 44px;
    height: 44px;
    background-size: 16px 16px;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  input:focus{
    outline: none;
  }
</style>
