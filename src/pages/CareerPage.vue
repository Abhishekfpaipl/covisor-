<template>
    <div class="text-bg-light top-padding">
        <div class="">
            <img src="/img/careerBanner.jpg" alt="banner" class="d-none d-md-block"
                style="width: 100%; height:700px; object-fit: cover; object-position: center;">
            <img src="/img/careerBanner.jpg" class="d-md-none d-block" alt="banner" style="width: 100%;">
        </div>

        <div class="py-5">
            <div class="container">
                <h1 class="text-center text-warning mb-4 text-capitalize">Employee Benefits</h1>
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                    <div v-for="(data, index) in works" :key="index" class="col">
                        <div class="d-flex flex-column justify-content-center align-items-center border my-1 py-2"
                           >
                            <i :class="data.icon" class="fs-4 p-1"></i>
                            <p class="fw-bold mb-1 text-capitalize">{{ data.heading }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class=" container py-5" v-observe>
            <h1 class="text-center text-warning mb-4 text-capitalize">Our Core Values</h1>
            <p class="text-center container">
                One thing that we've tried to keep consistent through all these years is our core set of values and
                beliefs.
                They have helped us get to where we are today, and they guide us as we grow. We inculcate these
                values
                in
                everything we do - from the littlest of things to the biggest of decisions.
            </p>
            <div class="p-2 row">
                <div v-for="(data, index) in datas" :key="index" class="col-12 col-md-6 g-3">
                    <div class="d-flex align-items-center border p-2"
                        style=" min-height: 120px;">
                        <i :class="data.icon" class="fs-2 mx-3"></i>
                        <div class=" ms-2">
                            <span class="fw-bold">{{ data.heading }}</span>
                            <p>{{ data.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container bg-light py-5" v-observe>
            <div class="row py-5">
                <div class="col-12 col-md-6 d-flex justify-content-center align-items-center">
                    <img src="/img/career-benefit.svg" style="width: 500px; max-width: 80%" alt="">
                </div>
                <div class="col-12 col-md-6 text-center mt-4 mt-md-0">
                    <h1 class="text-center text-warning mb-4 text-capitalize">Get in touch</h1>
                    <form @submit.prevent="submitQuery()">
                        <div class="mt-2 form-floating">
                            <input type="text" class="form-control" placeholder="First Name" v-model="name">
                            <label for="floatingInput" class="ms-2 text-muted">Your name</label>
                        </div>
                        <div class="mt-2 form-floating">
                            <input type="text" class="form-control" placeholder="Business Name" v-model="designation">
                            <label for="floatingInput" class="ms-2 text-muted">Designation</label>
                        </div>
                        <div class="mt-2 form-floating">
                            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                                v-model="note"></textarea>
                            <label for="floatingTextarea" class="ms-2 text-muted">Notes</label>
                        </div>
                        <div class="col-12 mt-3">
                            <button class="btn btn-warning py-2 fs-5 w-100 rounded-0 text-dark"
                                type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CareerPage',
    data() {
        return {
            datas: [
                {
                    icon: 'bi bi-lightbulb',
                    heading: 'Think Different',
                    text: 'Random ideas, new suggestions, and challenging the norm are always welcome.'
                },
                {
                    icon: 'bi bi-person',
                    heading: 'Stay Weird, Be Yourself',
                    text: 'The Souled Store is strictly a judgment-free zone. Just be the best version of yourself.'
                },
                {
                    icon: 'bi bi-people',
                    heading: 'Respect Everyone',
                    text: 'Treat others how you’d like to be treated, and you have a happy family.'
                },
                {
                    icon: 'bi bi-check-square',
                    heading: 'Ownership Of Work',
                    text: 'Give every task, small or big, your best shot. Always remember- 99% right is 100% wrong.'
                },
                {
                    icon: 'bi bi-gear',
                    heading: 'Take Initiative',
                    text: 'Want to change something? Change it. See something that needs fixing? Fix it.'
                },
                {
                    icon: 'bi bi-graph-up',
                    heading: 'Growth & Learning',
                    text: 'Work with various teams and departments and learn something new every day.'
                },
            ],
            works: [
                {
                    icon: 'bi bi-currency-rupee',
                    heading: 'Competitive Salary'
                },
                {
                    icon: 'bi bi-bounding-box',
                    heading: 'Open Office Culture'
                },
                {
                    icon: 'bi bi-graph-up-arrow',
                    heading: 'Fast Growing Startup'
                },
                {
                    icon: 'bi bi-people-fill',
                    heading: 'Equal Opportunities'
                },
                {
                    icon: 'bi bi-emoji-smile',
                    heading: 'Boosting Employee Morale'
                },
                {
                    icon: 'bi bi-heart',
                    heading: 'Improving Well-being'
                },
                {
                    icon: 'bi bi-lightning',
                    heading: 'Increasing Productivity'
                },
                {
                    icon: 'bi bi-check2-circle',
                    heading: 'Fulfilling Legal Requirements'
                }
            ],
            name: '',
            designation: '',
            note: ''
        }
    },
    methods: {
        submitQuery() {
            if (this.name != "" && this.designation != "" && this.note != "") {
                const phoneNumber = '918860012001'; // Replace with your WhatsApp number
                const message = `Hello, my name is ${this.name}. I am : ${this.designation}. Here are some additional notes: ${this.note}.`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                this.name = "",
                    this.service = "",
                    this.note = "";
            }
        }
    }

}
</script>

<style lang="scss" scoped></style>