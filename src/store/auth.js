import { postApi } from "@/api";

const state = {
  isAuthenticated: false,
  userId: "",
  emailConfirmText: "",
};

const getters = {};

const mutations = {
  setAuthentication(state, status) {
    state.isAuthenticated = true;
    state.userId = status.userId;
  },
  emailConfirm(state, status) {
    state.emailConfirmText = status.emailConfirmText;
  },
};

const actions = {
  async $signIn({ commit }, payload) {
    const response = await postApi(payload);

    if (response.success) {
      commit("setAuthentication", response.data);
      return { success: true };
    } else {
      return { success: false, errorMessage: response.errorMessage };
    }
  },

  $signOut() {
    localStorage.removeItem("vuex");
  },

  async $idCheck(payload) {
    const response = await postApi(payload);

    if (response.success) {
      return { success: true };
    } else {
      return { success: false, errorMessage: response.errorMessage };
    }
  },

  async $emailCheck({ commit }, payload) {
    const response = await postApi(payload);

    if (response.success) {
      // commit("emailConfirm", response.data);
      return { success: true };
    } else {
      return { success: false, errorMessage: response.errorMessage };
    }
  },
  async $signUp(payload) {
    const response = await postApi(payload);
    if (response.success) {
      return { success: true };
    } else {
      return { success: false, errorMessage: response.errorMessage };
    }
  },
  async $emailConfirm({ commit }, payload) {
    const response = await postApi(payload);
    if (response.success) {
      return { success: true };
    } else {
      return { success: false, errorMessage: response.errorMessage };
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
