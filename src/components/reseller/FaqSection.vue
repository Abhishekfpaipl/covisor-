<template>
    <div class="container rounded-top-5 bg-light">
        <ul class="nav nav-pills justify-content-start align-items-center" id="pills-tab" role="tablist">
            <div class="d-flex overflow-x-scroll gap-3 my-3 p-2 px-3 rounded" id="scroll">
                <li class="nav-item border border-secondary rounded" role="presentation" v-for="(price, index) in faqs"
                    :key="index">
                    <button class="nav-link text-dark bg-light " style="white-space: nowrap"
                        :class="{ 'active': index === activeTabIndex }" :id="'tab-' + index" data-bs-toggle="pill"
                        :data-bs-target="'#content-' + index" type="button" role="tab"
                        :aria-controls="'content-' + index" :aria-selected="index === activeTabIndex"
                        @click="onTabClick(index)">{{
                            price.name
                        }}</button>
                </li>
            </div>
        </ul>

        <div class="tab-content" id="pills-tabContent">
            <div class="d-flex align-items-center shadow p-2 mb-3">
                <div class="input-group  mb-3">
                    <input type="search" class="form-control border-secondary text-dark" id="floatingInput"
                        v-model="searchTerm" @keyup.enter="search" ref="searchInput" placeholder="Search here...">
                    <span class="input-group-text border-secondary"
                        style="color:#FFF5DD !important; background-color: black !important" id="basic-addon1"> <i
                            class="bi bi-search me-2" @click="search"></i> Search</span>
                </div>
            </div>
            <div class="tab-pane fade" :class="{ 'show active': index === activeTabIndex }"
                v-for="(price, index) in faqs" :key="index" :id="'content-' + index" role="tabpanel"
                :aria-labelledby="'tab-' + index" tabindex="0">
                <div class="row">
                    <div class="col-12" v-for="(faq, index) in filteredFaqs(price.plans)" :key="index">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item my-2 border-0">
                                <h2 class="accordion-header border border-secondary">
                                    <button class="accordion-button collapsed bg-dark text-white border-start border-4 "
                                        type="button" data-bs-toggle="collapse"
                                        :data-bs-target="'#flush-collapseOne' + index" aria-expanded="false"
                                        :aria-controls="'flush-collapseOne' + index"
                                        style="border-color: var(--brand-color) !important;">
                                        <span class="me-2">Q{{ index + 1 }}.</span> {{ faq.question }}
                                    </button>
                                </h2>
                                <div :id="'flush-collapseOne' + index"
                                    class="accordion-collapse collapse border-0 bg-dark text-white"
                                    data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body text-start">{{ faq.answer }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PriceSection",
    data() {
        return {
            searchTerm: '',
            activeTabIndex: 0,
            faqs: [
                {
                    id: 109,
                    name: "All",
                    plans: [
                        {
                            "question": "What is a digital business card?",
                            "answer": "A digital business card is an electronic version of a traditional business card that can be shared via smartphones, email, or social media. It includes key details like your name, job title, contact information, and social media links, and can be customized with branding elements."
                        },
                        {
                            "question": "How does the reseller program work?",
                            "answer": "As a reseller, you partner with a digital business card provider and sell their services to your clients. You’ll earn a profit by marking up the pricing on the digital cards you sell. Many reseller programs offer customizable plans for individuals or businesses."
                        },
                        {
                            "question": "How do I customize the digital cards?",
                            "answer": "Most digital business card programs allow you to customize cards with your clients' branding, including logos, color schemes, and layout options. Some programs even allow you to add extra features like contact forms, social media links, payment options, and custom URLs."
                        },
                        {
                            "question": "Is there a subscription fee?",
                            "answer": "Yes, most digital business card services operate on a subscription model where customers pay annually or monthly to maintain their digital cards. You will receive a commission for each new customer and renewal."
                        },
                        {
                            "question": "Do I need a technical background to sell digital business cards?",
                            "answer": "No, you don’t need a technical background to sell digital business cards. Most platforms offer easy-to-use interfaces for customizing and managing cards. Your main focus will be marketing, customer support, and growing your business."
                        },
                        {
                            "question": "Can I resell to both individuals and businesses?",
                            "answer": "Yes, digital business cards can be sold to both individuals looking for a professional digital identity and businesses seeking to modernize their corporate branding. You can target entrepreneurs, professionals, small businesses, and large corporations."
                        },
                        {
                            "question": "Do I need to create my own website to sell digital cards?",
                            "answer": "While having your own website can help establish credibility and promote your services, it's not always necessary. Many reseller programs provide you with marketing materials, landing pages, and sales tools that you can use to promote the digital business cards."
                        },
                        {
                            "question": "What support will I get as a reseller?",
                            "answer": "Reseller programs typically offer training, sales tools, marketing materials, and customer support. You’ll have access to a dedicated team to help you with onboarding, handling customer queries, and offering troubleshooting assistance."
                        },
                        {
                            "question": "How much profit can I make as a reseller?",
                            "answer": "Your profit margin will depend on the pricing model of the digital business card program and the volume of sales you generate. Typically, resellers earn a commission on each sale and renewal, and profits can increase as you expand your customer base."
                        },
                        {
                            "question": "Do I need to keep stock or inventory?",
                            "answer": "No, as a digital card reseller, you won’t need to manage stock. All the services are cloud-based, and your customers will receive their digital cards through an online platform."
                        }
                    ]

                },
                // {
                //     id: 5,
                //     name: "Customer Onboarding",
                //     plans: [
                //         {
                //             question: "How do I get started with your services?",
                //             answer: "You can get started by contacting us through our website, phone, or email. We will arrange an initial consultation to understand your needs."
                //         },
                //         {
                //             question: "What is the onboarding process like?",
                //             answer: "Our onboarding process includes an initial consultation, needs assessment, proposal presentation, contract signing, and project kickoff."
                //         },
                //         {
                //             question: "Do you offer a trial period for your services?",
                //             answer: "Yes, we offer a trial period for certain services. Please contact us for more details."
                //         },
                //         {
                //             question: "How do you ensure a smooth transition to your services?",
                //             answer: "We have a dedicated onboarding team that works closely with new clients to ensure a smooth transition, including data migration, training, and ongoing support."
                //         }
                //     ]
                // },
                // {
                //     id: 8,
                //     name: "Contact and Support",
                //     plans: [
                //         {
                //             question: "How can I contact your support team?",
                //             answer: "You can contact our support team via phone, email, or live chat available on our website."
                //         },
                //         {
                //             question: "What are your support hours?",
                //             answer: "Our support hours are 24/7, ensuring assistance is available whenever you need it."
                //         },
                //         {
                //             question: "Where can I find documentation and resources?",
                //             answer: "Documentation and resources can be found in the client portal on our website."
                //         },
                //         {
                //             question: "How do I provide feedback on your services?",
                //             answer: "We welcome feedback and you can provide it through our website, by email, or during regular client meetings."
                //         }
                //     ]
                // }
            ],
        };
    },
    methods: {
        filteredFaqs(plans) {
            if (!this.searchTerm) {
                return plans;
            }
            const term = this.searchTerm.toLowerCase();
            return plans.filter(faq =>
                faq.question.toLowerCase().includes(term) || faq.answer.toLowerCase().includes(term)
            );
        },
        onTabClick(index) {
            this.activeTabIndex = index;
            this.scrollTabIntoView(index);
        },
        scrollTabIntoView(index) {
            const tabElement = document.getElementById(`tab-${index}`);
            if (tabElement) {
                tabElement.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    },
    mounted() {
        this.$refs.searchInput.focus();
    }
};
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.active {
    /* background-color:black!important; */
    background-color: black !important;
    border-bottom: 2px solid var(--brand-color) !important;
    color: var(--brand-color) !important;
    font-weight: 600;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.accordion-button:not(.collapsed) {
    color: black !important;
    background-color: var(--brand-color) !important;
    box-shadow: none !important;
}

.accordion-button:focus {
    z-index: 3;
    outline: 0;
    box-shadow: none !important;
}
</style>
