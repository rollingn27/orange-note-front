<template>
  <div class="wrap">
    <div></div>
    <div class="nav">
      <div class="nav-logo">
        <img src="@/assets/orangeIcon.png" />
      </div>
      <div class="nav-space"></div>
      <div class="nav-login" v-show="!!userId">
        <span>{{ userId }}</span
        >님 안녕하세요.
        <img src="@/assets/logout.png" @click="signOut" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import SubmitButton from "../molecules/SubmitButton.vue";

export default {
  components: { SubmitButton },
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", ["userId"]),
  },
  methods: {
    ...mapActions("auth", ["$signOut"]),
    signOut() {
      this.$signOut();
      this.$router.go(0);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  border-bottom: 1px solid black;
  height: 5.75rem;
  flex-direction: column;
  justify-content: space-between;
  margin: 0.75rem;
}

.nav {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.5rem;
}
.nav-logo > img {
  width: 2.5rem;
}
.nav-space {
  flex: 10;
}

.nav {
  div {
    flex: 1;
  }
}
.nav-login {
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  font-size: 1.25rem;
  img {
    margin-left: 1rem;
    width: 1.75rem;
  }
}
.nav-login {
  span {
    font-size: 1.5rem;
  }
}
</style>
