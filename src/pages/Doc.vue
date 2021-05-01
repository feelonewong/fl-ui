<template>
  <div class="layout">
    <Topnav class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch"> Switch组件 </router-link>
          </li>
          <li>
            <router-link to="/doc/button"> Button组件 </router-link>
          </li>
          <li>
            <router-link to="/doc/dialog"> Dialog组件 </router-link>
          </li>
          <li>
            <router-link to="/doc/tabs"> Tabs组件 </router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { inject } from "@vue/runtime-core";
import Topnav from "../components/Topnav.vue";
export default {
  components: {
    Topnav,
  },
  setup() {
    const menuVisible = inject("menuVisible");
    console.log("Doc页面的menuVisible", menuVisible);
    return {
      menuVisible,
    };
  },
};
</script>


<style scoped lang="scss">
.layout {
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-left: 154px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: lightgreen;
  }
}

aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 55px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
   padding: 4px 0;
}
main {
    margin-top: 58px;
  overflow-y: auto;
}
</style>