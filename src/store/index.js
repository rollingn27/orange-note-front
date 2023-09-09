import { createStore } from "vuex";
import auth from "./auth";
import project from "./project";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state: {
    isLoading: false,
  },
  mutations: {
    setLoading(state, status) {
      state.isLoading = status;
    },
  },
  modules: { auth, project },
  // 모든 상태 로컬 스토리지 저장
  // plugins: [createPersistedState()],
  plugins: [
    createPersistedState({
      paths: ["auth"],
    }),
  ],
});

export default store;
