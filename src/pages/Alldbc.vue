<template>
    <div class=" ">
        <div class="">
            <SecondSection />
        </div>
        <div class="">
            <GeneralCollection />
        </div>

    </div>
</template>

<script>
import SecondSection from "@/components/SecondSection.vue";
import GeneralCollection from "@/components/GeneralCollection.vue";
export default {
    name: "HomeView",
    components: {
        SecondSection,
        GeneralCollection,
    },
};
</script>