export default {
  methods: {
    $debugLog(component, ...message) {
      console.log("##", component, " ##", ...message);
    },
    $submitButtonStatus(...inputTexts) {
      for (const inputText of inputTexts) {
        if (typeof inputText === "string") {
          if (!inputText.trim()) return true;
        } else {
          if (!inputText) return true;
        }
      }
      return false;
    },
  },
};
