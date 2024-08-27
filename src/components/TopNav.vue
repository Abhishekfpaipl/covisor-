<template>
    <div class="position-relative pb-5 mb-2 bg-repeat rotated-background"
        style="min-height: 300px; background-image: url('/img/bg.svg');background-position: center; ">

        <div class="position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white rotated-background"
            style="background-color:#0000008c">
            <!-- <div class="row w-100 text-center ">
                <div class="col-4 col-md-4 my-3 border-end">
                    <div class="fw-bold">
                        <div class="fs-4 d-flex justify-content-center align-items-center">
                            <AutoCounter :data="10" /> +
                        </div>
                        <small>Years Of <br />Experience</small>
                    </div>
                </div>
                <div class="col-4 col-md-4 my-3 d-flex align-items-center justify-content-center border-end">
                    <div class="fw-bold">
                        <div class="fs-4 d-flex justify-content-center align-items-center">
                            <AutoCounter :data="150" /> +
                        </div>
                        <small>No. of Happy Customers</small>
                    </div>
                </div>
                <div class="col-4 col-md-4 my-3">
                    <div class="fw-bold">
                        <div class="fs-4 d-flex justify-content-center align-items-center">
                            <AutoCounter :data="20" /> +
                        </div>
                        <small>Team Members Count</small>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
// import AutoCounter from '@/components/AutoCounter.vue'
export default {
    name: 'TopNav',
    components: {
        // AutoCounter
    },
}
</script>
<style scoped>
.rotated-background {
    transform: rotate(180deg);
}

@media(max-width:530px) {
    .bg-repeat {
        background-repeat: round !important;
    }
}
</style>