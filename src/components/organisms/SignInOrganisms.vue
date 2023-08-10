<template>
  <div class="signInWrap">
    <div class="header">
      <slot name="header">
        <div class="title"><h1>Orange Note</h1></div>
        <div>
          <h3>{{ typeText }}</h3>
        </div>
      </slot>
    </div>
    <div class="body">
      <slot name="body">
        <div>
          <UnderLineInput
            :placeholderText="'아이디'"
            :intputType="'text'"
          ></UnderLineInput>
        </div>
        <div>
          <UnderLineInput
            :placeholderText="'비밀번호'"
            :intputType="'password'"
          ></UnderLineInput>
        </div>
      </slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <div><SubmitButton :submitText="submitText"></SubmitButton></div>
        <div class="signChange">
          {{ signChangeText }}
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
import UnderLineInputWithButton from "../molecules/UnderLineInputWithButton.vue";
import UnderLineInput from "../molecules/UnderLineInput.vue";
import SubmitButton from "../molecules/SubmitButton.vue";
export default {
  props: {
    typeText: {
      type: String,
      default: "로그인",
    },
    signChangeText: {
      type: String,
      default: "회원가입",
    },
    submitText: {
      type: String,
      default: "로그인",
    },
  },
  components: {
    UnderLineInputWithButton,
    UnderLineInput,
    SubmitButton,
  },
};
</script>
<style lang="scss" scoped>
.signInWrap {
  width: 30rem;
  padding: 1.5rem 2.25rem;
  background: rgb(233, 238, 236);

  .title {
    text-align: center;
  }
  .header {
    margin-bottom: 1rem;
  }
  margin: 2.5rem;
  .body {
    display: flex;
    flex-direction: column;
  }
  .footer {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    button {
      font-size: 1.25rem;
    }
    .signChange {
      margin-top: 0.5rem;
      width: 100%;
      color: blue;
      text-align: right;
      text-decoration: underline;
      text-decoration-color: blue;
    }
  }
}
</style>
