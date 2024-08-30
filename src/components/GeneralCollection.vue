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
                <div class="row row-cols-2 row-cols-md-5 g-1">
                    <div class="col position-relative" v-for="(user, index) in users" :key="index">
                        <router-link :to="'/profile/' + user.mobile"
                            class="card border-0 rounded p-0 d-flex flex-column align-items-center justify-content-center rounded text-decoration-none">
                            <div class="p-3 overflow-hidden" style="height: 200px">
                                <img v-if="user.img" :src="user.img" alt="" class="rounded-top"
                                    style="width: 100%; min-width: 100%; min-height: 200px; object-fit: cover; object-position: center;" />
                                <img v-else src="/img/dummyprofile.png" alt="" class="rounded-top"
                                    style="width: 100%; min-width: 100%; min-height: 200px; object-fit: cover; object-position: center;" />
                            </div>
                            <p class="smaller my-2 text-center text-ellipsis2 fw-bold text-capitalize">{{
                                user.name
                                }} </p>

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