<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <NavBar/>
     <landing-page/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import LandingPage from '@/components/LandingPage.vue';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
    LandingPage,
  }
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
}
</script>
