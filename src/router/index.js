import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/alldbc",
    name: "Alldbc",
    component: () => import("@/pages/Alldbc.vue"),
  },
  {
    path: "/profile/:profilesId",
    name: "DigitalCard",
    component: () => import("@/pages/DigitalCard.vue")
  },
  {
    path: "/business",
    name: "BusinessPage",
    component: () => import("@/pages/BusinessPage.vue")
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/pages/AboutUs.vue")
  },
  {
    path: "/category-sentence/:id",
    name: "CategorySentence",
    component: () => import("@/pages/CategorySentence.vue")
  },
  {
    path: "/customer-sentence/:id",
    name: "CustomerSentence",
    component: () => import("@/pages/CustomerSentence.vue")
  },
  {
    path: "/place-sentence/:id",
    name: "PlaceSentence",
    component: () => import("@/pages/PlaceSentence.vue")
  },
  {
    path: "/service-sentence/:id",
    name: "ServiceSentence",
    component: () => import("@/pages/ServiceSentence.vue")
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("@/pages/ContactUs.vue")
  },
  {
    path: "/demo",
    name: "DemoPage",
    component: () => import("@/pages/DemoPage.vue")
  },
  {
    path: "/faqs",
    name: "FaqsPage",
    component: () => import("@/pages/FaqsPage.vue")
  },
  {
    path: "/legal-warning",
    name: "LegalWarning",
    component: () => import("@/pages/LegalWarning.vue")
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("@/pages/PrivacyPolicy.vue")
  },
  {
    path: "/authorized-reseller",
    name: "AuthorizedReseller",
    component: () => import("@/pages/AuthorizedReseller.vue")
  },
  {
    path: "/bulk-seller",
    name: "BulkSelling",
    component: () => import("@/pages/BulkSelling.vue")
  },
  {
    path: "/service/:slug",
    name: "ServicePage",
    component: () => import("@/pages/ServicePage.vue")
  },
  {
    path: "/term-of-use",
    name: "TermOfUse",
    component: () => import("@/pages/TermOfUse.vue")
  },
  {
    path: "/career",
    name: "CareerPage",
    component: () => import("@/pages/CareerPage.vue")
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
