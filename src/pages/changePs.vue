<template>
    <div>
      <mt-header title="修改密码">
        <router-link to="/mine" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
      </mt-header>
      <div class="WxBookContent">
        <div class="FormItemEdit">
          <input type="text" class="TextBox" placeholder="请输入旧密码" v-model="password">
        </div>
        <div class="FormItemEdit">
          <input type="text" class="TextBox" placeholder="请输入新密码" v-model="newPassword">
        </div>
      </div>
      <mt-button plain @click="edit">修改密码</mt-button>
    </div>
</template>

<script>
    import { Toast } from 'mint-ui';
    import axios from 'axios'
    export default {
        name: "changePs",
        data(){
          return{
            password:'',
            newPassword:''
          }
        },
      methods:{
          edit(){
            axios.post("http://localhost:8088/blog/blogApi/mima",{password:this.password,newPassword:this.newPassword,Id:localStorage.getItem("user")}).then(function (response) {
              if(response.data.msg==true){
                Toast("修改成功")
              }else{
                Toast("修改失败")
              }
            })
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
