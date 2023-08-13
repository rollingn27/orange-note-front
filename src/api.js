import axios from "axios";
axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

const api = async (payload) => {
  return await axios({
    url: payload.url,
    params: payload.params,
    method: payload.method,
  });
};

export { api };
