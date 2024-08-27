<template>
    <div>
        <div class="my-3">
            <div class="d-flex justify-content-between align-items-end mt-3 mb-4 py-4"
                style="background-color: #efefed">
                <div class="">
                    <p class="ps-2 text-start fw-bold mb-0">
                        <span class="fs-4"> <i class="bi bi-star-fill"></i> Delhi's</span>
                    </p>
                    <p class="ps-2 text-start mb-0">
                        <span style="">Top Retailers</span>
                    </p>
                </div>
                <RouterLink to="/review-list" class="text-dark text-decoration-none">
                    <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
                </RouterLink>
            </div>
            <div class="container">
                <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-1">
                    <router-link to="/digital-card" class="col position-relative text-decoration-none"
                        v-for="(association, index) in associations" :key="index">
                        <div
                            class="card border-0 rounded p-0 d-flex flex-column align-items-center justify-content-center rounded">
                            <div class="p-2 overflow-hidden" style="height: 200px">
                                <img :src="association.img" alt="" class="rounded-top"
                                    style="width: 100%; min-width: 100%; min-height: 200px; object-fit: cover; object-position: center;" />
                            </div>
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold text-capitalize">{{
                                association.name
                                }}</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image.image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in association.promoters" :key="image.id" alt="">
                            </div>
                            <div class="card-footer border-0 d-flex justify-content-between p-0 py-2 w-100">
                                <span class='bg-light border p-1 px-2 rounded-end-3 smaller'>
                                    <i class="bi bi-star-fill small me-2"></i>
                                    <span class="fw-bold">{{ association.rating }}</span>
                                </span>
                                <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1 smaller'>
                                    <p class="mb-0">{{ association.support }}+</p>
                                    <p class="mb-0">Promoters</p>
                                </div>
                            </div>
                        </div>
                        <div class="position-absolute index-label">
                            <p class="mb-0">{{ index + 1 }}</p>
                        </div>
                        <div class="position-absolute top-0 start-0 rounded-circle"
                            style="background-color: #ffffff99;z-index: 1; width: 60px; height: 60px;">
                        </div>
                    </router-link>
                </div>
            </div>
            <!-- <DigitalCardOffcanvas /> -->
        </div>

        <div class="my-3">
            <div class="d-flex justify-content-between align-items-end mt-3 mb-4 py-4"
                style="background-color: #efefed">
                <div class="">
                    <p class="ps-2 text-start fw-bold mb-0">
                        <span class="fs-4"> <i class="bi bi-star-fill"></i> Delhi's</span>
                    </p>
                    <p class="ps-2 text-start mb-0">
                        <span style="">Top Retailers</span>
                    </p>
                </div>
                <RouterLink to="/review-list" class="text-dark text-decoration-none">
                    <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
                </RouterLink>
            </div>
            <div class="container">
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(association, index) in associations" :key="index">
                        <div
                            class="card border-0 rounded p-0 d-flex flex-column align-items-center justify-content-center rounded">
                            <div class="p-3 overflow-hidden" data-bs-toggle="offcanvas" href="#offcanvasExample"
                                role="button" aria-controls="offcanvasExample" style="height: 200px">
                                <!-- <img src="https://img101.urbanic.com/v1/703c1c85d9a04f03a11294de9aa4d46f.webp" alt="" -->
                                <img :src="association.img" alt="" class="rounded-top"
                                    style="width: 100%; min-width: 100%; min-height: 200px; object-fit: cover; object-position: top;" />
                            </div>
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold text-capitalize">{{
                                association.name
                                }}</p>
                            <div class="d-flex gap-2 overflow-x-scroll w-100 px-2" id="scroll">
                                <img :src="image.image" style="width: 30px; height: 30px; object-fit: contain;"
                                    v-for="image in association.promoters" :key="image.id" alt="">
                            </div>
                            <div class="card-footer border-0 d-flex justify-content-between p-0 py-2 w-100">
                                <span class='bg-light border p-1 px-2 rounded-end-3 smaller'>
                                    <i class="bi bi-star-fill small me-2"></i>
                                    <span class="fw-bold">{{ association.rating }}</span>
                                </span>
                                <div class='d-flex gap-2 align-items-center justify-content-center px-2 p-1 smaller'>
                                    <p class="mb-0">{{ association.support }}+</p>
                                    <p class="mb-0">Promoters</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="my-3">
            <div class="d-flex justify-content-between align-items-end mt-3 mb-4 py-4"
                style="background-color: #efefed">
                <div class="">
                    <p class="ps-2 text-start fw-bold mb-0">
                        <span class="fs-4"> <i class="bi bi-star-fill"></i> Delhi's</span>
                    </p>
                    <p class="ps-2 text-start mb-0">
                        <span style="">Top Retailers</span>
                    </p>
                </div>
                <RouterLink to="/review-list" class="text-dark text-decoration-none">
                    <p class="mb-0 pe-2">See All <i class="bi bi-arrow-right"></i></p>
                </RouterLink>
            </div>
            <div class="container">
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(user, index) in users" :key="index">
                        <router-link :to="'/profile/' + user.mobile"
                            class="card border-0 rounded p-0 d-flex flex-column align-items-center justify-content-center rounded text-decoration-none">
                            <div class="p-3 overflow-hidden" style="height: 200px">
                                <img :src="user.img" alt="" class="rounded-top"
                                    style="width: 100%; min-width: 100%; min-height: 200px; object-fit: cover; object-position: center;" />
                            </div>
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold text-capitalize">{{
                                user.name
                            }}</p>

                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "GeneralCollection",
    data() {
        return {
        }
    },
    computed: {
        users() {
            return this.$store.getters.getUsers
        }
    }
}
</script>
<style>
.index-label {
    top: 0px;
    left: 0px;
    z-index: 2;
    line-height: 1;
    background: linear-gradient(90deg, #fef29f 0%, rgb(142, 105, 37) 50%, rgb(122, 107, 10) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.index-label p {
    width: 60px;
    height: 60px;
    font-size: 3rem;
    font-weight: 800;
    text-align: center;
    text-shadow: 1px 1px 1px #00000020;
}
</style>