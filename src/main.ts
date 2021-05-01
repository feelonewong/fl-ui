import { createApp } from "vue";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import Doc from "./pages/Doc.vue";
import Home from "./pages/Home.vue";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    { path: "/doc", component: Doc },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
