import { createStore } from "vuex";

import userModule from "./indetifyUser/index.js";
import situationModule from "./covidSituation/index.js";

const store = createStore({
  modules: {
    userModule,
    situationModule,
  },
  state() {
    return {};
  },
  mutations: {},
  actions: {},
});

export default store;
