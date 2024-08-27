<template>
  <div class="">
    <div class="bg-white border-top-0 border rounded-bottom-5 mx-2 shadow" style="margin-top: -30px;">
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center px-3 pt-5 rounded-top-5">
          <span @click="saveContact" class="d-flex flex-column align-items-center">
            <i class="bi bi-person-plus-fill fs-4"></i>
            <small class="">Contact</small>
          </span>
          <span @click="share" class="d-flex flex-column align-items-center">
            <i class="bi bi-share-fill fs-4"></i>
            <small class="ms-2">Share</small>
          </span>
        </div>
        <div class="position-absolute shadow end-50" style="width:60px;height: 60px;top: -30px;">
          <img :src="user.img" alt="Logo" class="rounded-3 border border-dark" style="width: 130px;height:130px;object-fit: cover; object-position: top">
        </div>
      </div>
      <div class="d-flex flex-column align-items-center my-3">
        <h3>{{ user.name }}</h3>
        <small class="text-capitalize">{{ user.designation }}</small>
        <small class="text-capitalize">{{ user.business_name }}</small>
        <small class=" smaller text-muted text-ellipsis2" style="min-height: 36px;">{{ user.description }}
        </small>
      </div>
      <div v-if="user.promoters" class="" style="min-height:130px">
        <div
          class="position-relative w-100 overflow-x-scroll d-flex justify-content-center align-items-center hide-scroll"
          id="scroll" ref="slider">
          <div v-for="(review, index) in user.promoters" :key="index" class="p-2 my-3 d-flex flex-column">
            <img :src="review.image" class="rounded border border" :class="{ 'scale-img': selectedIndex === index }"
              style="object-fit: contain; width: 50px; height: 50px; transition: transform 0.3s;"
              @click="selectImage(index)" alt="User Image">
          </div>
        </div>
        <p v-if="selectedIndex !== null" class="small fw-bold text-center text-uppercase">{{
          user.promoters[selectedIndex].name }}</p>

      </div>

    </div>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasQuery" aria-labelledby="offcanvasQueryLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasQueryLabel">Query</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form @submit.prevent="submitQuery()" class="row g-3 needs-validation" novalidate>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="name" required>
            <label for="floatingInput" class="text-muted">First name</label>
          </div>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="email" required>
            <label class="text-muted">Email Or Mobile No.</label>
          </div>
          <div class="form-floating">
            <textarea v-model="query" rows="2" class="form-control flex-fill" placeholder="Type your message..."
              required>
          </textarea>
            <label class="text-muted">Enter Your Query</label>
          </div>
          <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit Query</button>
          </div>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "TopSection",
  props: {
    user: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      name: '',
      email: '',
      query: '',
      selectedIndex: null,
    }
  },
  methods: {
    selectImage(index) {
      this.selectedIndex = index;
    },
    saveContact() {
      const { number, email, location, facebook, website, youtube, linkedin, instagram } = this.user.contactDetails;

      // Generate VCF content with the additional details
      const vcfContent = `BEGIN:VCARD
VERSION:3.0
FN:${this.user.name}
TEL:${number}
EMAIL:${email}
ADR:${location}
URL:${website}
URL:${facebook}
URL:${youtube}
URL:${linkedin}
URL:${instagram}
END:VCARD`;

      // Create a blob from the VCF content
      const blob = new Blob([vcfContent], { type: 'text/vcard' });

      // Create a link element
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${this.user.name}-contact.vcf`;

      // Trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up
      document.body.removeChild(link);
    },
    submitQuery() {
      console.log('Submit Query')
      const data = {
        name: this.name,
        email: this.email,
        query: this.query,
      }
      this.$store.dispatch('submitQuery', data)
    },
    share() {
      if (navigator.share) {
        navigator.share({
          title: 'Share this content',
          text: 'Check out this awesome content!',
          url: window.location.href,
        }).then(() => {
          console.log('Successful share');
        }).catch((error) => {
          console.log('Error sharing', error);
        });
      } else {
        alert('Web Share API is not supported in your browser.');
      }
    },
  }
};
</script>
<style>
.scale-img {
  transform: scale(1.2);
}

.selected-name {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  /* Adjust color as needed */
  z-index: 10;
}
</style>
