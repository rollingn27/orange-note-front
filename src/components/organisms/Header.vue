<template>
  <div class="wrap">
    <div></div>
    <div class="nav">
      <div class="nav-logo">
        <img src="@/assets/orangeIcon.png" />
      </div>
      <div class="nav-space"></div>
      <div class="nav-login">
        <span>{{ nickName }}</span>
        님 안녕하세요.
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nickName: "rolling",
    };
  },
};
</script>
<style scoped>
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

.nav > div {
  flex: 1;
}
.nav-login {
  display: flex;
  align-items: end;
  justify-content: end;
  font-size: 1.25rem;
}
.nav-login > span {
  font-size: 2rem;
}
</style>
