import { postApi } from "@/api";

const state = {};

const getters = {};

const mutations = {};

const actions = {
  async $emailSearch({ commit }, payload) {
    const response = await postApi(payload);
    let returnData = new Object();

    if (response.success) {
      returnData.success = true;
      returnData.data = response.data;
    } else {
      returnData.success = false;
      returnData.errorMessage = response.data;
    }

    return returnData;
  },

  async $createProject({ commit }, payload) {
    const response = await postApi(payload);
    let returnData = new Object();

    if (response.success) {
      returnData.success = true;
      returnData.data = response.data;
    } else {
      returnData.success = false;
      returnData.errorMessage = response.data;
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
