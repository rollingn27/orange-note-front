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
        <div class="inputWithButton">
          <Input
            :placeholderText="'아이디'"
            :inputType="'text'"
            v-model="joinForm.id"
            inputFontSize="1.25rem"
            @input="checkInput"
            ref="input1"
          />

          <Button @click.stop="idCheck" v-if="!idCheckStatus">중복확인</Button>
          <img v-else src="@/assets/checkIcon.png" />
        </div>

        <AlertDialog :message="alertMessage" @close="closeAlertDialog" />

        <div class="inputWithButton">
          <Input
            :placeholderText="'email'"
            :inputType="'text'"
            v-model="joinForm.email"
            inputFontSize="1.25rem"
            @input="checkInput"
            ref="input2"
          />
          <Button @click.stop="emailCheck" v-if="!emailCheckStatus">
            {{ emailCheckText }}
          </Button>
          <img v-else src="@/assets/checkIcon.png" />
        </div>
        <AlertDialog :message="emailAlertMessage" @close="closeAlertDialog" />
        <div class="emailWaiting" v-if="emailWaiting">
          <div></div>
          <div>인증번호입력 :</div>
          <InputTimer v-model="emailCheckCode" />
          <Button @click.stop="emailConfirm">확인</Button>
        </div>
        <AlertDialog :message="confirmAlertMessage" @close="closeAlertDialog" />
        <div class="inputWrap">
          <Input
            :placeholderText="'비밀번호'"
            :inputType="'password'"
            v-model="joinForm.password"
            inputFontSize="1.25rem"
            @input="checkInput"
            ref="input3"
          />
        </div>
        <div class="inputWrap">
          <Input
            :placeholderText="'비밀번호확인'"
            :inputType="'password'"
            v-model="joinForm.passwordCheck"
            inputFontSize="1.25rem"
            @input="checkInput"
            ref="input4"
          />
        </div>
        <AlertDialog
          :message="passwordCheckAlertMessage"
          @close="closeAlertDialog"
        />
      </slot>
    </div>
    <div class="footer">
      <slot name="footer">
        <div>
          <SubmitButton
            :submitText="textProps.submitText"
            @click="signUp"
            :disabled="buttonDisabled"
          ></SubmitButton>
        </div>
        <div class="signChange">
          <div>
            <router-link to="/signIn">
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
import Button from "../atoms/Button.vue";
import Input from "../atoms/Input.vue";
import mixins from "@/mixins";
import AlertDialog from "./AlertDialog.vue";
import { mapActions, mapState } from "vuex";
import InputTimer from "../molecules/InputTimer.vue";

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
    AlertDialog,
    InputTimer,
  },
  mixins: [mixins],
  computed: {
    
    emailCheckText: function () {
      return this.emailWaiting ? "재전송" : "이메일인증";
    },
  },
  methods: {
    ...mapActions("auth", [
      "$idCheck",
      "$signUp",
      "$emailConfirm",
      "$emailCheck",
    ]),

    async signUp() {
      if (this.joinForm.password != this.joinForm.passwordCheck) {
        this.passwordCheckAlertMessage = "비밀번호가 일치하지 않습니다.";
        this.joinForm.password = "";
        this.$refs.input3.inputTextClear();
        this.joinForm.passwordCheck = "";
        this.$refs.input4.inputTextClear();
        this.$refs.input3.$el.focus();
        return;
      }

      const payload = {
        url: "/user/signUp",
        params: this.joinForm,
      };

      const result = await this.$signUp(payload);
      this.loginForm = Object.assign({}, this.initialJoinForm);
      this.$refs.input1.inputTextClear();
      this.$refs.input2.inputTextClear();
      this.$refs.input3.inputTextClear();
      this.$refs.input4.inputTextClear();
      this.checkInput();

      if (result.success) {
        this.$router.push("/signIn");
      } else {
        this.passwordCheckAlertMessage = result.errorMessage;
      }
    },
    checkInput() {
      this.buttonDisabled = this.$submitButtonStatus(
        this.joinForm.id,
        this.joinForm.email,
        this.joinForm.password,
        this.joinForm.passwordCheck,
        this.idCheckStatus,
        this.emailCheckStatus
      );
    },
    async emailCheck() {
      if (!this.joinForm.email.trim()) {
        this.emailAlertMessage = "email을 입력하세요";
        return;
      }

      if (!this.isValidEmail(this.joinForm.email)) {
        this.emailAlertMessage = "email형식이 올바르지 않습니다.";
        this.joinForm.email = "";
        this.$refs.input2.inputTextClear();
        return;
      }

      let params = new Object();
      params.email = this.joinForm.email;
      const payload = {
        url: "/user/emailCheck",
        params: params,
      };

      const result = await this.$emailCheck(payload);
      

      if (result.success) {     
        this.emailWaiting = false;        
        this.$nextTick(() => {             
          this.emailWaiting = true;        
        })
        
      } else {
        this.emailAlertMessage = result.errorMessage;
        this.joinForm.email = "";
        this.$refs.input2.inputTextClear();
      }
      this.checkInput();
    },
    isBlankInput(inputText) {
      if (inputText.includes(" ")) {
        return true;
      }
      return false;
    },
    isValidEmail(email) {
      let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    },
    async idCheck() {
      if (!this.joinForm.id.trim()) {
        this.alertMessage = "id를 입력하세요";
        return;
      }

      if (this.isBlankInput(this.joinForm.id)) {
        this.alertMessage = "id에 공백문자가 있습니다.";
        this.joinForm.id = "";
        this.$refs.input1.inputTextClear();
        return;
      }

      let params = new Object();
      params.id = this.joinForm.id;
      const payload = {
        url: "/user/idCheck",
        params: params,
      };

      const result = await this.$idCheck(payload);
      if (result.success) {
        this.idCheckStatus = true;
        this.$refs.input2.$el.focus();
      } else {
        this.joinForm.id = "";
        this.$refs.input1.inputTextClear();
        this.alertMessage = result.errorMessage;
      }
    },
    closeAlertDialog() {
      this.alertMessage = "";
      this.emailAlertMessage = "";
      this.confirmAlertMessage = "";
      this.passwordCheckAlertMessage = "";
    },
  
    async emailConfirm() {
      if (!this.emailCheckCode.trim()) {
        this.confirmAlertMessage = "인증번호를 입력하세요.";
        return;
      }

      let params = new Object();
      params.emailCheckCode = this.emailCheckCode;
      const payload = {
        url: "/user/emailConfirm",
        params: params,
      };

      const result = await this.$emailConfirm(payload);
      this.emailCheckCode = "";

      if (result.success) {
        this.emailCheckStatus = true;
        this.emailWaiting = false;
        this.$refs.input3.$el.focus();
      } else {
        this.confirmAlertMessage = result.errorMessage;
      }
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
      initialJoinForm: {
        id: "",
        email: "",
        password: "",
        passwordCheck: "",
      },
      buttonDisabled: true,
      alertMessage: "",
      emailAlertMessage: "",
      confirmAlertMessage: "",
      passwordCheckAlertMessage: "",
      idCheckStatus: false,
      emailCheckStatus: false,
      emailWaiting: false,
      emailCheckCode: "",
      
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
.emailWaiting {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 2.5rem;
  margin-bottom: 0.5rem;
  div {
    flex: 1;
    margin: auto;
    font-weight: bold;
  }
  input {
    all: unset;
    border: 1px solid gray;
    border-radius: 5px;
    padding-right: 0.75rem;
    text-align: right;
    width: 7.5rem;
    margin-right: 0.5rem;
  }

  input:focus {
    outline: none;
  }
  button {
    background: rgb(111, 111, 145);
    margin: auto 0;
    border-radius: 5px;
    color: white;
    height: 1.5rem;
    padding: 0.25rem 0.5rem;
    text-align: center;
  }
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
    img {
      padding: 0.25rem;
      width: 1.75rem;
      height: 1.75rem;
    }
  }
}
</style>
