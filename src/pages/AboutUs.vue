<template>
    <div class="text-bg-light">
        <div class="text-center fw-bold py-5 text-white" style="background-color: black " v-observe>
            <p class="fs-1">About Us</p>
        </div>
        <div class="container rounded-top-5 bg-light" style="margin-top: -40px;" v-observe>
            <SuccessStory :tests="tests" v-observe />
            <div class="my-5">
                <InfoSection :techTeam="techTeam" :marketingTeam="marketingTeam" :managementTeam="managementTeam"
                    v-observe />
            </div>
        </div>
        <div class="">
            <CustomCounter service="satisfied customers" :serviceCount="1000" category="years of expirence"
                :categoryCount="10" place="projects completed" :placeCount="4000" image="/img/smile.svg"
                title="know about us" path="/" v-observe />
        </div>
        <div class= "">
            <PrivateCoaching :coaching="mission" title=" " />
        </div>
    </div>
</template>
<script>
import SuccessStory from "@/components/SuccessStory.vue";
import InfoSection from "@/components/InfoSection.vue";
import CustomCounter from "@/components/CustomCounter.vue";
import PrivateCoaching from "@/components/PrivateCoaching.vue";
export default {
    name: "AboutUs",
    components: {
        SuccessStory,
        InfoSection,
        CustomCounter,
        PrivateCoaching,
    },
    data() {
        return {
            mission: [
                {
                    icon: 'bi bi-bullseye',
                    title: "mission",
                    description: "Make Indian Businesses more successful that grows exponentially and sustainably"
                },
                {
                    icon: 'bi bi-eye',
                    title: "vision",
                    description: "Build an enterprise that genuinely serves the nation and creates a positive impact in the world"
                },
                {
                    icon: 'bi bi-gem',
                    title: "value",
                    description: "Find your true north. Master your craft and set the standards for world-class"
                },
            ],
            techTeam: [
                {
                    name: "Piyush Gupta",
                    post: "CTO",
                    value: "Leads the company's technology strategy, oversees software development and IT infrastructure, and ensures the organization stays at the forefront of technological innovation."
                },
                {
                    name: "Santosh Kumar",
                    post: "Backend Developer",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    name: "Satpal Rawat",
                    post: "Backend Developer",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    name: "Vivek Kumar",
                    post: "Backend Developer",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    name: "Jatin Bhardwaj",
                    post: "Backend Developer",
                    value: "Works on the server-side of web applications, focusing on logic, database interactions, and overall functionality. Uses languages like Python, Java, Ruby, or Node.js to create APIs, manage databases, and handle server operations. Ensures efficient data processing, application performance, and implementation of security measures."
                },
                {
                    name: "Abhishek Negi",
                    post: "Frontend Developer",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
                {
                    name: "Nikhil Garg",
                    post: "Frontend Developer",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
                {
                    name: "Harmanpreet Singh",
                    post: "Frontend Developer",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
                {
                    name: "Shivam Sharma",
                    post: "Frontend Developer",
                    value: "Creates the user-facing parts of websites and applications using HTML, CSS, and JavaScript. Builds responsive and interactive interfaces to ensure a smooth user experience across devices and browsers. Collaborates with design teams to implement visual elements and user interface components."
                },
            ],
            marketingTeam: [
                {
                    name: "Aman Sharma",
                    post: "Chief Marketing Officer",
                    value: "Develops and oversees the overall marketing strategy, aligns marketing initiatives with company goals, and leads the marketing team."
                },
                {
                    name: "Bhawna Rawat",
                    post: "Digital Marketing Specialist",
                    value: "Implements and manages online marketing campaigns, analyzes digital traffic, and optimizes online presence to enhance engagement and conversions."
                },
                {
                    name: "Garima Bhardwaj",
                    post: "Content Marketing Manager",
                    value: "Creates and manages content strategy across all platforms. Oversees the creation of blogs, whitepapers, case studies, and other marketing materials."
                },
                {
                    name: "Manjesh Kumar Singh",
                    post: "Brand Manager",
                    value: "Develops and maintains the company's brand identity. Ensures brand consistency across all marketing channels and initiatives."
                },
            ],
            managementTeam: [
                {
                    name: "Anusha Tyagi",
                    post: "Manger",
                    value: "Provides overall leadership and strategic direction for the company. Makes high-level decisions and is responsible for the company's success."
                },
                {
                    name: "Kaushubh Sharma",
                    post: "Accounts Manager",
                    value: "Manages the company's financial operations, including budgeting, financial planning, and reporting. Ensures financial health and compliance."
                },
                {
                    name: "Swati Srivastava",
                    post: "HR Manager",
                    value: "Oversees day-to-day operations, ensures efficient processes, and manages resource allocation across departments."
                },
                {
                    name: "Saurabh Singh",
                    post: "Admin Manager",
                    value: "Leads the technology strategy, oversees software development and IT infrastructure, and ensures the company stays at the forefront of technological innovation."
                },
            ],
        }
    },

}
</script>