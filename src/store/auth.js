import { postApi } from "@/api";
const state = {
  isAuthenticated: false,
  userId: "",
};

const getters = {};

const mutations = {
  setAuthentication(state, status) {
    state.isAuthenticated = true;
    state.userId = status.userId;
  },
};

const actions = {
  async signIn({ commit }, payload) {
    const response = await postApi(payload);
    try {
      if (response.status == 200) {
        const signInfo = response.data.signInfo;
        commit("setAuthentication", signInfo);
        return { success: true };
      } else {
        return { success: false, errorMessage: response.data.message };
      }
    } catch {
      return;
    }
  },

  signOut() {
    localStorage.removeItem("vuex");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
