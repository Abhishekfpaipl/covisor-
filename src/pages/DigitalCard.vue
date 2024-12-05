<template>
  <div class="top-padding ">
    <DigitalTop :user="user" />
    <BannerSection :user="user" />
    <ProfileSection :user="user" />
    <ContactCard :user="user" />
    <TagSection :user="user" />
    <AboutSection :user="user" />
    <CounterSection :user="user" />
    <SocialSchedule :user="user" />
    <DigitalFooter />
    <CollectionSection />


  </div>
</template>

<script>

import BannerSection from '@/components/BannerSection.vue'
import ProfileSection from '@/components/ProfileSection.vue'
import AboutSection from '@/components/AboutSection.vue';
import CounterSection from '@/components/CounterSection.vue';
import SocialSchedule from '@/components/SocialSchedule.vue';
import ContactCard from '@/components/ContactCard.vue';
import DigitalFooter from '@/components/DigitalFooter.vue';
import DigitalTop from '@/components/DigitalTop.vue';
import TagSection from '@/components/TagSection.vue';

export default {
  name: "DigitalCard",
  components: {
    BannerSection,
    ProfileSection,
    AboutSection,
    CounterSection,
    ContactCard,
    SocialSchedule,
    DigitalFooter,
    DigitalTop,
    TagSection
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
      let userId = this.$route.params.profilesId;
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