<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <NavBar/>
     <landing-page/>
     <about-page/>
     <education-comp/>
     <work-comp/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import LandingPage from '@/components/LandingPage.vue';
import AboutPage from '@/components/AboutPage.vue';
import EducationComp from '@/components/EducationComp.vue';
import WorkComp from '@/components/WorkComp.vue';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    LandingPage,
    AboutPage,
    EducationComp,
    WorkComp,
  }
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
}
</script>