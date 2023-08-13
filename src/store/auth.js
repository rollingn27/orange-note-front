import { api } from "@/api";
const state = {
  isAuthenticated: false,
  user: "",
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};

const mutations = {
  setAuthentication(state, status) {
    state.isAuthenticated = status.isAuthenticated;
    state.user = status.user;
  },
};

const actions = {
  async signIn({ commit }, payload) {
    const response = await api(payload);
    if (response.status == 200) {
      commit("setAuthentication", response.data);
      return { success: true };
    } else {
      return { success: false };
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
