<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <NavBar/>
     <landing-page/>
     <about-page/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import LandingPage from '@/components/LandingPage.vue';
import AboutPage from '@/components/AboutPage.vue';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    LandingPage,
    AboutPage,
  }
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
}
</script>