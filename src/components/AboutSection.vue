<template>
    <div v-if="user.information" class="container my-3 py-3">
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
</template>
<script>
export default {
    name: 'AboutSection',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
}
</script>