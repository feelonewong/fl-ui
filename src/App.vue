<template>
   <router-view/>
</template>

<script >
import Page1 from "./pages/Home.vue";
import Page2 from "./pages/Doc.vue";
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

 * {
   margin: 0;
   padding: 0;
 }
</style>
