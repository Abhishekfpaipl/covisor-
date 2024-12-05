<template>
    <div class="container my-5">
        <div class="row align-items-center">
            <div class="col-md-6">
                <h2 class="mb-3">
                    <span class="text-warning">Seller Success</span> Stories
                </h2>
                <p class="mb-4">14 Lakh+ sellers trust Covisor Biz for their online business.</p>
                <!-- <button class="btn btn-outline-primary">See All Stories</button> -->
            </div>
            <div class="col-md-6">
                <div class="position-relative">
                    <div class="card border-0 shadow text-dark" >
                        <div class="card-body">
                            <div class="d-flex flex-column justify-content-center align-items-center mb-3">
                                <img :src="currentStory.image" alt="Seller" class="rounded-circle me-3" width="60"
                                    height="60">
                                <div>
                                    <h5 class="card-title mb-0">{{ currentStory.name }}</h5>
                                    <p class="card-text">{{ currentStory.company }}</p>
                                </div>
                            </div>
                            <blockquote class="blockquote mb-0">
                                <p>{{ currentStory.quote }}</p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="position-absolute top-50 translate-middle" style="left: 0%;">
                        <button class="btn rounded-circle shadow py-2" style="background-color: var(--brand-color) !important;" @click="prevStory"><i
                                class="bi bi-chevron-left"></i></button>
                    </div>
                    <div class="position-absolute top-50 translate-middle" style="right: -7%;">
                        <button class="btn rounded-circle shadow py-2" style="background-color: var(--brand-color) !important;" @click="nextStory"><i
                                class="bi bi-chevron-right"></i></button>
                    </div>
                </div>
                <div class="text-center mt-3">
                    <span v-for="(story, index) in stories" :key="index" class="dot mx-1"
                        :class="{ 'active': index === currentIndex }"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            stories: [
                {
                    name: "Samantha",
                    company: "Amazestore",
                    image: "img/users/1.png",
                    quote: "Samantha’s Digital Transformation Agency Samantha, an entrepreneur with a background in graphic design, started reselling digital business cards as part of her digital transformation services. She targeted small businesses and startups that wanted to create professional branding without investing in expensive printing. By offering digital cards with unique, branded designs and tracking features, Samantha saw her client base grow quickly. She was able to generate a steady income through subscriptions and referrals, all while promoting the environmental benefits of digital cards."
                },
                {
                    name: "David",
                    company: "Sirona Hygiene",
                    image: "img/users/2.png",
                    quote: "David’s Networking Solutions David, a seasoned networker and entrepreneur, recognized the potential of digital business cards and launched a reselling business targeted at professionals and corporate clients. He helped executives replace paper business cards with customized digital versions that could be easily shared through QR codes and links. His personalized service and focus on streamlining the professional networking process helped him build a strong client base, earning him long-term recurring revenue."
                },
                {
                    name: "Lara",
                    company: "Glide Route Ventures",
                    image: "img/users/3.png",
                    quote: "Lara’s Event Marketing Business Lara, who specialized in organizing conferences and events, began offering digital business cards to exhibitors and attendees as a part of her event packages. The ability to instantly share contact information and promote services through QR codes made the digital cards a hit at trade shows and networking events. As her event marketing business grew, she expanded her offering to include a digital business card reseller program, adding a new revenue stream and offering clients a modern way to connect."
                },
                {
                    name: "Daniel",
                    company: "Glide Route Ventures",
                    image: "img/users/3.png",
                    quote: "Daniel’s E-Commerce Reseller Daniel launched an online e-commerce store selling digital business card subscriptions. By targeting startups, influencers, and freelancers, he offered customizable templates, analytics, and integration with social media. His ability to provide flexible plans and offer free trials helped him grow a loyal customer base. Daniel capitalized on the growing trend of digital transformation and earned passive income by promoting digital business cards online."
                },
                {
                    name: "Sophia",
                    company: "Glide Route Ventures",
                    image: "img/users/3.png",
                    quote: "Sophia’s Sustainable Branding Reseller Sophia, a sustainability advocate, created a niche digital business card reseller business that targeted eco-conscious professionals and businesses. By promoting the environmental benefits of going paperless and offering custom-branded digital cards, Sophia built a loyal customer base. Through social media marketing, content creation, and strategic partnerships with eco-friendly organizations, she was able to scale her reselling business and establish herself as an authority in the sustainability and digital branding space."
                },
            ]
        }
    },
    computed: {
        currentStory() {
            return this.stories[this.currentIndex];
        }
    },
    methods: {
        nextStory() {
            this.currentIndex = (this.currentIndex + 1) % this.stories.length;
        },
        prevStory() {
            this.currentIndex = (this.currentIndex - 1 + this.stories.length) % this.stories.length;
        }
    }
}
</script>

<style scoped>
.dot {
    height: 10px;
    width: 10px;
    background-color: #000;
    border-radius: 50%;
    display: inline-block;
}

.dot.active {
    background-color: var(--brand-color);
}
</style>