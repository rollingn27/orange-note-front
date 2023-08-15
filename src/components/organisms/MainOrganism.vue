<template>
  <div class="wrap">
    <div class="blankArea"></div>
    <div class="projectBox">
      <ProjectMenuBox @change="openProjectList" />
      <div v-if="showList">ㅇㅇ</div>
    </div>
    <div class="contentArea">
      <div>시작전</div>
      <div>진행중</div>
      <div>완료</div>
    </div>
    <div class="buttonArea">+</div>
  </div>
</template>

<script>
import ProjectMenuBox from "../molecules/ProjectMenuBox.vue";
export default {
  components: {
    ProjectMenuBox,
  },
  methods: {
    openProjectList() {
      this.showList = !this.showList;
    },
  },
  data() {
    return {
      showList: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.projectBox {
  display: flex;
}
.wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 5rem;
  .blankArea {
    height: 5rem;
  }
  .contentArea {
    display: flex;
  }
}
</style>
