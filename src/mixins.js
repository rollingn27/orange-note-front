import axios from "axios";
axios.defaults.baseURL = "http://localhost:8081";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default {
  methods: {
    async $api(url, params, method) {
      return (
        await axios({
          method: method,
          url,
          params,
        }).catch((e) => {
          console.log(e);
        })
      ).data;
    },
    $debugLog(component, ...message) {
      console.log("##", component, " ##", ...message);
    },
  },
};
