<template>
    <div class="bg-white">
        <div class="container py-5 text-dark">
            <h1 class="text-center mb-4 text-capitalize">Get started in 3 simple steps</h1>
            <div class="d-flex flex-nowrap overflow-x-scroll" id="scroll">
                <div v-for="(link, index) in links" :key="index" class="col">
                    <div class="card border-0 p-3 "> 
                        <div class="d-flex justify-content-center align-items-center">
                            <img :src="link.img" width="300" alt="" />
                        </div>
                        <h4 class="mt-3 text-center text-capitalize text-dark">{{ link.head }}</h4>
                        <p class="text-center w-100 text-capitalize small text-dark">{{ link.text }}</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            links: [
                {
                    id: 1,
                    img: '/img/registration/3.svg',
                    icon: 'register',
                    head: 'Register Your Account',
                    text: 'Register your account and get verified.'
                },
                {
                    id: 2,
                    img: '/img/registration/1.svg',
                    icon: 'accountsetup',
                    head: 'Setup Your Account',
                    text: 'Setup your account as per your   details.'
                },
                {
                    id: 3,
                    img: '/img/registration/2.svg',
                    icon: 'bootsales',
                    head: 'Boost your network',
                    text: 'through various of our features'
                },
            ],
        }
    }
}
</script>