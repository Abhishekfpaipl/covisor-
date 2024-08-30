<template>
  <div class=" ">
    <DigitalTop :user="user" />
    <TopNav :user="user" />
    <TopSection :user="user" />
    <ContactCard :user="user" />
    <InfoSection :user="user" />
    <SocialSchedule :user="user" />
    <DigitalFooter />
    <CollectionSection />


  </div>
</template>

<script>

import TopNav from '@/components/TopNav.vue'
import TopSection from '@/components/TopSection.vue'
import InfoSection from '@/components/InfoSection.vue';
import SocialSchedule from '@/components/SocialSchedule.vue';
import ContactCard from '@/components/ContactCard.vue';
import DigitalFooter from '@/components/DigitalFooter.vue';
import DigitalTop from '@/components/DigitalTop.vue';

export default {
  name: "DigitalCard",
  components: {
    TopSection,
    TopNav,
    InfoSection,
    ContactCard,
    SocialSchedule,
    DigitalFooter,
    DigitalTop
  },
  data() {
    return {
      userId: '',
      name: '',
      email: '',
      query: ''
    }
  },
  computed: {
    user() {
      let userId = this.$route.params.userMobile;
      return this.$store.getters.getUser(userId);
    },
  },
  methods: {
    submitQuery() {
      console.log('Submit Query')
      const data = {
        name: this.name,
        email: this.email,
        query: this.query,
      }
      this.$store.dispatch('submitQuery', data)
    },
  }

};
</script>
<style>
.query {
  z-index: 9;
  position: fixed;
  bottom: 60px;
  right: 10px;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
</style>