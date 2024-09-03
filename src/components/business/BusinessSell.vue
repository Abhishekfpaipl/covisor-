<template>
  <div class="container my-5"> 
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="(reason, index) in reasons" :key="index">
        <div class="card h-100 hover-scale text-dark" >
          <div class="card-body d-flex flex-column">
            <div class="icon-wrapper mb-3">
              <i :class="reason.icon"></i>
            </div>
            <h5 class="card-title">{{ reason.title }}</h5>
            <p class="card-text">{{ reason.description }}</p>
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
      reasons: [
        {
          "icon": "bi bi-currency-rupee text-warning",
          "title": "Make money",
          "description": "Thousands of sellers making substantial income by reaching a nationwide customer base through Covisor Biz."
        },
        {
          "icon": "bi bi-lightning-charge-fill text-warning",
          "title": "Fast selling",
          "description": "Accelerate your sales growth. Many sellers quickly become top earners; you can be the next success story."
        },
        {
          "icon": "bi bi-globe text-warning",
          "title": "World's need",
          "description": "Tap into the vast market where billions of customers are the target audience of Covisor Biz."
        }
      ]


    };
  }
};
</script>

<style scoped>
.hover-scale {
  transition: transform 0.3s ease-in-out;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.icon-wrapper {
  font-size: 2rem;
}

.card {
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>