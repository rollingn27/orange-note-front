<template>
  <div :style="menuListStyle" class="menuListStyle">
    <ul>
      <li :style="firstliStyle" @click="createModal">CREATE</li>
      <li :style="liStyle" v-for="(item, idx) in projectList" :key="idx">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getProjectList();
  },

  data() {
    return {
      height: "3rem",
      projectList: ["Empty"],
      spanHeight: 1,
      liHeight: 2,
      margin: 0.5,
    };
  },
  computed: {
    menuListStyle() {
      let listSize = this.projectList.length;
      return {
        height:
          this.spanHeight +
          4 +
          (this.liHeight + this.margin * 2) * listSize +
          "rem",
        backgroundColor: "rgba(135, 206, 235)",
      };
    },

    liStyle() {
      return {
        all: "unset",
        margin: `${this.margin}rem 1.25rem`,
        height: this.liHeight + "rem",
        fontSize: "1.25rem",
        letterSpacing: "0.5rem",
        boxShadow: "0 2px 0px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
      };
    },
    firstliStyle() {
      return {
        all: "unset",
        margin: `1rem 1.25rem ${this.margin}rem 1.25rem`,
        height: this.liHeight + "rem",
        fontSize: "1.75rem",
        letterSpacing: "0.25rem",
        backgroundImage:
          "linear-gradient(to bottom, black 2px, transparent 2px)",
        backgroundPosition: "bottom",
        backgroundSize: "100% 1px",
        backgroundRepeat: "no-repeat",
        display: "inline-block",
        paddingBottom: "10px",
        cursor: "pointer",
        color: "green",
      };
    },
  },
  methods: {
    getProjectList() {},

    createModal() {
      this.$emit("open-create-modal");
    },
  },
};
</script>
<style lang="scss" scoped>
.menuListStyle {
  z-index: 2;
  margin-left: 2rem;
  border-radius: 5px;
  width: 11.5rem;

  ul {
    all: unset;
    display: flex;
    flex-direction: column;
  }
}
</style>
