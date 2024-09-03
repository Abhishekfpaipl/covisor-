<template>
    <div>
        <div class="whatsapp rounded-circle border d-flex align-items-center justify-content-center bg-success text-white"
            @click="openWhatsapp()" style="width: 37px; height: 37px;">
            <i class="bi bi-whatsapp fs-5"></i>
        </div>

        <div class="phone rounded-circle border d-flex align-items-center justify-content-center bg-primary text-white"
            @click="openDialer()" style="width: 37px; height: 37px;">
            <i class="bi bi-telephone fs-5"></i>
        </div>

        <div class="query border rounded-circle bg-success bg-dark" @click="openModal">
            <img src="/img/query.svg" style="width: 25px; height: 25px; filter: invert(1);" alt="">
        </div>

        <div class="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true" :class="{ 'show': showModal }">
            <div class="modal-dialog modal-dialog-centered modal-lg " role="document">
                <div class="modal-content text-white position-relative" style="background-color: var(--brand-color)">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="/img/welcome.svg" style="width: 250px; max-width: 90%" alt="">
                            </div>
                            <div class="col-md-6">
                                <p>Would you like a free non-binding ballpark estimate for your project?</p>
                                <form @submit.prevent="submitQuery()" class="mt-3 row g-3 needs-validation" novalidate>
                                    <div class="w-100 form-floating mt-2">
                                        <input type="text" class="form-control" placeholder="" v-model="name" required>
                                        <label for="floatingInput" class="text-muted ms-2">Your Name</label>
                                    </div> 
                                    <div class="w-100 form-floating mt-2">
                                        <textarea class="form-control" placeholder="Leave a comment here"
                                            id="floatingTextarea" v-model="note"></textarea>
                                        <label for="floatingTextarea" class="ms-2 text-muted">Services Required</label>
                                    </div>

                                    <div class="col-12">
                                        <button class="btn btn-dark py-2 fs-5 w-100" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="position-absolute rounded-circle wh-40 bg-light text-dark px-2 p-1 end-0"
                        @click="closeModal" style="top: -3%">
                        <i class="bi bi-x fs-5"></i>
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
            name: '', 
            note: '',
            showModal: false,
        }
    },
    mounted() {
        setTimeout(() => {
            this.showModal = true;
        }, 2000);
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        submitQuery() {
            if (this.name != "" && this.service != "" && this.notes != "") {
                const phoneNumber = '918802172121'; // Replace with your WhatsApp number
                const message = `Hello, my name is ${this.name} . Here are some additional notes: ${this.note}.`;
                const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
                this.name = "",
                    this.name = "",
                    this.note = "";
            }
        }, 
        openDialer() {
            const phoneNumber = 918860012001;
            window.location.href = `tel:${phoneNumber}`;
        },
        openWhatsapp() {
            window.open(`https://wa.me/${918860012001}?text=Hello...`, '_blank');
        }
    }
}
</script>
<style scoped>
/* Optional: Add custom styles for the modal */
.modal {
    display: none;
    background: rgba(0, 0, 0, 0.5);
    /* semi-transparent background */
    transition: opacity 0.3s ease;
}

.modal.show {
    display: block;
    opacity: 1;
}

.query {
    z-index: 9;
    position: fixed;
    bottom: 10%;
    right: 10px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.whatsapp {
    z-index: 9;
    position: fixed;
    bottom: 17%;
    left: 10px;
    cursor: pointer;
    padding: 5px !important
}

.phone {
    z-index: 9;
    position: fixed;
    bottom: 10%;
    left: 10px;
    cursor: pointer;
    padding: 5px
}
</style>