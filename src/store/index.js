import { createStore } from "vuex";

import userModule from "./indetifyUser/index.js";
import situationModule from "./covidSituation/index.js";
import vaccineModule from "./covidVaccine/index.js";
import policyModule from "./covidPolicy/index.js";

const store = createStore({
  modules: {
    userModule,
    situationModule,
    vaccineModule,
    policyModule,
  },
  state() {
    return {};
  },
  mutations: {},
  actions: {},
});

export default store;
