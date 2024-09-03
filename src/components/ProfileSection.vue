<template>
  <div>
    <div class="bg-white border-top-0 border rounded-bottom-5 mx-2 shadow" style="margin-top: -30px;">
      <div class="position-relative">
        <div class="d-flex justify-content-between align-items-center px-3 pt-5 rounded-top-5">
          <span @click="saveContact" class="d-flex flex-column align-items-center">
            <i class="bi bi-person-plus-fill fs-4"></i>
            <small>Contact</small>
          </span>
          <span @click="prepareShare" class="d-flex flex-column align-items-center" data-bs-toggle="modal"
            data-bs-target="#shareModal">
            <i class="bi bi-share-fill fs-4"></i>
            <small class="ms-2">Share</small>
          </span>
        </div>

        <!-- Modal for Share Options -->
        <div class="modal fade" id="shareModal" tabindex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="shareModalLabel">Share</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- Canvas for QR Code  -->
                <div class="d-flex justify-content-center align-items-center">
                  <canvas ref="qrcodeCanvas"></canvas>
                </div>
                <p class="mb-0 fw-bold text-capitalize fs-3">{{ user.name }}</p>
                <p class="mb-3 fw-bold text-capitalize">{{ user.designation }}</p>
                <div class="btn-group w-100">
                  <button class="btn btn-outline-dark w-100" @click="downloadQRCode">Download QR</button>
                  <!-- <button class="btn btn-dark w-100" @click="shareViaQRCode">Share via QR</button> -->
                  <button class="btn btn-dark w-100" @click="shareNormally">Share via Link</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- User profile image and other details -->
        <div class="position-absolute shadow end-50" style="width:60px;height: 60px;top: -30px;">
          <img v-if="user.img" :src="user.img" alt="Logo" class="rounded-3 border border-dark"
            style="width: 130px;height:130px;object-fit: cover; object-position: top">
          <img v-else src="/img/dummyprofile.png" alt="Logo" class="rounded-3 border border-dark"
            style="width: 130px;height:130px;object-fit: cover; object-position: top">
        </div>
      </div>

      <!-- User information -->
      <div class="d-flex flex-column align-items-center my-3">
        <h3 class="mb-0">{{ user.name }}</h3>
        <small class="smaller fw-bold text-capitalize mb-3">{{ user.designation }}</small>
        <small class="text-uppercase fw-bold text-muted">{{ user.business_name }}</small>
        <small class="smaller text-muted text-ellipsis2 fw-bold" style="min-height: 36px;">{{ user.description }}</small>
      </div>

      <!-- Promoters section -->
      <div v-if="user.promoters" class="" style="min-height:130px">
        <div
          class="position-relative w-100 overflow-x-scroll d-flex justify-content-center align-items-center hide-scroll"
          id="scroll" ref="slider">
          <div v-for="(review, index) in user.promoters" :key="index" class="p-2 my-3 d-flex flex-column">
            <img :src="review.image" class="rounded border" :class="{ 'scale-img': selectedIndex === index }"
              style="object-fit: contain; width: 50px; height: 50px; transition: transform 0.3s;"
              @click="selectImage(index)" alt="User Image">
          </div>
        </div>
        <p v-if="selectedIndex !== null" class="small fw-bold text-center text-uppercase">{{
          user.promoters[selectedIndex].name }}</p>
      </div>
    </div>

    <!-- Offcanvas for Query Submission -->
    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasQuery" aria-labelledby="offcanvasQueryLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasQueryLabel">Query</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <form @submit.prevent="submitQuery()" class="row g-3 needs-validation" novalidate>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="name" required>
            <label class="text-muted">First name</label>
          </div>
          <div class="w-100 p-2 form-floating">
            <input type="text" class="form-control" placeholder="Mobile" v-model="email" required>
            <label class="text-muted">Email Or Mobile No.</label>
          </div>
          <div class="form-floating">
            <textarea v-model="query" rows="2" class="form-control flex-fill" placeholder="Type your message..."
              required></textarea>
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
import QRCode from 'qrcode';

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
    };
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
TITLE:${this.user.designation}
ORG:${this.user.business_name} 
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
      const data = {
        name: this.name,
        email: this.email,
        query: this.query,
      };
      this.$store.dispatch('submitQuery', data);
    },
    prepareShare() {
      // Generate the QR code when the modal is opened
      const canvas = this.$refs.qrcodeCanvas;
      QRCode.toCanvas(canvas, window.location.href, (error) => {
        if (error) {
          console.error(error);
        }
      });
    },
    downloadQRCode() {
      const canvas = this.$refs.qrcodeCanvas;
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'qr-code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    shareViaQRCode() {
      const canvas = this.$refs.qrcodeCanvas;
      canvas.toBlob((blob) => {
        const file = new File([blob], "qr-code.png", { type: "image/png" });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          navigator.share({
            files: [file],
            title: 'QR Code',
            text: 'Scan this QR code to visit our page!',
          })
            .then(() => console.log('QR code shared successfully'))
            .catch((error) => console.log('Error sharing QR code', error));
        } else {
          const dataUrl = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'qr-code.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          alert('QR code downloaded. You can now share it manually via WhatsApp.');
        }
      });
    },
    shareNormally() {
      if (navigator.share) {
        navigator.share({
          title: 'Share this content',
          text: 'Check out this awesome content!',
          url: window.location.href,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
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
  z-index: 10;
}
</style>
