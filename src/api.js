import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
  },
});

const postApi = async (payload) => {
  try {
    const response = await axiosInstance.post(payload.url, payload.params);
    return response.data;
  } catch (error) {
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
