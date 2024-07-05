<template>
  <div id="app">
    <nav-bar />
    
    <main>
      <router-view />
    </main>

    <footer-comp />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    NavBar,
  
    FooterComp,
  },
};
</script>

<style>
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6D5B67;
}
main {
  padding-top: 70px; /* Adjust based on your navbar height */
  min-height: calc(100vh - 130px); /* Adjust based on your footer height and navbar height */
}
</style>
