import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Content-Type": "application/json",
  },
});

const postApi = async (payload) => {
  return await axiosInstance.post(payload.url, payload.params);
};

const getApi = async (payload) => {
  return await axiosInstance.post(payload.url, payload.params);
};

export { postApi };
