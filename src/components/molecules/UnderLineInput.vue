<!-- 로그인 팝업에 쓸 버튼 포함된 input라인  -->
<template>
  <div>
    <Input v-bind:placeholder="placeholderText" v-bind:type="intputType" />
  </div>
</template>
<script>
import Input from "../atoms/Input.vue";

export default {
  components: {
    Input,
  },
  props: {
    placeholderText: {
      type: String,
    },
    intputType: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(34, 33, 33);
  justify-content: space-between;
  height: 2.5rem;
  margin-bottom: 0.5rem;

  input {
    font-size: 1.25rem;
  }
}

</style>
