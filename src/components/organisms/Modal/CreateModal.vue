<template>
  <div class="createModal">
    <div class="titleArea"><h1>Project create manager</h1></div>
    <div class="inputeArea">
      <div class="inputStyle">
        <div class="inputName">Project Name</div>
        <input class="innerInput" />
      </div>
      <div class="inputStyle">
        <div class="inputName">Add Member</div>
        <div class="innerDiv">
          <input />
          <ul>
            <li>n27kek@knou.ac.kr</li>
            <li>n27kek@knou.ac.kr</li>
            <li>n27kek@knou.ac.kr</li>
            <li>n27kek@knou.ac.kr</li>
          </ul>
        </div>
      </div>
      <div class="inputStyle">
        <div class="inputName">Description</div>
        <input class="innerInput" />
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
  background: rgb(200, 200, 200);
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

  .inputName {
    width: 8rem;
  }
}
.innerDiv {
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 3rem;

  input {
    all: unset;
    background: white;
    height: 3rem;
    border-radius: 5px;
    padding-left: 1.25rem;
    width: 28.86rem;
  }
  ul,
  li {
    all: unset;
  }
  ul {
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 16.5rem;
    background: white;
    border-radius: 5px;
    width: 30.2rem;
    color: rgba(0, 0, 0, 0.5);
  }
  li {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }
  li:hover {
    color: black;
  }
}
.innerInput {
  all: unset;
  background: white;
  width: 85%;
  height: 3rem;
  margin: 0 3rem;
  border-radius: 5px;
  padding-left: 1.25rem;
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
    margin: 0 3rem 1rem 0;
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
</style>
