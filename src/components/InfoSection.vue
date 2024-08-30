<template>
    <div class="container my-3 py-3">
        <div v-if="user.information" class="">
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
        </div>
        <div v-if="user.counter" class="">
            <p class="px-2 py-3 text-center mb-0 bill"><span class="fs-2">~ Fun Facts ~</span></p>
            <div class="row row-cols-3 row-cols-md-3 g-1 w-100 text-center ">
                <div class="col my-3" v-for="(counter, index) in user.counter" :key="index">
                    <div class="fw-bold border-dark" :class="{ 'border-end': index < user.counter.length - 1 }">
                        <div class="fs-4 d-flex justify-content-center align-items-center">
                            <AutoCounter :data="counter.value" /> +
                        </div>
                        <small>{{ counter.text }}</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'InfoSection',
    components: {
        AutoCounter
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