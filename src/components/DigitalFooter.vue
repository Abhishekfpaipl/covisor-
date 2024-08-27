<template>
    <div class="container-fluid p-3 bg-dark">
        <div class="row px-4  ">
            <router-link to="/"
                class="text-decoration-none col-md-6 d-md-flex justify-content-md-start justify-content-center gap-2 align-items-center mt-3 mt-md-0">
                <div class="text-white fs-5  text-uppercase">
                    <span class="border-bottom me-2 pb-1 my-2 ">do you want to create </span> <br>
                    <span class="text-warning"> digital business card </span>
                </div>
                <button class="btn btn-warning text-capitalize lh-2">get started <br> Now</button>
            </router-link>
            <a href="https://covisor.in/"
                class="text-decoration-none col-md-6 d-flex flex-column flex-md-row justify-content-end align-items-center gap-md-5 mt-3 mt-md-0">
                <p class="text-white mb-0"> Copyright © 2024 covisor.in All rights reserved</p>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'DigitalFooter',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/covisor/logo.svg",
        }
    }
}
</script>
<style lang="">

</style>