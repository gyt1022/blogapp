<template>
  <div>
    <mt-header title="个人资料">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <mt-cell class="xianshi" title="昵称：" ><span class="wenzi">{{user.userName}}</span></mt-cell>
    <mt-cell class="xianshi" title="注册时间：">{{user.userDate}}</mt-cell>
    <mt-cell class="xianshi" title="手机号：">{{user.userPhone}}</mt-cell>
    <mt-cell class="xianshi" title="地址：">{{user.userAddress}}</mt-cell>

  </div>

</template>

<script>
    import axios from 'axios'
    export default {
        name: "profile",
        data(){
          return{
            user:''
          }
        },
        created() {
          this.getUser();

        },
      methods:{
        getUser(){
          var _that=this;
          axios.post("http://localhost:8088/blog/user/getUser",{userId :localStorage.getItem("user") }).then(function (response) {
            _that.user=response.data.user;
            console.log(response.data.user)
          })
        }
      }

    }
</script>

<style scoped>
.xianshi{
  text-align: left;
  margin-left: 20px;
}
</style>
