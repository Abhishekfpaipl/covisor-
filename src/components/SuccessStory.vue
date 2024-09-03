<template>
    <div class="container">
        <h1 class="pt-3">Our Success Story</h1>
        <div class="row mt-5">
            <div
                class="col-12 col-md-4 position-relative  d-flex align-items-center justify-content-center pt-5">
                <div class="card rounded-3">
                    <div class="image rounded-3">
                        <img href="#" :src="image" class="rounded-3" alt="Card image">
                    </div>
                    <div class="content">
                        <h3 class="mt-4 pt-2">{{ title }}</h3>
                        <p v-if="post" class="text-ellipsis2">{{ post }}</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-8 mt-5 mt-md-0 text-start">
                Covisor began as a small startup in 2015, founded by two brothers Ayush Gupta and Piyush Gupta with a shared
                vision of helping businesses thrive in the digital age. Initially offering basic website design
                services, they quickly expanded their expertise to include digital marketing and custom software
                development.
                Their breakthrough came in 2017 when they landed a contract with a struggling local retail chain.
                Covisor revamped the client's online presence, developed a user-friendly e-commerce platform, and
                implemented a targeted digital marketing campaign. Within six months, the client's online sales
                increased by 200%, and their overall revenue grew by 45%.
                This success story spread quickly, attracting clients from various industries. Covisor's team grew from
                2 to 20 employees in just two years. They became known for their innovative solutions and data-driven
                approach to digital marketing.
                <!-- In 2020, Covisor launched a proprietary AI-powered marketing analytics tool, which became a
                game-changer for their clients and a significant revenue stream for the company. By 2023, Covisor had
                offices in three major cities, a client base spanning 15 countries, and annual revenue exceeding $20
                million. -->
                Today, Covisor is recognized as an industry leader, known for its integrated approach to
                digital services and commitment to driving measurable results for its clients.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        tests: Array
    },
    data() {
        return {
            image: 'img/about/ayush.jpg',
            title: "Ayush Gupta",
            post: "Managing Director"
        }
    }

};
</script>

<style scoped>
.card {
    position: relative;
    max-width: 300px;
    height: 215px;
    background-color: #fff;
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
    transition: 0.3s ease-in-out;
}

.card:hover {
    height: 265px;
}

.image {
    position: relative;
    width: 230px;
    min-height: 230px;
    top: -40%;
    left: 0px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;
}

.image img {
    max-width: 100%;
    border-radius: 15px;
}

.content {
    position: relative;
    top: -140px;
    padding: 10px 15px;
    color: #111;
    text-align: center;
    visibility: hidden;
    opacity: 0;
    transition: 0.3s ease-in-out;
}

.card:hover .content {
    margin-top: 30px;
    visibility: visible;
    opacity: 1;
    transition-delay: 0.2s;
}
</style>