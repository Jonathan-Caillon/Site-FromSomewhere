<template>
  <div class="press-head">
    <PageTitle pageName="Press Release" />
    <PressHeader />
  </div>
  <PressBody />
  <PageFooter />  
</template>

<script>
import PageFooter from "@/components/PageFooter.vue";
import PageTitle from "@/components/PageTitle.vue";
import PressHeader from "@/components/PressHeader.vue";
import PressBody from "@/components/PressBody.vue";

export default {
  name: "Press",
  components: {
    PageFooter,
    PageTitle,
    PressHeader,
    PressBody,
  }
};
</script>

<style scoped>

.press-head{
  margin-left: 20vw;
  width: 80vw;
}

</style>