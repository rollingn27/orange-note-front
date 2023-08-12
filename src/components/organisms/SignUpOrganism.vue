<template>
  <div class="signBackground"></div>
  <div class="signInWrap">
    <div class="header">
      <slot name="header">
        <div class="title"><h1>Orange Note</h1></div>
      </slot>
    </div>
    <div class="body">
      <slot name="body">
        <div class="inputWithButton">
          <Input
            :placeholderText="'아이디'"
            :intputType="'text'"
            v-model="joinForm.id"
            inputFontSize="1.25rem"
          />
          <Button>중복확인</Button>
        </div>
        <div class="inputWithButton">
          <Input
            :placeholderText="'email'"
            :intputType="'text'"
            v-model="joinForm.email"
            inputFontSize="1.25rem"
          />
          <Button>이메일인증</Button>
        </div>
        <div class="inputWrap">
          <Input
            :placeholderText="'비밀번호'"
            :intputType="'password'"
            v-model="joinForm.password"
            inputFontSize="1.25rem"
          />
        </div>
        <div class="inputWrap">
          <Input
            :placeholderText="'비밀번호확인'"
            :intputType="'password'"
            v-model="joinForm.passwordCheck"
            inputFontSize="1.25rem"
          />
        </div>
      </slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <div>
          <SubmitButton
            :submitText="textProps.submitText"
            @click="clickButton"
          ></SubmitButton>
        </div>
        <router-link to="/signIn">
          <div class="signChange">
            {{ textProps.signChangeText }}
          </div>
        </router-link>
      </slot>
    </div>
  </div>
</template>
<script>
import SubmitButton from "../molecules/SubmitButton.vue";
import Button from "../atoms/Button.vue";
import Input from "../atoms/Input.vue";
import mixins from "@/mixins";
export default {
  props: {
    textProps: {
      type: Object,
      required: true,
    },
  },
  components: {
    Input,
    SubmitButton,
    Button,
  },
  mixins: [mixins],
  methods: {
    clickButton() {
      this.$debugLog("SignUpOrganism", JSON.stringify(this.joinForm));
    },
  },
  data() {
    return {
      joinForm: {
        id: "",
        email: "",
        password: "",
        passwordCheck: "",
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.inputWrap {
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(34, 33, 33);
  justify-content: space-between;
  height: 2.5rem;
  margin-bottom: 0.5rem;
}
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
  .inputWithButton {
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
      flex: 1;
    }
  }
}
</style>