<template>
  <div id="app">
    <router-view/>
    <footerbar v-if="$route.meta.bool!=true"></footerbar>
  </div>
</template>

<script>
import Footer from '@/components/FooterBar'
export default {
  name: 'App',
  components:{
    'footerbar': Footer
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
