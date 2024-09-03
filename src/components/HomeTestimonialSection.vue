<template>
    <div class="bg-white text-dark">
        <article :class="['wrapper', { 'wrapper--vertical': isVertical }]" class="pb-5">
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-0 bg-light border">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-dark border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body text-bg-light py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{ card.name
                                        }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2 border-bottom border-2">Covisor Biz <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-0 bg-light border">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-dark border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body text-bg-light py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{ card.name
                                        }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2 border-bottom border-2">Covisor Biz <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marquee marquee--reverse" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-0 bg-light border">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-dark border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body text-bg-light py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{ card.name
                                        }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2 border-bottom border-2">Covisor Biz <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'normal' : 'reverse' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-0 bg-light border">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-dark border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body text-bg-light py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{ card.name
                                        }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2 border-bottom border-2">Covisor Biz <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="marquee" :class="{ 'marquee--vertical': isVertical }">
                <div class="marquee__group mt-5" :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-0 bg-light border">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-dark border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body text-bg-light py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{ card.name
                                        }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2 border-bottom border-2">Covisor Biz <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" class="marquee__group mt-5"
                    :style="{ 'animation-direction': isReverse ? 'reverse' : 'normal' }">
                    <div class="" v-for="(card, index) in cards" :key="index">
                        <div class="card-container position-relative rounded p-0 bg-light border">
                            <div class="card border-0">
                                <div class="card-header d-flex justify-content-center algin-items-center">
                                    <div class="rounded-circle overflow-hidden border border-dark border-2 p-1"
                                        style="width:60px; height:60px; margin-top:-40px;">
                                        <img :src="card.image" alt="Profile" class="rounded-circle"
                                            style="width: 100%; height: 100%;object-fit: cover;" />
                                    </div>
                                </div>
                                <div class="card-body text-bg-light py-2 px-1" style="max-width: 250px;">
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{ card.name
                                        }}</p>
                                    <!-- <p class="mb-0 smaller mx-2 pb-2 border-bottom border-2">Covisor Biz <i
                                            class="bi bi-star-fill text-warning"></i> 8.5</p> -->
                                    <p class="text-dark smaller mb-0 text-ellipsis5 py-2">{{ card.review }} Lorem
                                        ipsum dolor sit amet consectetur adipisicing elit. Incidunt architecto iste
                                        voluptatibus error tempore qui dolores possimus, nam fugit repudiandae?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </div>
</template>

<script>

export default {
    name: "HomeTestimonialSection",
    props: {
        brandColorOne: {
            type: String,
            default: '#000'
        }
    },
    data() {
        return {
            isVertical: false,
            isReverse: false,
            links: [
                {
                    id: 1,
                    name: 'Amazon',
                    image: '/img/members/1.png'
                },
                {
                    id: 2,
                    name: 'Apple',
                    image: "/img/members/2.webp"
                },
                {
                    id: 3,
                    name: 'Aws',
                    image: "/img/members/3.png"
                },
                {
                    id: 4,
                    name: 'Facebook',
                    image: "/img/members/4.png"
                },
                {
                    id: 5,
                    name: 'Google',
                    image: "/img/members/5.jpg"
                },
                {
                    id: 6,
                    name: 'Meta',
                    image: "/img/members/6.webp"
                },
                {
                    id: 7,
                    name: 'Microsoft',
                    image: "/img/members/7.jpeg"
                },
                {
                    id: 11,
                    name: 'Vodafone',
                    image: "/img/members/8.png"
                },
            ],
            cards: [
                {
                    image: 'img/members/13.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'Prashant Malik',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/14.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/15.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'Prashant Malik',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/16.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/17.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'Prashant Malik',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/18.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
                {
                    image: 'img/members/19.jpg',
                    title: 'Under NBFC Loan',
                    tax: 'Availed 10 LAKH Debt',
                    time: 'within 65 days',
                    name: 'FA WIZARD PRIVATE LIMITED',
                    subtitle: 'Director at RBB Buildcon Pvt. Ltd.'
                },
            ]
        };
    },
    methods: {
        toggleDirection() {
            this.isVertical = !this.isVertical;
            this.isReverse = !this.isReverse;
        },
    },
};
</script>
<style>
.card-header {
    /* background: linear-gradient(to right, #ff6b6b, #4ecdc4); */
    background: linear-gradient(180deg, rgba(245, 197, 24, 1) 0%, rgba(255, 255, 255, 1) 95%);
    padding: 10px;
    text-align: center;
    border-bottom: 0px !important;
}
</style>
