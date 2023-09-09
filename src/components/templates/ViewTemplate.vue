<template>
  <slot name="header">
    <Header />
  </slot>
  <div class="body">
    <slot name="body"></slot>
  </div>
  <slot name="footer"><Footer /></slot>
  <slot><LoadingBar v-if="this.$store.state.isLoading" /></slot>
</template>

<script>
import Header from "../organisms/Header.vue";
import Footer from "../organisms/Footer.vue";
import LoadingBar from "../organisms/common/LoadingBar.vue";
export default {
  components: {
    Header,
    Footer,
    LoadingBar,
  },
};
</script>
<style lang="scss" scoped>
.body {
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
