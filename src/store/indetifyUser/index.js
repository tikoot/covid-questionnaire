export default {
  namespaced: true,
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  mutations: {
    firstName(state, payload) {
      state.first_name = payload;
      localStorage.setItem("first_name", payload);
    },
    lastName(state, payload) {
      state.last_name = payload;
      localStorage.setItem("last_name", payload);
    },
    email(state, payload) {
      state.email = payload;
      localStorage.setItem("email", payload);
    },
  },
  actions: {
    firstName(context, payload) {
      context.commit("firstName", payload);
    },
    lastName(context, payload) {
      context.commit("lastName", payload);
    },
    email(context, payload) {
      context.commit("email", payload);
    },
  },
  getters: {
    firstName(state) {
      return state.first_name;
    },
    lastName(state) {
      return state.last_name;
    },
    emailAddress(state) {
      return state.email;
    },
  },
};
