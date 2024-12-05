<template>
    <div class="position-fixed w-100" style="z-index: 10;">
        <div class="containerr d-flex justify-content-between align-items-center" ref="topnav">
            <div class="d-flex align-items-center gap-3">
                <router-link to="/" class="text-decoration-none text-dark d-flex align-items-center">
                    <img :src="`${publicPath}${img}`" style="width: 50px; object-fit: contain;">
                    <div class="d-flex flex-column align-items-start method1">
                        <span class="text-uppercase fw-bold fs-4 lh-1">Covisor Biz</span>
                        <span class="text-capitalize fw-bold smaller">business networking card</span>
                    </div>
                </router-link>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'ProductTopnav',
    data() {
        return {
            publicPath: process.env.BASE_URL,
            img: "img/logo.png",
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
            // console.log(scrollTop)
            // console.log(scrollPercentage)
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
    position: relative;
    background: black;
    padding: 1rem;
}

.containerr::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    /* Border height */
    background: linear-gradient(90deg,
            rgba(254, 242, 159, 1) 0%,
            rgba(210, 163, 73, 1) 50%,
            rgba(254, 242, 159, 1) 100%);
}
</style>