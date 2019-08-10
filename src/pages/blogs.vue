<template>
  <div class="index-main">
    <mt-header title="我的博客">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="gz-item">
      <div class="zhanshi" v-for="blog in blogList">
        <div class="photo">
          <img v-for="(file,index) in blog.filelists" v-if="index==0" :src="file.address+file.fileName">
          <p><img src="../assets/images/shanchu.png" style="height: 30px;width: 30px" @click="delBlog(blog.blogId)"></p>
        </div>
        <div class="intro">
          <p @click="getBlog(blog.blogId)">{{blog.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  import axios from 'axios'
    export default {
        name: "blogs",
        data(){
          return{
            blogList:[],
            id: this.$route.query.userId
          }
        },
      created(){
          this.getBlogList()
      }
      ,
        methods:{
          getBlogList(){
            let _that=this;
            axios.post("http://localhost:8088/blog/blogApi/queryById",{Id: this.$route.query.userId}).then(function (response) {
              _that.blogList=response.data.blogs;
              console.log(response.data.blogs)
            })
          },
          delBlog(res){
            let _that=this;
            axios.post("http://localhost:8088/blog/blogApi/del",{Id:res}).then(function (response) {
              if(response.data.msg==true){
                Toast("删除成功")
              }else{
                Toast("删除失败")
              }
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
  .index-main{
    overflow: hidden;
  }

  .header img{
    height: 24px;
    width: 24px;
  }
  .header span{
    padding-left: 10px;
  }
  .gz-item{
    width: 100%;
    height: 600px;
    padding: 0;
    margin: 0;
    overflow-y:auto;
    text-align:left;
  }
  .zhanshi{
    width: 100%;
    height: 140px;
    margin-top: 5px;
    border-bottom: 1px solid #eee;
  }
  .photo{
    float:left;
    width:30%;
  }
  .photo img{
    width:100px;
    height:100px;
  }

  .intro{
    float: right;
    width: 70%;
  }
  .intro p{
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
</style>
