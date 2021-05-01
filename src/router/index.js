import { createWebHashHistory, createRouter } from "vue-router";
import Doc from "../pages/Doc.vue";
import Home from "../pages/Home.vue";
//组件相关
import Switch from "../components/Switch.vue";
import Button from "../components/Button.vue";
import Tabs from "../components/Tabs.vue";
import Dialog from "../components/Dialog.vue";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    { 
        path: "/doc", 
        component: Doc, 
        children:[
            {path: "switch", component:Switch},
            {path: "dialog", component:Dialog},
            {path: "tabs", component:Tabs},
            {path: "button", component:Button}
        ]
    },
  ],
});

export {
    router
}
