<template>
    <div class="container-fluid text-dark bg-ligh py-5">

        <div class="row row-cols-1 row-cols-md-3 g-2">
            <div v-for="(item, index) in fav" :key="index" class="col">
                <div class="p-2 card" >
                    <p class="fw-bold fs-1 mb-0 d-flex justify-content-center align-items-center"
                        style="color:var(--brand-color) !important;">
                        <AutoCounter :data="item.data" /><span>&nbsp;{{ item.info }}+</span>
                    </p>
                    <p class="small" style="color:var(--brand-color) !important;">{{ item.label }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AutoCounter from '@/components/AutoCounter.vue';
export default {
    components: {
        AutoCounter,
    },
    data() {
        return {
            fav: [
                {
                    data: 12,
                    info: 'K',
                    label: 'Business Categories Coverage',

                },
                {
                    data: 19,
                    info: '',
                    label: ' Countries Reach Worldwide'
                },
                {
                    data: 8,
                    info: 'B',
                    label: 'Billions People Requirement'
                },
            ],
        }
    }
}
</script>
<style lang="">

</style>