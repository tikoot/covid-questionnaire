import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/styles/index.css";
import "./config/vee-validate/rules";

import TheHeader from "./components/TheHeader.vue";
import TheButtons from "./components/TheButtons.vue";
import TheWrapper from "./components/TheWrapper.vue";

const app = createApp(App);

app.component("TheHeader", TheHeader);
app.component("TheButtons", TheButtons);
app.component("TheWrapper", TheWrapper);
app.use(store);
app.use(router);

app.mount("#app");
