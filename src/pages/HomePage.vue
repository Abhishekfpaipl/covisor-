<template>
    <div class="">
        <div class="container rounded-top-5 bg-light" v-observe>
            <div class="row p-3 justify-content-center align-items-center">
                <div class="col-12  mt-md-0 text-center">
                    <h1 class="text-uppercase my-3">Required a digital business card?</h1>
                    <p class="text-capitalize fs-5 fw-bold">"you will get your digital business card instantly!"</p>
                    <h1 class="text-uppercase cutout my-3"><span>Contact Us</span></h1>
                    <p class="text-capitalize fs-5 fw-bold">"let's build an awesome business together "</p>
                </div>
                <div class="col-12 pt-4 text-center">
                    <ContactForm /> 
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
export default {
    name: "HomeView",
    components: {
        ContactForm
    },
};
</script>
<style lang="">

</style>