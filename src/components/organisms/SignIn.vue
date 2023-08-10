<template>
  <div>
    <Body>
      <template #wrap>
        <div class="signWrap">
          <div><h3>Orange Note</h3></div>
          <div class="content">
            <div><slot name="type">회원가입</slot></div>
            <div>
              <WhiteInput />
            </div>
            <div><slot name="type">회원가입</slot></div>
            <div><slot name="type">회원가입</slot></div>
          </div>
        </div>
      </template>
    </Body>
  </div>
</template>
<script>
import Body from "./Body.vue";
import Input from "../atoms/Input.vue";
export default {
  components: {
    Body,
    Input,
  },
};
</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
}
.content > div {
  padding: 0.5rem;
}
.signWrap {
  display: flex;
  flex-direction: column;
  width: 27.5rem;
  margin: 7.5rem auto 0;
  align-items: center;
  background: gainsboro;
}
</style>
