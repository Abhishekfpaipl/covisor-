<template>
    <div class="position-relative pb-5 mb-2 bg-repeat rotated-background"
        style="min-height: 300px; background-image: url('/img/cardbg.jpg');">
        <div class="position-absolute top-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white rotated-background"
            style="background-color:#0000008c">
        </div>
    </div>
</template>

<script>
export default {
    name: 'TopNav',
    props: {
        user: {
            type: Object,
            required: true,
        }
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