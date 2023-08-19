<template>
  <div class="createModal">
    <div class="titleArea"><h1>Issue Create</h1></div>
    <div class="inputeArea">
      <div class="inputStyle">
        <div class="inputName">Issue Name</div>
        <input />
      </div>
      <div class="inputStyle">
        <div class="inputName">Content</div>
        <input />
      </div>
      <div class="inputStyle">
        <div class="inputName">Assignee</div>
        <input />
      </div>
      <div class="inputStyle imgStyle">
        <div class="inputName">Priority</div>
        <input />
        <img src="@/assets/doubledown.png" class="imgDropDown" />
      </div>
      <div class="submitStyle">
        <div class="cancel" @click="closeModal">Cancel</div>
        <div class="create">Create</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close-modal");
    },
  },
};
</script>
<style lang="scss" scoped>
.createModal {
  z-index: 11;
  position: fixed;
  top: 12rem;
  width: 45rem;
  margin: auto;
  background: #fff8e7;
  display: flex;
  flex-direction: column;
  border-radius: 9px;
}
.titleArea {
  margin: 0.5rem auto 1rem;
}
.inputStyle {
  display: flex;
  height: 3rem;
  margin: 0 0 3rem 2.5rem;
  align-items: center;
  font-size: 1.25rem;
  input {
    all: unset;
    background: white;
    width: 85%;
    height: 3rem;
    margin: 0 3rem;
    border-radius: 5px;
    padding-left: 1.25rem;
  }
  div {
    width: 8rem;
  }
}
.submitStyle {
  display: flex;
  width: 100%;
  position: relative;
  top: -1rem;
  justify-content: flex-end;
  .create,
  .cancel {
    background: #a29bfe;
    width: 10rem;
    height: 2.5rem;
    margin: 0 2rem 1rem 0;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    border-radius: 7px;
    letter-spacing: 4px;
    cursor: pointer;
  }
  .cancel {
    background: green;
  }
  div:hover {
    opacity: 0.7;
  }
}
.imgDropDown {
  position: absolute;
  top: 50%;
  right: 3.75rem; /* 이미지 우측 여백 조절 */
  transform: translateY(-50%);
  width: 1.25rem; /* 이미지 너비 조절 */
  height: 1.25rem; /* 이미지 높이 조절 */
  cursor: pointer;
}
.imgStyle {
  position: relative;
}
</style>
