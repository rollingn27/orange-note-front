<template>
  <div class="signBackground"></div>
  <div class="signInWrap">
    <div class="header">
      <slot name="header">
        <div class="title"><h1>Orange Note</h1></div>
        <div>
          <h3>{{ textProps.typeText }}</h3>
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
        <div>
          <SubmitButton :submitText="textProps.submitText"></SubmitButton>
        </div>
        <router-link to="/signUp">
          <div class="signChange">
            {{ textProps.signChangeText }}
          </div>
        </router-link>
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
    textProps: {
      type: Object,
      required: true,
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
.signBackground {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background: orange;
  filter: blur(99px);
  opacity: 0.9;
}
.signInWrap {
  width: 30rem;
  padding: 1.5rem 2.25rem;
  background: rgb(233, 238, 236);
  border-radius: 7px;
  box-shadow: 5px 5px 5px 5px rgb(235, 4, 4);
  z-index: 10;
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
      cursor: pointer;
    }
  }
}
</style>
