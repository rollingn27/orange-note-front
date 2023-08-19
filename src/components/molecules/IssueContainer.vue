<template>
  <div class="issueContainer">
    <div class="titleBox">
      <h1>{{ containerTitle }}</h1>
    </div>
    <div>
      <Issue v-for="(issue, idx) in issueList" :key="idx" :issue="issue" />
    </div>
  </div>
</template>
<script>
import Issue from "./Issue.vue";
export default {
  components: { Issue },
  props: {
    containerTitle: {
      type: String,
      default: "시작전",
    },
  },
  data() {
    return {
      issueList: [],
    };
  },
  mounted() {
    this.issueList = ["이슈", "이슈", "이슈"];
  },
};
</script>
<style lang="scss" scoped>
.issueContainer {
  display: flex;
  border: 1px soild black;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}
</style>
