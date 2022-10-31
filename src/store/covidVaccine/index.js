export default {
  namespaced: true,
  state() {
    return {
      had_vaccine: null,
      vaccination_stage: "",
      i_am_waiting: "",
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
    vaccineStage(state, payload) {
      state.vaccination_stage = payload;
      localStorage.setItem("vaccination_stage", payload);
    },
    waiting(state, payload) {
      state.i_am_waiting = payload;
      localStorage.setItem("i_am_waiting", payload);
    },
  },
  actions: {
    hadVaccine(context, payload) {
      context.commit("hadVaccine", payload);
    },
    vaccineStage(context, payload) {
      context.commit("vaccineStage", payload);
    },
    waiting(context, payload) {
      context.commit("waiting", payload);
    },
  },
  getters: {
    hadVaccine(state) {
      return state.had_vaccine;
    },
    vaccineStage(state) {
      return state.vaccination_stage;
    },
    waiting(state) {
      return state.i_am_waiting;
    },
  },
};
