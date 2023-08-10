<!-- 버튼 스타일 초기화 -->
<template>
  <button><slot></slot></button>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
button {
  all: unset;
}

button:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
