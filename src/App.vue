<template>
  <div>
   导航路由| <router-link to="/page1">页面1</router-link>|
   <router-link to="/page2">页面2</router-link>
   <router-view/>
  </div>
</template>

<script >
import Page1 from "./pages/page1.vue";
import Page2 from "./pages/page2.vue";
export default {
  // setup(){

  components: {
    Page1,
    Page2,
  },
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
