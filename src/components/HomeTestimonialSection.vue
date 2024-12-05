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
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{
                                        card.name
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
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{
                                        card.name
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
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{
                                        card.name
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
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{
                                        card.name
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
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{
                                        card.name
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
                                    <p class="name smaller mb-0 mt-0 pb-2 text-ellipsis1 border-bottom border-2">{{
                                        card.name
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
                    title: 'Perfect for Networking',
                    tax: 'Streamlined my contact sharing',
                    time: 'Used for 2 months',
                    name: 'Ravi Patel',
                    subtitle: 'Founder at TechSavvy Solutions',
                    review: 'The QR Code feature is a game-changer! Sharing my contact details has never been so effortless. My clients love how professional it looks.'
                },
                {
                    image: 'img/members/14.jpg',
                    title: 'Boosts Engagement',
                    tax: 'Availed maximum reactions',
                    time: 'Used for 3 months',
                    name: 'Aarushi Khanna',
                    subtitle: 'Marketing Manager at Brandify Co.',
                    review: 'I’ve seen a significant increase in client engagement thanks to the views and reactions tracking feature. The payment integration is an added bonus!'
                },
                {
                    image: 'img/members/15.jpg',
                    title: 'Great for Freelancers',
                    tax: 'Enhanced my portfolio',
                    time: 'Used for 6 weeks',
                    name: 'Vikram Mehra',
                    subtitle: 'Freelance Graphic Designer',
                    review: 'The timeline and skillset features let me showcase my expertise effectively. My clients have complimented my card multiple times!'
                },
                {
                    image: 'img/members/16.jpg',
                    title: 'Simplifies Connections',
                    tax: 'Increased network by 30%',
                    time: 'Used for 1 month',
                    name: 'Simran Batra',
                    subtitle: 'Director at Batra Consulting',
                    review: 'Sharing my digital card via social profiles is super quick. The fun facts section adds a personal touch, making it more relatable.'
                },
                {
                    image: 'img/members/17.jpg',
                    title: 'Builds Trust Instantly',
                    tax: 'Highlighted my achievements',
                    time: 'Used for 3 months',
                    name: 'Rahul Verma',
                    subtitle: 'Co-Founder at NeoBiz Ventures',
                    review: 'The achievements and testimonial sections help build instant trust with new clients. I also love the website widget—it’s seamless!'
                },
                {
                    image: 'img/members/18.jpg',
                    title: 'Outstanding Features',
                    tax: 'Effortless Sharing',
                    time: 'within 2 weeks',
                    name: 'Priya Sharma',
                    subtitle: 'Sales Executive at NexGen Realty',
                    review: 'This digital business card made me stand out at networking events. The ability to track hearts and promotes is so motivating.'
                },
                {
                    image: 'img/members/19.jpg',
                    title: 'User-Friendly Design',
                    tax: 'Enhanced online presence',
                    time: 'within 1 month',
                    name: 'Kunal Aggarwal',
                    subtitle: 'CEO at GreenTree Pvt. Ltd.',
                    review: 'The contact details and payment integration have made my interactions smoother. Reactions and reviews help me improve my client relationships.'
                },
                {
                    image: 'img/members/20.jpg',
                    title: 'Highly Customizable',
                    tax: 'Added personal branding',
                    time: 'Used for 4 months',
                    name: 'Meera Joshi',
                    subtitle: 'Life Coach and Mentor',
                    review: 'The customization options allowed me to reflect my personality in the card. The testimonial section is a great trust-building tool.'
                },
                {
                    image: 'img/members/21.jpg',
                    title: 'Perfect for Startups',
                    tax: 'Gained new clients',
                    time: 'within 30 days',
                    name: 'Aditya Ghosh',
                    subtitle: 'Founder at InstaGrow Tech',
                    review: 'The promotes and reactions tracking features have helped me measure how well my networking efforts are performing.'
                },
                {
                    image: 'img/members/22.jpg',
                    title: 'Saves Time',
                    tax: 'Simplified client onboarding',
                    time: 'Used for 1 month',
                    name: 'Neha Singh',
                    subtitle: 'HR Consultant',
                    review: 'With the QR Code and payment integration, I’ve been able to onboard clients more efficiently. It’s a great investment!'
                },
                {
                    image: 'img/members/23.jpg',
                    title: 'Impressive Layout',
                    tax: 'Boosted my credibility',
                    time: 'Used for 2 months',
                    name: 'Arjun Nair',
                    subtitle: 'Financial Advisor',
                    review: 'The attributes and achievements sections allowed me to highlight my skills effectively. My clients feel more confident in my services.'
                },
                {
                    image: 'img/members/24.jpg',
                    title: 'Great for Promotions',
                    tax: 'Enhanced visibility',
                    time: 'within 15 days',
                    name: 'Ritika Roy',
                    subtitle: 'Event Planner',
                    review: 'The reactions and hearts features provide instant feedback on my promotions. The digital business card is sleek and modern.'
                },
                {
                    image: 'img/members/25.jpg',
                    title: 'A Complete Solution',
                    tax: 'Effortlessly integrated',
                    time: 'Used for 1 month',
                    name: 'Deepak Kumar',
                    subtitle: 'Freelance Photographer',
                    review: 'The website widget integration is seamless. I love how my portfolio, payment options, and testimonials are all in one place.'
                },
                {
                    image: 'img/members/26.jpg',
                    title: 'Perfect for Showcasing',
                    tax: 'Boosted my portfolio views',
                    time: 'within 3 weeks',
                    name: 'Tanya Mishra',
                    subtitle: 'Content Writer',
                    review: 'The timeline and fun facts sections make my portfolio engaging and interesting. I’ve received more views than ever before!'
                },
                {
                    image: 'img/members/27.jpg',
                    title: 'Engages Audience',
                    tax: 'Increased client interactions',
                    time: 'Used for 2 months',
                    name: 'Rohan Kapoor',
                    subtitle: 'Fitness Trainer',
                    review: 'The reactions and reviews features have helped me improve my services. My clients enjoy the easy sharing options too!'
                },
                {
                    image: 'img/members/28.jpg',
                    title: 'Modern and Elegant',
                    tax: 'Enhanced client trust',
                    time: 'Used for 45 days',
                    name: 'Isha Sharma',
                    subtitle: 'Interior Designer',
                    review: 'The card layout is so modern and elegant! The attributes and skills sections make my services stand out.'
                },
                {
                    image: 'img/members/29.jpg',
                    title: 'Makes Networking Easy',
                    tax: 'Built strong connections',
                    time: 'within 3 weeks',
                    name: 'Harsh Jain',
                    subtitle: 'Software Developer',
                    review: 'Sharing via social profiles and QR Code has been a breeze. The achievements section helped me land new projects.'
                },
                {
                    image: 'img/members/30.jpg',
                    title: 'Highly Functional',
                    tax: 'Exceeded expectations',
                    time: 'Used for 3 months',
                    name: 'Akshay Gupta',
                    subtitle: 'Business Analyst',
                    review: 'The reactions and reviews features give me real-time feedback. The timeline helps showcase my career growth.'
                },
                {
                    image: 'img/members/31.jpg',
                    title: 'Cost-Effective Solution',
                    tax: 'Saved on printing costs',
                    time: 'Used for 2 months',
                    name: 'Nisha Kapoor',
                    subtitle: 'Freelance Content Strategist',
                    review: 'I’ve replaced physical business cards with this digital one. It’s eco-friendly, cost-effective, and packed with features!'
                },
                {
                    image: 'img/members/32.jpg',
                    title: 'Great Design',
                    tax: 'Attracted new opportunities',
                    time: 'Used for 1 month',
                    name: 'Kabir Sen',
                    subtitle: 'Architect',
                    review: 'The digital card is aesthetically designed. My clients appreciate the attributes and skills sections—it’s professional and impressive.'
                },
                {
                    image: 'img/members/33.jpg',
                    title: 'Simplifies Sharing',
                    tax: 'Built a wider network',
                    time: 'within 20 days',
                    name: 'Shweta Bansal',
                    subtitle: 'Entrepreneur',
                    review: 'The easy sharing options and interactive features have helped me expand my network. The digital business card is a must-have!'
                }
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
<style scoped>
.card-header {
    /* background: linear-gradient(to right, #ff6b6b, #4ecdc4); */
    background: linear-gradient(180deg, rgba(245, 197, 24, 1) 0%, rgba(255, 255, 255, 1) 95%);
    padding: 10px;
    text-align: center;
    border-bottom: 0px !important;
}
</style>
