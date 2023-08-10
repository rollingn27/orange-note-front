<template>
  <ViewTemplate>
    <template #header></template>
    <template #body>
      <SignUpOrganism :textProps="textProps"></SignUpOrganism>
    </template>
    <template #footer></template>
  </ViewTemplate>
</template>
<script>
import SignUpOrganism from "../organisms/SignUpOrganism.vue";
import ViewTemplate from "./ViewTemplate.vue";
export default {
  components: {
    SignUpOrganism,
    ViewTemplate,
  },
  data() {
    return {
      textProps: {
        typeText: "회원가입",
        signChangeText: "로그인",
        submitText: "회원가입",
      },
    };
  },
};
</script>
