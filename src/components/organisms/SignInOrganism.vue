<template>
  <div class="signBackground" @click="closeAlertDialog"></div>
  <div class="signInWrap" @click="closeAlertDialog">
    <div class="header">
      <slot name="header">
        <div class="title"><h1>Orange Note</h1></div>
      </slot>
    </div>
    <div class="body">
      <slot name="body">
        <div class="inputWrap">
          <Input
            :placeholderText="'아이디'"
            :inputType="'text'"
            v-model="loginForm.id"
            inputFontSize="1.25rem"
            ref="input1"
            @input="checkInput"
          />
        </div>
        <div class="inputWrap">
          <Input
            :placeholderText="'비밀번호'"
            :inputType="'password'"
            v-model="loginForm.password"
            inputFontSize="1.25rem"
            ref="input2"
            @input="checkInput"
          />
        </div>
      </slot>
    </div>
    <AlertDialog :message="alertMessage" @close="closeAlertDialog" />
    <div class="footer">
      <slot name="footer">
        <div>
          <SubmitButton
            :submitText="textProps.submitText"
            @click="clickSignIn"
            :disabled="buttonDisabled"
          />
        </div>

        <div class="signChange">
          <div>
            <router-link to="/signUp">
              {{ textProps.signChangeText }}
            </router-link>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>
<script>
import SubmitButton from "../molecules/SubmitButton.vue";
import Input from "../atoms/Input.vue";
import mixins from "@/mixins";
import { mapActions } from "vuex";
import AlertDialog from "./AlertDialog.vue";

export default {
  props: {
    textProps: {
      type: Object,
      required: true,
    },
  },
  mixins: [mixins],
  components: {
    SubmitButton,
    Input,
    AlertDialog,
  },

  data() {
    return {
      loginForm: {
        id: "",
        password: "",
      },
      initialForm: {
        id: "",
        password: "",
      },
      buttonDisabled: true,
      alertMessage: "",
    };
  },
  methods: {
    ...mapActions("auth", ["$signIn"]),

    async clickSignIn() {
      const payload = {
        url: "/user/signIn",
        params: this.loginForm,
      };

      const result = await this.$signIn(payload);
      this.loginForm = Object.assign({}, this.initialForm);
      this.$refs.input1.inputTextClear();
      this.$refs.input2.inputTextClear();
      this.checkInput();

      if (result.success) {
        this.$router.push("/");
      } else {
        this.alertMessage = result.errorMessage;
      }
    },
    checkInput() {
      this.buttonDisabled = this.$submitButtonStatus(
        this.loginForm.id,
        this.loginForm.password
      );
    },
    closeAlertDialog() {
      this.alertMessage = "";
    },
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
      a {
        cursor: pointer;
      }

      a:focus {
        outline: none;
      }
    }
  }
}
</style>
