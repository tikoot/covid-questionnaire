import { createStore } from "vuex";

import userModule from "./indetifyUser/index.js";

const store = createStore({
  modules: {
    userModule,
  },
  state() {
    return {};
  },
  mutations: {},
  actions: {},
});

export default store;
