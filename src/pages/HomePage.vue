<template>
    <div class="text-dark">
        <TopBanner />
        <Banner brandColorOne="#125252" v-observe /> 
        <div class="my-5">
            <WhyChooseUs :description="whychooseUs" title="why choose us" v-observe />
        </div>
        <div class="my-5">
            <LeadManagement :values="leads" title="List of Incredible Features" subtitle="Coming soon"
                v-observe />
        </div>
        <div class="my-5">
            <AutoScrolling v-observe />
        </div>
        <div class="my-5" id="second">
            <PriceSection v-observe />
        </div>
        <div class="my-5">
            <StepsForRegistration v-observe />
        </div>
        <div class="my-5">
            <SalesFunnel v-observe />
        </div>
        <div class="">
            <BookDemo :faqs="faqs" image-src="/img/demo.svg" title="Schedule a free demo" v-observe />
        </div>
        <div class="">
            <BusinessCounter brandColorOne="#125252" brandTextColor="#78E6B7" name1="customers" :value1="50"
                name2="years" :value2="1" name3="team" :value3="150" v-observe />
        </div>

        <div class=" ">
            <TempFaqs :faqs="faqs" image-src="/img/faq.svg" title="Frequently asked questions" image-position="left"
                v-observe />
        </div>

        <div class="py-5">
            <HomeTestimonialSection />
        </div>
        <BottomShareIcons />
    </div>
    <div class="">
        <div class="container rounded-top-5 bg-light" v-observe>
            <div class="row p-3 justify-content-center align-items-center">
                <div class="col-12  mt-md-0 text-center">
                    <h1 class="text-uppercase my-3">Required a digital business card?</h1>
                    <p class="text-capitalize fs-5 fw-bold">"you will get your digital business card instantly!"</p>
                    <h1 class="text-uppercase cutout my-3"><span>Contact Us</span></h1>
                    <p class="text-capitalize fs-5 fw-bold">"let's build an awesome business together "</p>
                </div>
                <div class="col-12 pt-4 text-center">
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ContactForm from "@/components/ContactForm.vue";
import TopBanner from "@/components/HomeTopNav.vue";
import Banner from "@/components/HomeBanner.vue";
import LeadManagement from "@/components/LeadManagement.vue";
import AutoScrolling from "@/components/AutoScrolling.vue";
import BookDemo from "@/components/BookDemo.vue";
import PriceSection from "@/components/PriceSection.vue";
import StepsForRegistration from "@/components/StepsForRegistration.vue";
// import SalesFunnel from "@/components/SalesFunnel.vue";
import BusinessCounter from "@/components/HomeCounter.vue";
import WhyChooseUs from "@/components/WhyChooseUs.vue";
import TempFaqs from "@/components/HomeFaq.vue";
import BottomShareIcons from "@/components/BottomShareIcons.vue";
import HomeTestimonialSection from "@/components/HomeTestimonialSection.vue";
export default {
    name: "ListYourBusiness",
    components: {
        ContactForm,
        TopBanner,
        Banner,
        LeadManagement,
        AutoScrolling,
        BookDemo,
        PriceSection,
        StepsForRegistration,
        // SalesFunnel,
        BusinessCounter,
        WhyChooseUs,
        TempFaqs,
        BottomShareIcons,
        HomeTestimonialSection,
    },
    data() {
        return {
            faqs: [
                {
                    id: 1,
                    question: "What does a CRM system do ?",
                    answer: "At its core, the CRM system is designed to manage communications with customers and align all stakeholders involved in interactions with them. However, CRM systems have evolved to perform complex tasks like automating processes, setting up workflows, tracking all conversations and using all the sales and marketing data to derive meaningful reports."
                },
                {
                    id: 2,
                    question: "Why is CRM important for marketers?",
                    answer: "With CRM, marketers can check the performance of their marketing sources, evaluate touchpoints, and more. A CRM helps marketers better understand customers and tune their messaging accordingly. Marketers can also personalize their messages using lead details captured in the CRM platform."
                },
                {
                    id: 3,
                    question: "What is CRM software used for?",
                    answer: "Aligning teams and automating customer-facing processes. Standardizing sales processes and automating them. Managing customer tickets. Tracking the performance of various marketing sources. Reporting and analytics"
                },
                {
                    id: 4,
                    question: "Why is CRM important in sales?",
                    answer: "Because sales reps pursue many leads, CRM plays a significant role in organizing them as per their stages in the sales pipeline. It also helps them keep track of interactions with prospects, schedule meetings, set reminders, and more."
                },
                {
                    id: 5,
                    question: "How much does a CRM system cost?",
                    answer: "Depending on the features, the cost of a CRM system may start from $10-$25 per user per month. CRM companies also offer custom plans for specific features."
                },
            ],
            social: [
                {
                    id: 1,
                    name: "Instagram",
                    url: "http://www.instagram.com/"
                },
                {
                    id: 2,
                    name: "Facebook",
                    url: "http://www.facebook.com/"
                },
                {
                    id: 3,
                    name: "Linkdin",
                    url: "http://in.linkedin.com/"
                },
                {
                    id: 4,
                    name: "Youtube",
                    url: "http://www.youtube.com/"
                },
            ],
            whychooseUs: [
                {
                    title: 'Ensure Zero Lead Leakage',
                    icon: 'bi-headset'
                },
                {
                    title: 'No Missing Follow - ups',
                    icon: 'bi-thumbs-up'
                },
                {
                    title: "Increase 80 % Additional Sales",
                    icon: 'bi-currency-ruppee'
                },
                {
                    title: "Cost effective",
                    icon: 'bi-journal'
                },
                {
                    title: "Secured Plateform",
                    icon: 'bi-stars'
                },
                {
                    title: "Free support",
                    icon: 'bi-stars'
                },
                {
                    title: "Modern Interface",
                    icon: 'bi-stars'
                },
                {
                    title: "Easy Setup & Fast Adoption",
                    icon: 'bi-stars'
                },
            ],
            leads: [
                {
                    id: 432,
                    icon: 'bi-magnet fs-4',
                    image: "/img/features/Account Views.png",
                    title: 'Views',
                    description: 'Get in touch with customers by using our contact form and sync their data with a CRM of your favour.'
                },
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    image: "/img/features/Achievements.png",
                    title: "Achievements",
                    description: "Capture leads from all sources- website, facbook, google, lead providers, referrals - onto one platform with zero leakage.",
                },
                {
                    id: 2,
                    icon: 'bi-diagram-3 fs-4',
                    image: "/img/features/Hearts.png",
                    title: "Hearts",
                    description: "Easily track and distribute leads between your teams based on requirements or other dynamic criteria.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    image: "/img/features/Promote.png",
                    title: "Promotes",
                    description: "Automate sales processes. Communicate with leads across various channels.",
                },
                {
                    id: 5,
                    icon: 'bi-telephone fs-4',
                    image: "/img/features/Reactions.png",
                    title: "Reactions",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
                {
                    id: 65,
                    icon: 'bi-whatsapp fs-4',
                    image: "/img/features/Reviews.png",
                    title: "Reviews",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
                {
                    id: 65,
                    icon: 'bi-whatsapp fs-4',
                    image: "/img/features/Testimonial.png",
                    title: "Testimonial",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
            ],
            customers: [
                {
                    id: 1,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Ram',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "We initially thought Saleswik was a small tool that only stores client data but once we started working on it, we knew its depth. We are very excited to use the new features like Team Pipelines, Email-in, and File Cabinet. We 100% recommend Saleswik to everyone!"
                },
                {
                    id: 2,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Shyam',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik was the perfect solution for our startup, which was moving from paper-based and Excel sheets to an automated solution for sales outreach and managing incoming calls. It has all the basic functionality of other leading CRMs at half the price. In addition, onboarding/training was provided at no additional cost. I highly recommend Zoho Saleswik for any micro business."
                },
                {
                    id: 3,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Nikhil',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Loved its UI. I have tried many other apps but this app is the best. The details in which the products are shown in picture is above all."
                },
                {
                    id: 4,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Abhishek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The general idea was to keep everything in one place and at an affordable price, and Saleswik was very accessible that way, and with the ability to expand without switching CRMs."
                },
                {
                    id: 5,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Rajan',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "When you work with software that is structured with features that make it so easy to use—that's when you realize you've struck gold and you don't want to go anywhere else. The pricing is also just right and ideal for small businesses."
                },
                {
                    id: 6,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Yogesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4.5',
                    text: "Saleswik has been really helpful for us to keep a track on contacts and deals. Since we are small team, Saleswik was so user-friendly that we were able to start using from week 1 of our trial."
                },
                {
                    id: 7,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Lokesh',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "The CRM options available in the market are either too expensive, with complex features that are not essential for a small business, or are priced less with nominal features. But Saleswik is game-changing. It has exceeded our expectations such that V4 Creative cannot work without it."
                },
                {
                    id: 8,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Bhasker',
                    company: 'XYz Pvt Ltd',
                    rating: '3.5',
                    text: "As vendor and customers needed order visibility, we wanted to automate the entire business and found only Saleswik to be the best suited in terms of integration."
                },
                {
                    id: 9,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Vivek',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has stayed true to its value proposition—a CRM tailored for small businesses and startups."
                },
                {
                    id: 10,
                    show: false,
                    imgr: '/img/users/5.png',
                    name: 'Ankit',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since the implementation of Saleswik, we have seen positive outcomes in business operations and the accessibility of data. One glance at the Dashboards indicates the performance of my sales folks!"
                },
                {
                    id: 11,
                    show: false,
                    imgr: '/img/users/1.png',
                    name: 'Karan',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "The mobile app of Saleswik increases productivity on a whole different level. As a small business, it gives us the edge over our competitors and we're very happy to use Saleswik!"
                },
                {
                    id: 12,
                    show: false,
                    imgr: '/img/users/2.png',
                    name: 'Rajat',
                    company: 'XYz Pvt Ltd',
                    rating: '4',
                    text: "Saleswik helps me stay on track, lets me know where I am at any point of time and what I need to do to reach where I really want to go!"
                },
                {
                    id: 13,
                    show: false,
                    imgr: '/img/users/3.png',
                    name: 'Ajay',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Since I started using Saleswik, no lead has been lost. The student conversion rate has increased by 25 percent, to 30 percent."
                },
                {
                    id: 14,
                    show: false,
                    imgr: '/img/users/4.png',
                    name: 'Vikas',
                    company: 'XYz Pvt Ltd',
                    rating: '5',
                    text: "Saleswik has helped us to decentralize information. Now all the team has access to the documents and sales information. We no longer have the problem that some documents is stored on the PC of a teammate who is not accessible at the time."
                },
            ]
        }
    },
}
</script>