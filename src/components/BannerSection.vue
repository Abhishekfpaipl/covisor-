<template>
    <!-- <div v-if="user.banner" class="w-100">
        <img :src="user.banner" alt="banner" class=" " style="width: 100%;height: auto;"> 
    </div>
     -->

    <div v-if="user.banner" id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button v-for="(banner, index) in user.banner" :key="index" :data-bs-target="'#carouselExampleCaptions'"
                :data-bs-slide-to="index" :class="{ active: index === 0 }" :aria-current="index === 0 ? 'true' : false"
                :aria-label="'Slide ' + (index + 1)"></button>
        </div>
        <div class="carousel-inner">
            <div v-for="(banner, index) in user.banner" :key="index" class="carousel-item"
                :class="{ active: index === 0 }" data-bs-interval="2000">
                <img :src="banner.image" class="d-block w-100" :alt="banner.alt">
                <div class="carousel-caption d-none d-md-block">
                    <h5>{{ banner.label }}</h5>
                    <p>{{ banner.content }}</p>
                </div>
            </div>
        </div>
        <button v-if="user.banner.length > 1" class="carousel-control-prev" type="button"
            data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button v-if="user.banner.length > 1" class="carousel-control-next" type="button"
            data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    <div v-else class="w-100">
        <img src="/img/banner.jpeg" alt="banner" style="width: 100%;height: auto; object-fit: fill;">
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
<style scoped></style>