<template>
   <div>
     <mt-header title="我的">
     </mt-header>
     <div class="me-xinxi">
           <img class="me-img"  src="http://www.ghost64.com/qqtupian/qqTxImg/10/2c5d15d2db95f5774277496eb5cce62a.jpg">
           <span class="nickname">{{user.userName}}</span>
           <span class="jianjie">{{user.userId}}</span>
     </div>
     <div class="dice">
       <ul>
         <li style="list-style:none" @click="toProfile"><img src="../assets/images/chakan.png" alt=""><p>我的资料</p></li>
         <li style="list-style:none" @click="toEditProfile"><img src="../assets/images/ziliao.png" alt=""><p>修改资料</p></li>
         <li style="list-style:none" @click="toBlogs"><img src="../assets/images/boke.png" alt=""><p>我的博客</p></li>
         <li style="list-style:none" @click="toChangePs"><img src="../assets/images/mima.png" alt=""><p>修改密码</p></li>
       </ul>
     </div>
     <mt-button plain @click="exit">退出登录</mt-button>



   </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "mine",
        data(){
          return{
            user:'',
          }

        },
        created(){
          this.getUser();
        },
        methods:{
          exit() {
            localStorage.clear()
            this.$router.push("/")
          },
          toProfile(){
            this.$router.push("/profile",)
          },
          toEditProfile(){
            this.$router.push("/editProfile")
          },
          toBlogs(){
            this.$router.push({
                path: "/blogs",
                query:{userId : this.user.userId}
            })
          },
          toChangePs(){
            this.$router.push("/changePs")
          },
          getUser(){
            var _that=this;
            axios.post("http://localhost:8088/blog/user/getUser",{userId :localStorage.getItem("user") }).then(function (response) {
              _that.user=response.data.user;
            })
          }

        }
    }
</script>

<style scoped>
  .me-xinxi{
    position: relative;
    height: 78px;
    /* border: 1px solid green; */
    border-bottom:  0.3px solid #ccc;
    margin-top: 5%;
  }
  .me-img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: absolute;
    top: 10%;
    left: 3%;
  }
  .nickname{
    display: inline-block;
    position: absolute;
    top: 10%;
    left:23%;
    font-weight: bold;
  }
  .jianjie{
    display: inline-block;
    position: absolute;
    top: 55%;
    left:23%;
  }
  .set-item li{
    list-style-type: none;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
    border-bottom:  0.3px solid #ccc;
    padding-left: 3%;
    /* font-weight: bold; */
  }
  .set-item li span{
    display: inline-block;
    color: #ccc;
    margin-left: 70%;
  }
  .dice{
    height: 255px;
    padding-top: 30px;
  }
  .dice ul{
    width:100%;
    display: flex;
    flex-direction: row;
    padding-left: 0px;
    flex-wrap: wrap;

  }
  .dice ul li{
    width:20% !important;
    margin: auto;
  }
  .dice ul li p{
    text-align: center;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 0px;

  }
  li img{
    width: 40px;
    height:40px;
    margin: auto;
  }


</style>
