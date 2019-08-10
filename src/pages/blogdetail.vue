<template>
  <div class="index-main">
    <mt-header title="详细信息">
      <router-link  to="-1" slot="left">
        <mt-button>返回&ensp;</mt-button>
      </router-link>
    </mt-header>
    <div class="gz-item" v-for= "blog in blogs">
      <div class="wb-block">
        <img class="wb-touxiang" src="http://www.ghost64.com/qqtupian/qqTxImg/10/2c5d15d2db95f5774277496eb5cce62a.jpg" alt="">
        <span class="wb-nickname">{{blog.username}}</span>
        <span class="wb-time">{{blog.date}}</span>
        <p class="wb-cont">
          {{blog.content}}
        </p>
        <img v-for="file in blog.filelists" :src="file.address+file.fileName" class="wb-img">
        <div class="wb-caozuo">
          <div><span class="iconfont">&#xe6f6;</span>6939</div>
          <div><span class="iconfont">&#xe600;</span>5658</div>
          <div><span class="iconfont">&#xe613;</span>9686</div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "blogdetail",
        data(){
          return{
            blogs:''
          }
        },
      created(){
          this.getblog();
      },
        methods:{
          getblog(){
            var _that=this;
            axios.post("http://localhost:8088/blog/blogApi/queryByBlog",{blogId:localStorage.getItem("BlogId")}).then(function (response) {
              _that.blogs=response.data.blogs;
              console.log(response.data);
            })
          }
        }
    }
</script>

<style scoped>
  @import "../assets/styles/public.css";
  .index-main{
    background-color: #f1f3f4;
    overflow: hidden;
  }
  .gz-item{
    width: 100%;
    height: 600px;
    padding: 0;
    margin: 0;
    overflow-y:auto;
    text-align:left;
  }
  .wb-block{
    width: 100%;
    height: auto;
    /* border-bottom: 1px solid royalblue; */
    background-color: #fff;
    position: relative;
    margin-top: 1%;
  }
  .wb-touxiang{
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin-left: 3%;
    margin-top: 1%;
  }
  .wb-nickname{
    font-size: 16px;
    font-weight: bolder;
    margin-left: 3%;
    margin-top: 2%;
    color: #0bc5e6;
    display: inline-block;
    position: absolute;
  }
  .wb-time{
    font-size: 13px;
    color: rgb(58, 49, 49);
    display: inline-block;
    position: absolute;
    margin-top: 9%;
    left: 20%;
  }
  .wb-img{
    /*display: inline-block;*/
    float: left;
    width: 100%;

  }
  .wb-cont{
    width: 94%;
    height: auto;
    line-height: 20px;
    margin-top: 4%;
    margin-left: 2%;
  }
  .wb-caozuo{
    width: 100%;
    height: 40px;
    /* background-color: aquamarine; */
    border-top: 0.2px solid #ccc;
    /* border-bottom: 0.2px solid #ccc; */
    margin-top: 4%;
    display: flex;
  }
  .wb-caozuo div{
    width: 100%;
    text-align: center;
    line-height: 40px;
  }
  .wb-caozuo div span {
    font-size: 19px;
    margin-right: 7%;
  }
</style>
