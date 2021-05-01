import { createApp } from "vue";
import App from "./App.vue";
import { createWebHashHistory, createRouter } from "vue-router";
import Page1 from "./pages/page1.vue";
import Page2 from "./pages/page2.vue";
const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/page1", component: Page1 },
    { path: "/page2", component: Page2 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
