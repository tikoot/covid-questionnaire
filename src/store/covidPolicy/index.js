export default {
  namespaced: true,
  state() {
    return {
      non_formal_meetings: "",
      number_of_days_from_office: null,
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
    };
  },
  mutations: {
    nonFormalMeetings(state, payload) {
      state.non_formal_meetings = payload;

      localStorage.setItem("non_formal_meetings", payload);
    },
    officeDays(state, payload) {
      state.number_of_days_from_office = Number(payload);

      localStorage.setItem("number_of_days_from_office", payload);
    },
    liveMeetings(state, payload) {
      state.what_about_meetings_in_live = payload;

      localStorage.setItem("what_about_meetings_in_live", payload);
    },
    userOpinion(state, payload) {
      state.tell_us_your_opinion_about_us = payload;

      localStorage.setItem("tell_us_your_opinion_about_us", payload);
    },
  },
  actions: {
    nonFormalMeetings(context, payload) {
      context.commit("nonFormalMeetings", payload);
    },
    officeDays(context, payload) {
      context.commit("officeDays", payload);
    },
    liveMeetings(context, payload) {
      context.commit("liveMeetings", payload);
    },
    userOpinion(context, payload) {
      context.commit("userOpinion", payload);
    },
  },
  getters: {
    nonFormalMeetings(state) {
      return state.non_formal_meetings;
    },
    officeDays(state) {
      return state.number_of_days_from_office;
    },
    liveMeetings(state) {
      return state.what_about_meetings_in_live;
    },
    userOpinion(state) {
      return state.tell_us_your_opinion_about_us;
    },
  },
};
