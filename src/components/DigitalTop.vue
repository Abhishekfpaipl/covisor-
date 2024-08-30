<template>
    <div class="containerr d-flex justify-content-between align-items-center" ref="topnav"
        :style="`background:rgb(248,249,250, ${backgroundOpacity});`">
        <div class="d-flex align-items-center gap-2" :class="{ 'hide-on-scroll': hideOnScroll }">
            <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
                <img v-if="user.img" :src="user.img" style="width: 40px;height:40px;object-fit: cover;object-position:top;" class="rounded">
                <img v-else src="/img/dummyprofile.png" style="width: 40px;height:40px;object-fit: cover;object-position:top;" class="rounded border border-dark">
             </router-link>
            <span class="text-uppercase text-dark fs-5">{{ user.name }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductTopnav',
    props: {
        user: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo/logo.png",
            backgroundOpacity: 0,
            hideOnScroll: true,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercentage = (scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            if (scrollPercentage >= 5 && scrollPercentage <= 6) {
                this.backgroundOpacity = 0.5;
                this.hideOnScroll = true;
            } else if (scrollPercentage > 5) {
                this.backgroundOpacity = 1;
                this.hideOnScroll = false;
            } else {
                this.backgroundOpacity = 0;
                this.hideOnScroll = true;
            }
        },
    }
};
</script>

<style scoped>
.hide-on-scroll {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.containerr {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: #fff;
    padding: 10px;
    z-index: 10;
}
</style>