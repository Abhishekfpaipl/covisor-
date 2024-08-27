<template>
    <div class="container my-3 py-3">
        <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ About ~</span></p>
        <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center align-items-center">
            <div class="col" v-for="(info, index) in user.information" :key="index">
                <div class="border my-2">
                    <p class="border-bottom p-2 bg-light fw-bold mb-0 text-start text-md-center">{{ info.heading
                        }}</p>
                    <p class="p-2 text-start text-md-center mb-0">{{ info.text }}</p>
                </div>
            </div>
        </div>
        <!-- <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Fun Facts ~</span></p>
        <div class="my-3 d-flex justify-content-evenly">
            <div class="text-center fw-bold">
                <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                    <AutoCounter :data="10"> </AutoCounter>
                </p>
                <small style="font-size: var(--x-small)">Years Of <br />
                    Experience</small>
            </div>
            <div class="separator"></div>
            <div class="text-center fw-bold">
                <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                    <AutoCounter :data="100"> </AutoCounter>
                </p>
                <small style="font-size: var(--x-small)">Products <br />
                    Listed</small>
            </div>
            <div class="separator"></div>
            <div class="text-center fw-bold">
                <p class="m-0 d-flex justify-content-center align-items-center fs-4">
                    <AutoCounter :data="1000"> </AutoCounter>
                </p>
                <small style="font-size: var(--x-small)">Happy <br />
                    Customers</small>
            </div>
        </div> -->
    </div>
</template>
<script>
// import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'InfoSection',
    components: {
        // AutoCounter
    },
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
        }
    }

}
</script>
<style scoped>
.separator {
    border-left: 1px solid #000;
    /* Adjust the color and style as needed */
    height: 80px;
    /* Adjust the height as needed */
    margin: 0 20px;
    /* Adjust the margin as needed */
}
</style>