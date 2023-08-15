<template>
  <slot name="header">
    <Header />
  </slot>
  <div class="body">
    <slot name="body"></slot>
  </div>
  <slot name="footer"><Footer /></slot>
</template>

<script>
import Header from "../organisms/Header.vue";
import Footer from "../organisms/Footer.vue";
export default {
  components: {
    Header,
    Footer,
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
