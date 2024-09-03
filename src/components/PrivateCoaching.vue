<template> 
        <div class="container py-5">
            <h3 class="text-center text-uppercase">{{ title }}</h3>
            <h1 class="text-center text-uppercase">{{ subtitle }}</h1>
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1 g-md-5">
                <div class="col" v-for="(coach, index) in coaching" :key="index">
                    <div class="card text-white p-2" style="background-color: var(--brand-color);">
                        <i v-if="coach.icon" :class="coach.icon" class="fs-1"></i>
                        <p v-else class="text-center fs-1 fw-bold">0{{ index + 1 }} </p>
                        <p class="text-center my-2 text-uppercase">{{ coach.title }}</p>
                        <p class="text-center my-2">{{ coach.description }}</p>
                    </div>
                </div>
            </div>
        </div> 
</template>
<script>
export default {
    props: {
        coaching: {
            type: Array,
        },
        title: {
            type: String,
        },
        subtitle: {
            type: String,
        },
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="">

</style>