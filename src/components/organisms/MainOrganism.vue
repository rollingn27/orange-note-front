<template>
  <div class="modalOpen" v-if="modalStatus"></div>
  <div class="wrap" @click.stop="changeShow">
    <div class="blankArea"></div>
    <div class="projectBox">
      <ProjectMenuBox @change="openProjectList" />
      <ProjectMenuList v-if="showList" @open-create-modal="openCreateModal" />
      <div class="margin-left" @click="openIssueModal">
        <img src="@/assets/plusIcon.png" />
      </div>
    </div>
    <div class="contentArea" :style="contentStyle">
      <IssueContainer :containerTitle="'시작전'" class="issueCantainer" />
      <IssueContainer :containerTitle="'진행중'" class="issueCantainer" />
      <IssueContainer :containerTitle="'완료'" class="issueCantainer" />
    </div>
  </div>
  <CreateModal v-if="createModal" @close-modal="closeModal" />
  <IssueModal v-if="issueModal" @close-modal="closeModal" />
</template>

<script>
import IssueContainer from "../molecules/IssueContainer.vue";
import ProjectMenuBox from "../molecules/ProjectMenuBox.vue";
import ProjectMenuList from "../molecules/ProjectMenuList.vue";
import CreateModal from "./Modal/CreateModal.vue";
import IssueModal from "./Modal/IssueModal.vue";

export default {
  components: {
    ProjectMenuBox,
    ProjectMenuList,
    IssueContainer,
    CreateModal,
    IssueModal,
  },
  methods: {
    openProjectList() {
      this.showList = !this.showList;
    },
    changeShow() {
      this.showList = false;
    },
    openCreateModal() {
      this.createModal = true;
      this.modalStatus = true;
    },
    closeModal() {
      this.modalStatus = false;
      this.createModal = false;
      this.issueModal = false;
    },
    openIssueModal() {
      this.issueModal = true;
      this.modalStatus = true;
    },
  },
  computed: {
    contentStyle() {
      if (this.showList) {
        return {
          opacity: "0.8",
        };
      } else {
        return {
          opacity: "1",
        };
      }
    },
  },
  data() {
    return {
      showList: false,
      opacity: 1,
      modalStatus: false,
      createModal: false,
      issueModal: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.modalOpen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: white;
  opacity: 0.7;
}
.projectBox {
  display: flex;
  height: 3rem;
}
.margin-left {
  margin-left: auto;
  position: relative;
  top: -1rem;
  right: -1rem;
  img {
    width: 2.75rem;
    height: 2.75rem;
  }
  cursor: pointer;
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
    justify-content: center;
    .issueCantainer {
      flex: 1;
    }
    height: 40rem;
    overflow-y: auto;
  }
}
</style>
