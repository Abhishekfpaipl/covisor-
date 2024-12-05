<template>
    <div class="brandText my-3 py-3">
        <div class="container">
            <h1 class="text-center text-capitalize">Covisor Biz Pricing.</h1>
            <small>Bigin's promise to you is simple: No forced multi-year contracts, no hidden charges. You don't need
                to enter your credit card information to get started. Cancel anytime!</small>

            <div class="my-3">
                <div class="tab-content mt-2 pt-4" id="pills-tabContent">
                    <div class="tab-pane fade" :class="{ 'show active': index === 0 }" v-for="(price, index) in pricing"
                        :key="index" :id="'content-' + index" role="tabpanel" :aria-labelledby="'tab-' + index"
                        tabindex="0">
                        <div class="d-md-flex justify-content-center gap-3">
                            <div v-for="(plan, index) in price.plans" :key="index"
                                class="card mb-3 px-3 bg-light text-dark rounded-0"
                                :class="{ 'recommended': index === 1 }">

                                <div v-if="index === 1" class="position-absolute top-0 start-0 m-2 ms-0"
                                    style="font-size: 12px;">
                                    <span class='text-white bg-danger p-1 px-2 rounded-end-3'>Recommended</span>
                                </div>

                                <div class="py-2 border-bottom fw-bold">{{
                                    plan.name }}</div>
                                <div class="card-body text-center">
                                    <p class="mb-0 card-title fs-3">₹ <span class="fw-bold">{{ plan.price }} </span></p>
                                    <p class="mb-0 "> <span class="smaller">Plus 18% gst</span></p>
                                    <p><small class="text-capitalize">{{ plan.tag
                                            }}</small></p>
                                    <div class="d-flex justify-content-center align-items-center">
                                        <p class="fw-light bg-dark  d-inline-block px-4 rounded-3">
                                            <span class="text-decoration-line-through text-white">{{ plan.mrp }}</span>
                                            <span class="text-white"> ({{ getDiscount(plan) }}% discount)</span>
                                        </p>
                                    </div>

                                    <ul v-if="plan.features" class="list-group">
                                        <small class="text-start text-uppercase fw-bold my-2 text-primary">{{ plan.key
                                            }}</small>
                                        <li v-for="(feature, featureIndex) in plan.features" :key="featureIndex"
                                            class="bg-light text-dark px-0 d-flex justify-content-between list-group-item text-start text-capitalize border-0">
                                            <div class="">
                                                <i class="bi bi-check-circle text-success"></i>
                                                <span class="px-2">
                                                    {{ feature.text }}
                                                </span>
                                            </div>
                                            <i class="bi bi-info-circle" data-bs-toggle="tooltip"
                                                data-bs-placement="top" data-bs-custom-class="custom-tooltip"
                                                :data-bs-title="feature.tooltip"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="card-footer bg-light p-0 border-top pt-2">
                                    <p class="card-text text-capitalize smaller">{{ plan.description }}</p>
                                    <div class="d-flex justify-content-center gap-2 my-3">
                                        <button class="btn btn-danger w-100">{{ plan.button }}</button>
                                    </div>
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
            pricing: [
                {
                    id: 2,
                    name: "Yearly",
                    description: "This is a basic plan",
                    plans: [
                        {
                            id: 1,
                            name: "Lite",
                            price: "1,000",
                            mrp: "1,200",
                            tag: "/account/year",
                            description: "Start with our lite plan and upgrade only when you need additional features.",
                            button: "Get Started",
                            key: "key features",
                            features: [
                                { text: "Contact Details", },
                                { text: "Social Profiles", },
                                { text: "Share", },
                                { text: "Qr Code", },
                                { text: "Fun Facts", },
                                { text: "Attributes", },
                                // {
                                //     text: "single Pipelines",
                                //     tooltip: "get a quick summary fo your customer-facing process and manage opportunities across different stages."
                                // },
                                // {
                                //     text: "500 Records",
                                //     tooltip: "Each row of data you enter in pipelines, contacts, companies, activities and notes are called records in covisor."
                                // },
                                // {
                                //     text: "Automations (3)",
                                //     tooltip: "Automate repetitive actions by setting up triggers and specifying the conditions to be met for the execution of the actions."
                                // },
                                // {
                                //     text: "telephony",
                                //     tooltip: "Make and receive phone calls, record them , set up automated voice responses, and use call routing--dicrectly in covisor."
                                // },
                                // {
                                //     text: "zapier, covisor desk , covisor campaigns, and covisor forms integration",
                                //     tooltip: "Seamless integrate covisor with other third party apps."
                                // },
                                // {
                                //     text: "apps for IOS, iPadOS, android and macOS",
                                //     tooltip: "Enjoy a fully featured covisor app for mobile devices that enables yout to do everthing you can do on your desktop while on the go."
                                // },
                                // {
                                //     text: "developer APIs",
                                //     tooltip: "Highly secure developer APIs that help you contact covisor to any third-party app of your choice"
                                // },
                                // {
                                //     text: "standard dashboard",
                                //     tooltip: "Monitor your business performance with charts and KPIs. Create your own dashboards and keep them privae or share them with everyone else."
                                // }
                            ]
                        },
                        {
                            id: 2,
                            name: "Pro",
                            price: "3,000",
                            mrp: "5,000",
                            tag: "/account/year",
                            description: "Choose the right set of features you need to begin your Networking journey.",
                            button: "Get Started",
                            button2: "Buy now",
                            key: "key features",
                            features: [
                                { text: "All features of lite plan", },
                                { text: "Skillset", },
                                { text: "Timeline", },
                                { text: "Payment", },
                                { text: "Website Widget", },
                                // {
                                //     text: "Team Pipelines (3)",
                                //     tooltip: "Create distinct pipelines for every team and unify all your customer-facing operations."
                                // },
                                // {
                                //     text: "500000 Records",
                                //     tooltip: "Each row of data you enter in pipelines, contacts, companies, activities adn notes are called records in covisor. You can purchase additional records if you need to store more than 50000 records."
                                // },
                                // {
                                //     text: "Automations (30)",
                                //     tooltip: "Automate a wider range of instant actions to further reduce the time, effort, and errors that go into doing mundane tasks."
                                // },
                                // {
                                //     text: "Email & WhatsApp Business Integration",
                                //     tooltip: "Connect all major services to your covisor account with IMAP, send mass emails, and get email open/click notifications."
                                // },
                                // {
                                //     text: "Mass emails with email insights",
                                //     tooltip: "Send emails to multiple customers with a single click and use insights to capture the exact status of each email."
                                // },
                                // {
                                //     text: "No-code forms for contact & pipelines",
                                //     tooltip: "Deploy covisor webforms on your website easily to  collect information from your website visitors."
                                // },
                                // {
                                //     text: "10 custom fields/module",
                                //     tooltip: "Create custom fields that suit your business needs."
                                // },
                                // {
                                //     text: "Customizable dashboards with charts and KPIs",
                                //     tooltip: "Customize your dashboards according to your needs and analyze your business performance with carts and KPIs."
                                // },
                                // {
                                //     text: "Integrate with covisor Books/Invoice, covisor CRM and covisor Meeting",
                                //     tooltip: "Seamlessly integrate covisor with other third party apps."
                                // },
                                // {
                                //     text: "Integrate with Google Workspace, Microsoft 365, Zoom Meeting, Mailchimp, and Twitter",
                                //     tooltip: "Easily integrate with covisor apps and other third-party apps."
                                // },
                                // {
                                //     text: "Additional capabilities via toppings",
                                //     tooltip: "covisor offers topping like file cabinet and email in to enhance your CRM usage."
                                // }
                            ]
                        },
                        {
                            id: 3,
                            name: "Elite",
                            price: "10,000",
                            mrp: "25,000",
                            tag: "/account/year",
                            description: "Enjoy our advanced offering for fast-growing businesses and Networking.",
                            button: "Get Started",
                            button2: "Buy now",
                            key: "key features",
                            features: [
                                { text: "All features of pro plan", },
                                { text: "Views", },
                                { text: "Achievements", },
                                { text: "Hearts", },
                                { text: "Promotes", },
                                { text: "Reactions", },
                                { text: "Reviews", },
                                { text: "Testimonial", },
                                // {
                                //     text: "Team Pipelines",
                                //     tooltip: "Get aquick summary of every customer-facing operation by creating distinct pipelines for each team."
                                // },
                                // {
                                //     text: "100000 Records",
                                //     tooltip: "Each row of data you enter in pieplines, contacts, companies, activities and notes are called records in covisor. You can purchase additional records if you need to store more than 100000 records."
                                // },
                                // {
                                //     text: "Advanced automation (50)",
                                //     tooltip: "Schedule workflows that are triggered at specified time intervals."
                                // },
                                // {
                                //     text: "Stage transition rules",
                                //     tooltip: "Set up rules for moving deals in your pipelines, create checkpoints to enxure deals properly transition between stages."
                                // },
                                // {
                                //     text: "Sell globally with multiple currencies",
                                //     tooltip: "Run operations in more than just your local currency. covisor takes care of all exchange rates and conversions."
                                // },
                                // {
                                //     text: "Additional field type: lookup, user fields",
                                //     tooltip: "Create new fields and establish connections between records within different modules for your own context."
                                // },
                                // {
                                //     text: "25 custom fields per module",
                                //     tooltip: "Create custom fields that suit your business needs."
                                // },
                                // {
                                //     text: "Cleanup duplicates",
                                //     tooltip: "Manage and clean up duplicate records in your CRM more effectively."
                                // },
                                // {
                                //     text: "Target meter - dashboards",
                                //     tooltip: "Set and monitor important targets for your sales and customer-facing teams."
                                // },
                                // {
                                //     text: "Increased feature limits",
                                //     tooltip: "Enjoy the highest possible feature limits on key covisor features."
                                // }
                            ]
                        }
                    ]
                },
            ],


        };
    },
    mounted() {
        this.initTooltips();
    },
    updated() {
        this.initTooltips();
    },
    methods: {
        initTooltips() {
            // Initialize tooltips (assuming using Bootstrap's tooltip)
            const tooltipTriggerList = [].slice.call(
                document.querySelectorAll('[data-bs-toggle="tooltip"]')
            );
            tooltipTriggerList.forEach(function (tooltipTriggerEl) {
                new window.bootstrap.Tooltip(tooltipTriggerEl);
            });
        },
        getDiscount(plan) {
            if (plan.mrp && typeof plan.mrp === 'string') {
                const mrp = parseFloat(plan.mrp.replace(/[^\d.-]/g, ''));
                const price = parseFloat(plan.price.replace(/[^\d.-]/g, ''));
                if (!isNaN(mrp) && !isNaN(price) && mrp > 0) {
                    return ((mrp - price) / mrp * 100).toFixed(0);
                }
            }
            return 0;
        }

    }
};
</script>

<style scoped>
.nav-link {
    transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link.active {
    background-color: var(--bg-primary) !important;
    color: white !important;
    transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
    transform: scale(1.2);
}

.sticky-container {
    position: sticky;
    top: 70px;
    z-index: 10;
    background-color: white;
}
</style>
