<template>
    <div class="container">
        <!-- <h1 class="text-warning mb-3">Access our tools to grow faster on Covisor Biz</h1> --> 
        <p class="mb-5 fs-5">
            We understand that your online business may require additional support from time to time, and we've got you
            covered.
            With your Covisor Biz account, you gain access to a range of software and marketing tools designed to grow your business upto 5x.
        </p> 
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="tool in tools" :key="tool.title">
                <div class="card h-100 border-secondary text-dark" >
                    <div class="card-body text-start">
                        <div class="d-flex align-items-center">
                            <i :class="tool.icon" class="fs-3"></i>
                            <span class="ms-3 text-capitalize">{{ tool.title }}</span>
                        </div>
                        <p class="card-text smaller">{{ tool.description }}</p>
                        <!-- <a href="#" class="text-decoration-none text-warning">Learn More</a> -->
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
            tools: [
                {
                    id: 432,
                    icon: 'bi-magnet fs-4',
                    title: 'sales funnel landing page',
                    description: 'Get in touch with customers by using our contact form and sync their data with a CRM of your favour.'
                },
                {
                    id: 1,
                    icon: 'bi-funnel fs-4',
                    title: "Lead capture automation",
                    description: "Capture leads from all sources- website, facbook, google, lead providers, referrals - onto one platform with zero leakage.",
                },
                {
                    id: 2,
                    icon: 'bi-diagram-3 fs-4',
                    title: "Lead distribution",
                    description: "Easily track and distribute leads between your teams based on requirements or other dynamic criteria.",
                },
                {
                    id: 4,
                    icon: 'bi-megaphone fs-4',
                    title: "Sales automation",
                    description: "Automate sales processes. Communicate with leads across various channels.",
                },
                {
                    id: 5,
                    icon: 'bi-telephone fs-4',
                    title: "Direct Call Integration",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
                {
                    id: 65,
                    icon: 'bi-whatsapp fs-4',
                    title: "WhatsApp Call Integration",
                    description: "Call prospects in just one click . Track and record conversations to ensure high compliance and productivity.",
                },
                {
                    id: 6,
                    icon: 'bi-clipboard-data fs-4',
                    title: "Real-time reports",
                    description: "Over 135+ reports help you measure every piece of your process.",
                },
                {
                    id: 32,
                    icon: 'bi-box-arrow-in-down-left fs-4',
                    title: "Import Leads",
                    description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                },
                {
                    id: 43,
                    icon: 'bi-box-arrow-up-right fs-4',
                    title: "Export Leads",
                    description: "Over 135+ reports help you measure every piece of your process - from campaign spending to sales closure rates.",
                },
                {
                    id: 13,
                    icon: 'bi-stars fs-4',
                    image: 'img/features/custom.png',
                    title: 'Leads Auto qualification',
                    description: 'Qualify leads based on their region, behavior, and other parameters'
                },

                {
                    id: 72,
                    icon: 'bi-archive fs-4',
                    title: 'Add relevant details',
                    description: 'Add notes, labels, or other documents to record in CRM.'
                },

                {
                    id: 31,
                    icon: 'bi-stack-overflow fs-4',
                    image: 'img/features/wallet.png',
                    title: 'Automate activites',
                    description: 'Create workflows for faster, error-free communication and service.'
                },
                {
                    id: 623,
                    icon: 'bi-people fs-4',
                    title: 'User management',
                    description: 'Invite all your team members, upload them by Excel/CSV or connect with Microsoft 365 or google workspace.'
                },
                {
                    id: 823,
                    icon: ' bi-ui-checks fs-4',
                    title: 'Stay connected',
                    description: 'Receive real-time notification about activities in CRM across devices.'
                },
                {
                    id: 823,
                    icon: ' bi-calendar2-date fs-4',
                    title: 'Schedule Leads',
                    description: 'Receive real-time notification about activities in CRM across devices.'
                },
                {
                    id: 54,
                    icon: ' bi-lightning fs-4',
                    image: 'img/features/uniform.png',
                    title: 'Close deals quickly',
                    description: "Generate invoices within CRM from prospect's record and update the deal stage and status."
                },

            ]
        }
    }
}
</script>