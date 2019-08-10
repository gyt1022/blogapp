<template>
  <div>
    <mt-header title="注册">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="WxBookContent">
      <div class="FormItemEdit">
        <input type="text" class="TextBox" placeholder="请输入账号" v-model="userId">
      </div>
      <div class="FormItemEdit">
        <input type="text" class="TextBox" placeholder="请输入用户名" v-model="username">
      </div>
      <div class="FormItemEdit">
        <input type="text" class="TextBox" placeholder="请输入手机号" v-model="phone">
      </div>
      <div class="FormItemEdit">
        <input type="text" class="TextBox" placeholder="请输入密码6-16位" v-model="password">
      </div>
      <br>

      <mt-button plain @click="zhuce">注册</mt-button>

    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import axios from 'axios'
    export default {
        name: "regist",
        data(){
          return{
            userId:'',
            username:'',
            phone:'',
            password:''
          }
        },
        methods:{
          zhuce(){
            if(this.userId.length>0){
              if(this.username.length>0){
                if(this.password.length>=6&&this.password.length<=16){
                    if(this.phone.length==11){
                      axios.post("http://localhost:8088/blog/user/add",{userId:this.userId,username:this.username,
                        phone:this.phone,password:this.password}).then(function (response) {
                          if(response.data.msg==true){
                             Toast("注册成功")
                          }else{
                             Toast("账号重复,注册失败")
                          }

                      })
                    }else{
                      Toast("请输入正确的手机号")
                    }
                }else {
                  Toast("密码必须在6-16位之间")
                }
              }else{
                Toast("用户不能为空")
              }
            }else{
              Toast("账号不能为空")
            }
          }

        }
    }
</script>

<style scoped>
  .WxBookContent{
    padding-top: 16px;
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
