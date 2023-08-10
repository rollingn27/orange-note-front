<template>
  <ViewTemplate>
    <template #header></template>
    <template #body>
      <SignInOrganism :textProps="textProps"></SignInOrganism>
    </template>
    <template #footer></template>
  </ViewTemplate>
</template>
<script>
import SignInOrganism from "../organisms/SignInOrganism.vue";
import ViewTemplate from "./ViewTemplate.vue";
export default {
  components: {
    SignInOrganism,
    ViewTemplate,
  },
  data() {
    return {
      textProps: {
        typeText: "로그인",
        signChangeText: "회원가입",
        submitText: "로그인",
      },
    };
  },
};
</script>
