<template>
  <div class="index-main">
    <mt-header :title="type.typeName" >
      <router-link to="/type" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
  <div class="gz-item">
      <div class="zhanshi" v-for="blog in blogList">
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
        name: "detail",
        data(){
          return{
            blogList:[],
            type:'',
          }
        },
      created(){
          this.getBlogType();
          this.getBlogList();
      },
        methods:{
          getBlogType(){
            console.log(localStorage.getItem("new_typeId"));
            let _that=this;
            axios.post("http://localhost:8088/blog/type/findById",{typeId : localStorage.getItem("new_typeId")}).then(function (response) {
              _that.type=response.data.type;
              console.log(response.data)
            })
          },
          getBlogList(){
            console.log(localStorage.getItem("new_typeId"));
            let _that=this;
            axios.post("http://localhost:8088/blog/blogApi/querybytype",{typeId : localStorage.getItem("new_typeId")}).then(function (response) {
              _that.blogList=response.data.blogs;
              console.log(response.data)
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
