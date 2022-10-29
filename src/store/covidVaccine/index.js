export default {
  namespaced: true,
  state() {
    return {
      had_vaccine: null,
    };
  },
  mutations: {
    hadVaccine(state, payload) {
      if (payload === "true") {
        state.had_vaccine = true;
      } else {
        state.had_vaccine = false;
      }
      localStorage.setItem("had_vaccine", payload);
    },
  },
  actions: {
    hadVaccine(context, payload) {
      context.commit("hadVaccine", payload);
    },
  },
  getters: {
    hadVaccine(state) {
      return state.had_vaccine;
    },
  },
};
