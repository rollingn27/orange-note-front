<template>
  <input :placeholder="formattedTime" v-model="confirmCode" />
</template>
<script>
export default {
  data() {
    return {
      isCounting: false,
      remainingSeconds: 180,
      countdownTimer: null,
      confirmCode: "",
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    },
  },
  mounted() {
    this.startCountdown();
  },
  watch: {
    isCounting(newValue) {
      if (newValue) {
        this.countdownTimer = setInterval(() => {
          if (this.remainingSeconds > 0) {
            this.remainingSeconds--;
          } else {
            clearInterval(this.countdownTimer);
            this.isCounting = false;
          }
        }, 1000);
      } else {
        clearInterval(this.countdownTimer);
      }
    },
  },
  methods: {
    startCountdown() {
      this.isCounting = true;
    },
  },
  beforeDestroy() {
    clearInterval(this.countdownTimer);
  },
};
</script>
