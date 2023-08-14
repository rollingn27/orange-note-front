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
  deleteUserInfo(state) {
    state.userId = "";
  },
};

const actions = {
  async signIn({ commit }, payload) {
    const response = await postApi(payload);

    if (response.status == 200) {
      const signInfo = response.data.signInfo;
      commit("setAuthentication", signInfo);
      return { success: true };
    } else {
      return { success: false, errorMessage: response.data.message };
    }
  },

  signOut({ commit }) {
    localStorage.removeItem("vuex");
    commit("deleteUserInfo");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
