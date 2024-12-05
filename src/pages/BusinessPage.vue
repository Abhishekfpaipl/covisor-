<template>
    <div class="bg-light top-padding">
        <div class="">
            <ServicesFormBanner />
        </div>
        <div class="">
            <BusinessCard />
        </div>
    </div>
</template>
<script>
import ServicesFormBanner from "@/components/FormBanner.vue";
import BusinessCard from "@/components/BusinessCard.vue";
export default {
    name:"BusinessPage",
    components:{
        ServicesFormBanner,
        BusinessCard,
    }
}
</script>
<style lang="">

</style>