<template> 
    <div class="container px-3 px-md-0">
        <div class="row d-flex justify-content-center pb-5 pt-2">
            <div class="col-lg-4 row row-cols-1 g-3 mt-0">
                <div v-for="(service, index) in servicesLeft" :key="index" class="col">
                    <div class="d-flex align-items-start">
                        <i class="bi fs-4 pe-4" :class="service.icon"></i>
                        <div class="d-flex flex-column text-start flex-fill">
                            <p class="fs-5 fw-b title mb-0">{{ service.heading }}</p>
                            <small class="smaller fw-light mb-0">{{ service.description }}</small>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-lg-4 overflow-hidden p-5 mt-0">
                <img src="/img/benefit.svg" class="h-100 w-100 of-cover">
            </div>


            <div class="col-lg-4 row row-cols-1 g-3 mt-0">
                <div v-for="(service, index) in servicesRight" :key="index" class="col">
                    <div class="d-flex align-items-start">
                        <i class="bi fs-5 pe-4" :class="service.icon"></i>
                        <div class="d-flex flex-column text-start flex-fill">
                            <p class="fs-5 fw-b title mb-0">{{ service.heading }}</p>
                            <small class="smaller fw-light mb-0">{{ service.description }}</small>
                        </div>
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
            works: [

            ],
            servicesLeft: [
                {
                    icon: 'bi bi-shop fs-3',
                    heading: 'Low Startup Cost',
                    description: "Reselling digital business cards involves minimal upfront investment. Since you don't have to worry about physical products or shipping logistics, your primary expenses will be in marketing and customer acquisition."
                },
                {
                    icon: 'bi bi-currency-rupee fs-3',
                    heading: "Eco-Friendly",
                    description: "As the world moves toward sustainability, digital business cards provide an eco-friendly alternative to traditional paper cards. By promoting digital cards, you’re contributing to reducing paper waste."
                },
                {
                    icon: 'bi bi-headset fs-3',
                    heading: "High Demand",
                    description: "Digital business cards are in demand as more people move towards digital solutions for their personal and business networking. Offering these cards positions you at the forefront of a growing market."
                },
                {
                    icon: 'bi bi-diagram-2 fs-3',
                    heading: "Recurring Revenue Model",
                    description:"Many digital business card programs offer subscription-based services, meaning you can earn recurring income from clients who renew their digital cards annually or monthly."
                },
            ],
            servicesRight: [ 
                {
                    icon: 'bi bi-bar-chart-line fs-3',
                    heading: "Customizable Solutions",
                    description: "You can offer clients a range of customization options such as logos, color schemes, and interactive features like QR codes, social media links, and personalized contact details."
                },
                {
                    icon: 'bi bi-lock fs-3',
                    heading: "Scalable Business",
                    description: "Reselling digital cards allows you to scale easily without worrying about inventory management or supply chain issues. Your only focus will be growing your client base and expanding your service offerings."
                },
                {
                    icon: 'bi bi-phone fs-3',
                    heading: "Remote Business",
                    description: "Reselling digital cards can be run from anywhere, making it a perfect opportunity for home-based or remote businesses. All you need is a computer and an internet connection to get started."
                }, 
            ]
        }
    },
}

</script>