import { postApi } from "@/api";

const state = {
  isAuthenticated: false,
  userName: "",
};

const getters = {};

const mutations = {
  setAuthentication(state, status) {
    state.isAuthenticated = true;
    state.userName = status.userName;
  },
};

const actions = {
  async signIn({ commit }, payload) {
    const response = await postApi(payload);

    if (response.status == 200) {
      if (response.result == "success") {
        const signInfo = response.signInfo;
        commit("setAuthentication", signInfo);
        return { success: true };
      } else {
        return { success: false, errorMessage: response.errorMessage };
      }
    } else {
      return { success: false, errorMessage: response.errorMessage };
    }
  },

  signOut() {
    localStorage.removeItem("vuex");
  },

  async $idCheck(payload) {
    const response = await postApi(payload);
    try {
      if (response.status == 200) {
        return { success: true };
      } else {
        return { success: false, errorMessage: response.data.message };
      }
    } catch {
      return;
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
