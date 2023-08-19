<template>
  <div class="menuArea">
    <span>Project</span>
    <img src="@/assets/menu.png" @click.stop="openProjectList" />
  </div>
</template>
<script>
export default {
  methods: {
    openProjectList() {
      this.$emit("change");
    },
  },
};
</script>
<style lang="scss" scoped>
.menuArea {
  display: flex;
  height: 3rem;
  width: 12rem;
  background: linear-gradient(135deg, #00bfff, #0070f3, #00bfff, #0070f3);
  padding: 0 0.5rem 0 1rem;
  border-radius: 9px;
  span {
    font-weight: bold;
    font-size: 2rem;
    margin: auto;
    color: white;
  }
  img {
    width: 2rem;
    height: 2rem;
    margin: auto 0.5rem auto auto;
    cursor: pointer;
  }
}
</style>
