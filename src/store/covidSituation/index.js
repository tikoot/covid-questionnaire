export default {
  namespaced: true,
  state() {
    return {
      had_covid: "",
      had_antibody_test: null,
    };
  },
  mutations: {
    hadCovid(state, payload) {
      state.had_covid = payload;
      localStorage.setItem("had_covid", payload);
    },
    hadAntibodyTest(state, payload) {
      if (payload === "true") {
        state.had_antibody_test = true;
      } else {
        state.had_antibody_test = false;
      }
      localStorage.setItem("had_antibody_test", payload);
    },
  },
  actions: {
    hadCovid(context, payload) {
      context.commit("hadCovid", payload);
    },
    hadAntibodyTest(context, payload) {
      context.commit("hadAntibodyTest", payload);
    },
  },
  getters: {
    hadCovid(state) {
      return state.had_covid;
    },
  },
};
