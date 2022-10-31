export default {
  namespaced: true,
  state() {
    return {
      had_covid: "",
      had_antibody_test: null,
      antibodies: {
        test_date: "",
        number: null,
      },
      covid_sickness_date: "",
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
    testDate(state, payload) {
      state.antibodies.test_date = payload;
      localStorage.setItem("test_date", payload);
    },
    antibodiesNumber(state, payload) {
      state.antibodies.number = payload;
      localStorage.setItem("antibodies_number", payload);
    },
    covidSickness(state, payload) {
      state.covid_sickness_date = payload;
      localStorage.setItem("covid_sickness_date", payload);
    },
  },
  actions: {
    hadCovid(context, payload) {
      context.commit("hadCovid", payload);
    },
    hadAntibodyTest(context, payload) {
      context.commit("hadAntibodyTest", payload);
    },
    testDate(context, payload) {
      context.commit("testDate", payload);
    },
    antibodiesNumber(context, payload) {
      context.commit("antibodiesNumber", payload);
    },
    covidSickness(context, payload) {
      context.commit("covidSickness", payload);
    },
  },
  getters: {
    hadCovid(state) {
      return state.had_covid;
    },
    hadAntibodyTest(state) {
      return state.had_antibody_test;
    },
    testDate(state) {
      return state.antibodies.test_date;
    },
    antibodiesNumber(state) {
      return state.antibodies.number;
    },
    covidSickness(state) {
      return state.covid_sickness_date;
    },
  },
};
