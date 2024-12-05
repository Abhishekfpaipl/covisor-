<template>
    <div class="text-bg-light top-padding">
        <CarouselBanner />
        <ResllerImage />
        <div class="text-center  py-5 text-bg-light">
            <div class="container">
                <p class="fs-1 fw-bold mb-0 text-capitalize">Become our authorized reseller</p>
                <p class="fs-5 fw-bold text-capitalize">Partnered with us and start your own business</p>
                <p>The reselling business opportunity for digital business cards offers a unique chance to tap into the
                    growing demand for professional digital identities in today's connected world. As businesses and
                    individuals look for ways to update and modernize their professional presence, digital business
                    cards have become an essential tool. Resellers can take advantage of this trend by offering
                    customizable, shareable, and eco-friendly business cards to a wide range of potential clients.

                    Digital business cards provide a modern, interactive solution for individuals and companies to share
                    contact details, social profiles, and professional information. As a reseller, you can offer
                    personalized digital cards, integrate unique features such as QR codes, payment links, social media
                    sharing, and analytics tools that help clients track card views and engagement.</p>
            </div>
        </div>
        <div class="py-5" v-observe>
            <div class="sticky-nav my-4">
                <div class="d-flex gap-3 p-3 py-2 overflow-x-scroll border-top border-bottom border-secondary"
                    id="scroll" style="background-color:black !important; white-space: nowrap;">
                    <div v-for="(section, index) in sections" :key="index">
                        <a :href="'#' + section.id" class="nav-link text-white"
                            @click.prevent="scrollToSection(section.id)"
                            :class="{ active: activeSection === section.id }">
                            {{ section.name }}
                        </a>
                    </div>
                </div>
            </div>

            <div class="container">
                <section v-for="(section, index) in sections" :key="index" :id="section.id" class="section"
                    style="padding-top:30px">
                    <h1 class="text-center text-warning mb-3 text-uppercase">{{ section.name }}</h1>
                    <component :is="section.component"></component>
                </section>
            </div>
        </div>
    </div>
</template>


<script>
import BenefitSection from "@/components/reseller/BenefitSection.vue"
import PriceSection from "@/components/reseller/PriceSection.vue"
import ProfitSection from "@/components/reseller/ResellerPriceSection.vue"
import AccessSection from '@/components/business/AccessSection.vue';
import FaqSection from "@/components/reseller/FaqSection.vue"
import ResellerAbout from "@/components/reseller/ResellerAbout.vue"
import SuccessStory from '@/components/business/SuccessStory.vue';
import ResllerImage from '@/components/reseller/ResllerImage.vue';
import BusinessCounter from '@/components/business/BusinessCounter.vue';
import BusinessSell from '@/components/business/BusinessSell.vue';
import HowItWorks from '@/components/business/HowItWorks.vue';

export default {
    name: 'CareerPage',
    components: {
        BenefitSection,
        PriceSection,
        ProfitSection,
        AccessSection,
        FaqSection,
        ResellerAbout,
        SuccessStory,
        ResllerImage,
        BusinessCounter,
        BusinessSell,
        HowItWorks,
    },
    data() {
        return {
            sections: [
                { id: 'Price', name: 'Price', component: 'PriceSection' },
                { id: 'Cost', name: 'Cost', component: 'ProfitSection' },
                { id: 'Software', name: 'Software', component: 'AccessSection' },
                { id: 'Opportunity', name: 'Opportunity', component: 'BusinessCounter' },
                { id: 'Benefits', name: 'Benefits', component: 'BenefitSection' },
                { id: 'Why Choose', name: 'Why Choose', component: 'BusinessSell' },
                { id: 'How It Works', name: 'How It Works', component: 'HowItWorks' },
                { id: 'Success Story', name: 'Success Story', component: 'SuccessStory' },
                { id: 'FAQ', name: 'FAQ', component: 'FaqSection' },
                { id: 'About', name: 'About', component: 'ResellerAbout' },
            ],
            activeSection: '',
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        scrollToSection(id) {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        },
        handleScroll() {
            const scrollPosition = window.scrollY;
            this.sections.forEach(section => {
                const el = document.getElementById(section.id);
                if (el && scrollPosition >= el.offsetTop - 200) {
                    this.activeSection = section.id;
                }
            });
        },
    }
}
</script>


<style scoped>
.nav-link {
    color: black;
    text-decoration: none;
    padding: 5px 10px;
}

.nav-link.active {
    border-bottom: 2px solid var(--brand-color);
    color: var(--brand-color) !important;
    font-weight: 600 !important;
}

.sticky-nav {
    position: sticky;
    top: 70.5px !important;
    z-index: 9;
    background-color: white;
}
</style>