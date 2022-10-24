import { createStore } from "vuex";
import mutations from "./mutations";
import getters from "./getters";

import userModule from "./indetifyUser/index.js";

const store = createStore({
  modules: {
    userModule,
  },
  state() {
    return {};
  },
  mutations,
  getters,
});

export default store;
