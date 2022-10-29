export default {
  namespaced: true,
  state() {
    return {
      had_covid: "",
    };
  },
  mutations: {
    hadCovid(state, payload) {
      state.had_covid = payload;
      localStorage.setItem("had_covid", payload);
    },
  },
  actions: {
    hadCovid(context, payload) {
      context.commit("hadCovid", payload);
    },
  },
  getters: {
    hadCovid(state) {
      return state.had_covid;
    },
  },
};
