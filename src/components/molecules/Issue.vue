<template>
  <div class="issue">{{ issue }}</div>
</template>
<script>
export default {
  props: {
    issue: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.issue {
  width: 27.5rem;
  height: 20rem;
  margin: 0 2rem 2rem 2rem;
  background: linear-gradient(to bottom right, #cccccc, #ff9900);
  border-radius: 5px;
  opacity: 0.8;
}
.issue:hover {
  opacity: 1;
  cursor: pointer;
}
</style>
