<template>
    <div class="container-fluid text-white py-4" style="background-color: black !important;">
        <div class="row">
            <div class="d-flex flex-column justify-content-center mb-4">
                <p class="px-2 py-3 text-center mb-0 text-capitalize fs-1">Here's the impact we have created</p>
            </div>
            <div class="col">
                <div class="text-center">
                    <i class="bi bi-people-fill fs-1"></i>
                    <p class="m-0 fw-bold text-capitalize mt-3" style="color: var(--brand-color);">
                        elite
                    </p>
                    <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center" style="color: var(--brand-color);">
                        50 M
                    </p>
                    <p class="mt-0 text-capitalize">Community</p>
                </div>
            </div>
            <div class="col">
                <div class="text-center">
                    <i class="bi bi-star-fill fs-1"></i>
                    <p class="m-0 fw-bold text-capitalize mt-3" style="color: var(--brand-color);">
                        world's
                    </p>
                    <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center"  style="color: var(--brand-color);">
                        1 st
                    </p>
                    <p class="mt-0 text-capitalize">digital PR</p>
                </div>
            </div>
            <div class="col">
                <div class="text-center">
                    <i class="bi bi-fire fs-1"></i>
                    <p class="m-0 fw-bold text-capitalize mt-3" style="color: var(--brand-color);">
                        Trending
                    </p>
                    <p class="m-0 fs-3 fw-bold d-flex justify-content-center align-items-center" style="color: var(--brand-color);">100 Top</p>
                    <p class="mt-0 text-capitalize">Websites</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script> 
export default {
    name: "CustomCounter", 
    props: {
        name1: {
            type: String,
            required: true
        },
        name2: {
            type: String,
            required: true
        },
        name3: {
            type: String,
            required: true
        },
        value1: {
            type: Number,
            required: true
        },
        value2: {
            type: Number,
            required: true
        },
        value3: {
            type: Number,
            required: true
        },
        brandColorOne: {
            type: String,
            required: true
        },
        brandTextColor: {
            type: String,
            required: true
        },
    },
}
</script>
<style lang="">

</style>