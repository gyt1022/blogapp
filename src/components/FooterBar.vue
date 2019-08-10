<template>
  <div id="tab-bar">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="main">
        <img slot="icon" v-if="selected=='main'" src="../assets/images/shouye.png">
        <img slot="icon" v-if="selected!='main'" src="../assets/images/shouye2.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="discover">
        <img slot="icon" v-if="selected=='discover'" src="../assets/images/faxian.png">
        <img slot="icon" v-if="selected!='discover'" src="../assets/images/faxian2.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="type">
        <img slot="icon" v-if="selected=='type'" src="../assets/images/feilei.png">
        <img slot="icon" v-if="selected!='type'" src="../assets/images/fenlei2.png">
        分类
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" v-if="selected=='mine'" src="../assets/images/wode.png">
        <img slot="icon" v-if="selected!='mine'" src="../assets/images/wode2.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    export default {
        name: "FooterBar",
      data () {
        return {
          selected: ''
        }
      },
      created(){
          this.judge()
      },
      methods:{
          judge(){
            if(window.localStorage.getItem("selected")==null){
                this.selected="main"
            }else{
                this.selected=window.localStorage.getItem("selected");
            }
          }

      },
      watch:{
          'selected':{
            handler(){
              if(this.selected=='main'){
                window.localStorage.setItem("selected","main");
                this.$router.push('/main');
              }
              if(this.selected=='discover'){
                window.localStorage.setItem("selected","discover");
                this.$router.push('/discover');
              }
              if(this.selected=='type'){
                window.localStorage.setItem("selected","type");
                this.$router.push('/type');
              }
              if(this.selected=='mine'){
                window.localStorage.setItem("selected","mine");
                this.$router.push('/mine');
              }
            }

          }
      }
    }
</script>

<style scoped>
</style>
