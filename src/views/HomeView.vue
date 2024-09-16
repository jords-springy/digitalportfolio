<template>
  <div class="home">
    <spinner-comp :isLoading="isLoading" />
    <landing-page />
    <about-page />
    <education-comp />
    <work-comp />
    <skills-comp />
    <project-page />
    <!-- <testimonial-page /> -->
    <contact-page />
  </div>
</template>


<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import LandingPage from "@/components/LandingPage.vue";
import AboutPage from "@/components/AboutPage.vue";
import EducationComp from "@/components/EducationComp.vue";
import WorkComp from "@/components/WorkComp.vue";
import SkillsComp from "@/components/SkillsComp.vue";
import ProjectPage from "@/components/ProjectPage.vue";
// import TestimonialPage from "@/components/TestimonialPage.vue";
import ContactPage from "@/components/ContactPage.vue";

export default {
  name: "HomeView",
  components: {
    LandingPage,
    AboutPage,
    EducationComp,
    WorkComp,
    SkillsComp,
    ProjectPage,
    // TestimonialPage,
    ContactPage,
    SpinnerComp,
  },
  data() {
    return {
      isLoading: true, // Set to true initially or control it based on your logic
    };
  },
  mounted() {
    // Simulate data loading, set `isLoading` to false once done
    setTimeout(() => {
      this.isLoading = false;
    }, 100); // Example: 2-second loading delay
  },
};
</script>

<style>
/* Prevent horizontal scroll for the entire app */
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden; /* Prevent any horizontal scroll */
  width: 100%;
}

/* Ensure the home container and child components are responsive */
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  overflow-x: hidden; /* Prevent horizontal overflow */
}

/* Ensure each section takes full width without overflow */
.landing-page, .about-page, .education-comp, .work-comp, .skills-comp, .project-page, .contact-page {
  width: 100%;
  max-width: 1200px; /* Prevent sections from being too wide */
  margin: 20px auto;
  padding: 0 10px; /* Add padding to prevent content from touching screen edges */
}

/* Media query for 1200px and below */
@media (max-width: 1200px) {
  .landing-page, .about-page, .education-comp, .work-comp, .skills-comp, .project-page, .contact-page {
    width: 90%;
    margin: 20px auto;
  }
}

/* Media query for 768px and below */
@media (max-width: 768px) {
  .landing-page, .about-page, .education-comp, .work-comp, .skills-comp, .project-page, .contact-page {
    width: 95%;
    margin: 10px auto;
  }
}

/* Media query for very small devices (300px) */
@media (max-width: 300px) {
  .landing-page, .about-page, .education-comp, .work-comp, .skills-comp, .project-page, .contact-page {
    width: 98%;
    margin: 5px auto;
  }
}

</style>