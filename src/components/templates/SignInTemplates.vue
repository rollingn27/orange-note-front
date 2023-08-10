<template>
  <ViewTemplate>
    <template #header></template>
    <template #body>
      <SignOrganisms></SignOrganisms>
    </template>
    <template #footer></template>
  </ViewTemplate>
</template>
<script>
import SignOrganisms from "../organisms/SignInOrganisms.vue";
import ViewTemplate from "./ViewTemplate.vue";
export default {
  components: {
    SignOrganisms,
    ViewTemplate,
  },
};
</script>
