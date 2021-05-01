<template>
   <router-view/>
</template>

<script >
import { ref, provide } from "vue";
import {router} from "./router/index";
export default {
  setup(){
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width<=500?false:true);
    provide("menuVisible", menuVisible )
    router.beforeEach(()=>{
      if(width<=500){
        menuVisible.value = false;
      }
    })
    return {
      menuVisible
    } 
  }
};
</script>

<style>

 * {
   margin: 0;
   padding: 0;
 }
</style>
