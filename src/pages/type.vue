<template>

  <div>
    <mt-header title="分类">
    </mt-header>
    <div class="dice">
      <ul>
        <li style="list-style:none" v-for="type in typeList"  @click="getBlog(type.typeId)"><img src="../assets/images/cate.png" alt=""><p>{{type.typeName}}</p></li>
      </ul>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "type",
        data(){
          return{
            typeList:''
          }
        },
        mounted() {
          this.getType();
        },
      methods:{
          //向java端发送请求获取JSON数据
          getType(){
            let _that=this;
            axios.get("http://localhost:8088/blog/type/find").then(function (response){
              console.log(response.data);
              _that.typeList=response.data.typeList;

            })
          },
          getBlog(req){
             localStorage.setItem("new_typeId",req);
             this.$router.push('/detail');
             console.log(localStorage.getItem("new_typeId"));

          }
      }
    }
</script>

<style scoped>
  mint-header{
    width: 100%;
  }
  .dice{
    height: 100px;
    padding-top: 15px;
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
    width: 50px;
    height: 50px;
    margin: auto;
  }

</style>
