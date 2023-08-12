<!-- 로그인 전송 버튼 -->
<template>
  <Button>{{ submitText }}</Button>
</template>
<script>
import Button from "../atoms/Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    submitText: {
      type: String,
      default: "전송",
    },
  },
};
</script>
<style lang="scss" scoped>
button {
  display: flex;
  background: purple;
  border-radius: 5px;
  color: white;
  width: 100%;
  height: 2.5rem;
  letter-spacing: 10px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
button:disabled {
  opacity: 1;
  cursor: not-allowed;
}
</style>
