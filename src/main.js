import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./assets/styles/index.css";
import "./config/vee-validate/rules";

import TheHeader from "./components/TheHeader.vue";
import ForwardButton from "./components/buttons/ForwardButton.vue";
import BackButton from "./components/buttons/BackButton.vue";
import TheWrapper from "./components/TheWrapper.vue";

const app = createApp(App);

app.component("TheHeader", TheHeader);
app.component("ForwardButton", ForwardButton);
app.component("BackButton", BackButton);
app.component("TheWrapper", TheWrapper);
app.use(store);
app.use(router);

app.mount("#app");
