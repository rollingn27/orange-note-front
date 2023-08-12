const state = {
  isAuthenticated: false,
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
};

const mutations = {
  setAuthentication(state, status) {
    state.isAuthenticated = status;
  },
};

const actions = {
  async signIn({ commit }, payload) {
    commit("setAuthentication", payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
