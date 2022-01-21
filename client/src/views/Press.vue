<template>
    <main>
        <Navbar />
        <div class="wrapper">
            <header>
                <PageTitle pageName="Press Release" />
                <PressBody />
            </header>
            <PageFooter />
        </div>
    </main>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
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
    Navbar,
  }
};
</script>

<style scoped>

main{
  display: flex;
}

.wrapper{
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

header{
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}

@media (max-width: 750px){
  .wrapper{
    width: 100vw;
  }
}

</style>