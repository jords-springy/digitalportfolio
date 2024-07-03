<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
     <NavBar/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    NavBar,
  }
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // }
}
</script>
