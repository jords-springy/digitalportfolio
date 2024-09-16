<template>
  <div class="home">
    <spinner-comp />
    <landing-page />
    <about-page />
    <education-comp />
    <work-comp />
    <skills-comp />
    <project-page />
    <testimonial-page />
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
};
</script>

<style>
/* Media query for 1200px */
@media (max-width: 1200px) {
 .home {
    flex-direction: column;
  }
 .landing-page,.about-page,.education-comp,.work-comp,.skills-comp,.project-page,.testimonial-page,.contact-page {
    width: 80%;
    margin: 20px auto;
  }
}

/* Media query for 768px */
@media (max-width: 768px) {
 .home {
    flex-direction: column;
  }
 .landing-page,.about-page,.education-comp,.work-comp,.skills-comp,.project-page,.testimonial-page,.contact-page {
    width: 90%;
    margin: 10px auto;
  }
}

/* Media query for 300px */
@media (max-width: 300px) {
 .home {
    flex-direction: column;
  }
 .landing-page,.about-page,.education-comp,.work-comp,.skills-comp,.project-page,.testimonial-page,.contact-page {
    width: 95%;
    margin: 5px auto;
  }
}
</style>