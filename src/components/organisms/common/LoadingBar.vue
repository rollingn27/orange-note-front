<template>
  <div class="lds-facebook">
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.lds-facebook {
  display: inline-block;
  position: fixed;
  height: 4rem;
  top: 50%;
  left: 50%;
  div {
    display: inline-block;
    position: absolute;
    left: 0.375rem;
    width: 1rem;
    background: #e2a6d6;
    animation: lds-facebook 1.5s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    border-radius: 7px;
  }

  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }

  div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }

  div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
}

@keyframes lds-facebook {
  0% {
    top: 6px;
    height: 64px;
  }

  50%,
  100% {
    top: 19px;
    height: 28px;
  }
}
</style>
