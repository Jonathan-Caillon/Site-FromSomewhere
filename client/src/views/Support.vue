<template>
    <main>
        <Navbar />
        <div class="wrapper">
            <header>
                <PageTitle pageName="Support" />
                <Form />
            </header>
            <PageFooter />
        </div>
    </main>
</template>

<style scoped>
    main{
        display: flex;
    }
    .wrapper{
        width: 80vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    header{
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 85vh
    }

    @media screen and (max-width: 1000px) {
        main{
            display: block;
        }
        .wrapper{
            width: 100vw;
            height: calc(100vh - 60px);
        }
    }
</style>

<script>
import Form from '@/components/Form.vue';
import Navbar from '@/components/Navbar.vue';
import PageFooter from "@/components/PageFooter.vue";
import PageTitle from "@/components/PageTitle.vue";

export default {
    name: "Support",
    components: {
        Form,
        PageFooter,
        PageTitle,
        Navbar,
    }
}
</script>