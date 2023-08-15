<template>
  <ViewTemplate>
    <template #header></template>
    <template #body><MainOrganism /></template>
    <template #footer></template>
  </ViewTemplate>
</template>
<script>
import ViewTemplate from "./ViewTemplate.vue";
import MainOrganism from "@/components/organisms/MainOrganism.vue";
export default {
  components: {
    ViewTemplate,
    MainOrganism,
  },
};
</script>
