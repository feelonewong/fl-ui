import { createApp } from "vue";
import App from "./App.vue";
import {router} from "./router/index";
import "./index.scss";

import "./lib/fl.scss";
const app = createApp(App);
app.use(router);
app.mount("#app");
