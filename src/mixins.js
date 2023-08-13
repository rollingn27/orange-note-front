export default {
  methods: {
    async $api(url, params, method) {
      return await axios({
        url,
        params,
        method: method,
      });
    },
    $debugLog(component, ...message) {
      console.log("##", component, " ##", ...message);
    },
    $submitButtonStatus(...inputTexts) {
      for (const inputText of inputTexts) {
        if (!inputText.trim()) return true;
      }
      return false;
    },
  },
};
