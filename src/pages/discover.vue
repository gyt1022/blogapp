<template>
    <div class="index-main">
      <div class="header">
        <input class="shuru" v-model="value">
        <span @click="search"><img src="../assets/images/sousuo.png">搜索</span>
      </div>

      <div class="gz-item">
        <div class="zhanshi" v-for="(blog,index) in blogList" :key="index">
          <div class="photo">
            <img v-for="(file,index) in blog.filelists" v-if="index==0" :src="file.address+file.fileName">
          </div>
          <div class="intro">
            <p @click="getBlog(blog.blogId)">{{blog.content}}</p>
          </div>
        </div>
       </div>
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "discover",
        data(){
          return{
            value:'',
            blogList: []
          }
        },
        methods:{
          search(){
            let _that=this;
            if(this.value!=""){
              axios.post("http://localhost:8088/blog/blogApi/queryByC",{content:this.value}).then(function(response){
                _that.blogList=response.data.blogs;
              })
            }
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

  .header {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #26a2ff;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 1;
    padding: 0 10px;
    position: relative;
    text-align: center;
    white-space: nowrap;
  }
  .shuru{
    width: 80%;
    border-radius: 15px;
    font-size: 20px;
    outline: none;
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
    height: 542.52px;
    padding: 0;
    margin: 0;
    overflow-y:auto;
    text-align:left;
  }
  .zhanshi{
    width: 100%;
    height: 120px;
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
