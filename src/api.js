import axios from "axios";
import store from "./store";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
  },
});

const postApi = async (payload) => {
  try {
    store.commit("setLoading", true);
    const response = await axiosInstance.post(payload.url, payload.params);
    store.commit("setLoading", false);
    return response.data;
  } catch (error) {
    store.commit("setLoading", false);
    if (error.response) {
      return {
        errorCode: error.response.status,
        errorMessage: error.response.data.error,
      };
    } else if (error.request) {
      return {
        errorCode: "NETWORK_ERROR",
        errorMessage: "Network request failed",
      };
    } else {
      return {
        errorCode: "UNKNOWN_ERROR",
        errorMessage: "An unknown error occurred",
      };
    }
  }
};

const getApi = async (payload) => {
  return await axiosInstance.post(payload.url, payload.params);
};

export { postApi };
