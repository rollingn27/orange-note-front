<!-- 인풋 스타일 초기화 -->
<template>
  <input
    v-bind:placeholder="placeholderText"
    v-bind:type="intputType"
    v-model="inputText"
    :style="{ fontSize: inputFontSize, width: inputWidth }"
  />
</template>
<script>
export default {
  data() {
    return {
      fontSize: "1rem",
      inputText: "",
    };
  },
  methods: {
    inputTextClear() {
      this.inputText = "";
    },
  },
  props: {
    placeholderText: {
      type: String,
      required: true,
    },
    intputType: {
      type: String,
      required: true,
    },
    inputFontSize: {
      type: String,
      default: "1rem",
    },
    inputWidth: {
      type: String,
      default: "100%",
    },
  },
};
</script>
<style lang="scss" scoped>
input {
  all: unset;
}

input:focus {
  outline: none;
}
</style>
