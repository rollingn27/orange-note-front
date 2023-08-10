import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthenticated: false,
  },
  getters: {},
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
  },
  actions: {
    async signIn({ commit }, payload) {
      commit("setAuthentication", payload);
    },
  },
  modules: {},
});
