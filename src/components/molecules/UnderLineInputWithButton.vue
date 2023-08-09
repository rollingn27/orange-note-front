<!-- 로그인 팝업에 쓸 버튼 포함된 input라인  -->
<template>
  <div>
    <Input :placeholder="placeholderText" />
    <Button><slot name="buttonText">버 튼</slot></Button>
  </div>
</template>
<script>
import Input from "../atoms/Input.vue";
import Button from "../atoms/Button.vue";
export default {
  components: {
    Input,
    Button,
  },
  props: {
    placeholderText: {
      type: String,
      default: "test",
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
  button {
    background: rgb(156, 156, 235);
    margin: auto 0;
    border-radius: 5px;
    color: white;
    width: 5.75rem;
    padding: 0.25rem;
    text-align: center;
  }
  input {
    font-size: 1.25rem;
  }
}
</style>
