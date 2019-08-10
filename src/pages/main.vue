<template>
  <div class="index-main">
    <mt-header title="首页">
      <router-link  to="/issue" slot="right">
        <mt-button ><span class="iconfont">&#xe756;</span></mt-button>
      </router-link>
    </mt-header>
    <div class="gz-item">
      <div class="wb-block" v-for= "blog in blogList">
        <img class="wb-touxiang" src="http://www.ghost64.com/qqtupian/qqTxImg/10/2c5d15d2db95f5774277496eb5cce62a.jpg" alt="">
        <span class="wb-nickname">{{blog.username}}</span>
        <span class="wb-time">{{blog.date}}</span>
        <p class="wb-cont" @click="getBlog(blog.blogId)">
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
        name: "main",
        data(){
          return{
            blogList:[],

          }
        },
      created(){
          this.getBlogList()
      },
       methods:{
          getBlogList(){
            let _that=this;
            axios.get("http://localhost:8088/blog/blogApi/queryAll").then(function (response){
              _that.blogList=response.data.blogs;
              console.log(response.data.blogs)
            })
          },
         getBlog(req){
            console.log(req);
            localStorage.setItem("BlogId",req);
           this.$router.push('/blogdetail');
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
    height: 542.52px;
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
    width: 120px;
    margin-left: 10px;
    margin-right: 10px;
  }
  .wb-cont{
    width: 94%;
    height: auto;
    line-height: 20px;
    margin-top: 4%;
    margin-left: 2%;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
