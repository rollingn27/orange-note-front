<template>
  <div class="alert" v-if="!!message">
    <div class="message">{{ message }}</div>
    <div class="xIcon">
      <img src="@/assets/xIcon.png" @click.stop="closeAlert" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  methods: {
    closeAlert() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.alert {
  background-color: #f5f5b5;
  padding: 0.25rem 1rem 0.25rem 1.5rem;
  display: flex;
  flex-direction: row;
  width: 27.5rem;
  height: 3.5rem;
  border-radius: 15px;

  .message {
    flex: 10;
    font-size: 1.25rem;
    margin: auto;
    color: red;
  }
  .xIcon {
    margin: auto;
  }
  img {
    width: 3rem;
    height: 3rem;
  }
}
</style>
