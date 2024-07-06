<template>
  <div id="app">
    <SpinnerComp :isLoading="isLoading" />
    <div v-if="!isLoading">
      <NavBar />
      <main>
        <router-view />
      </main>
      <FooterComp />
    </div>
  </div>
</template>

<script>
import SpinnerComp from './components/SpinnerComp.vue';
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  components: {
    SpinnerComp,
    NavBar,
    FooterComp,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    // Simulate data fetching on mount
    this.fetchData();
  },
  beforeMounted() {
    // Cancel any ongoing API call when the component is destroyed
    // Implement API call cancellation logic here
  },
  methods: {
    async fetchData() {
      try {
        // Simulate data fetching
        await new Promise(resolve => setTimeout(resolve, 1500)); // Replace with actual API call
        // Once data is successfully fetched
        this.isLoading = false;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.isLoading = false; // Ensure isLoading is still set to false on error
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6D5B67;
}

main {
  padding-top: 70px; /* Adjust based on your navbar height and content visibility */
  min-height: calc(100vh - 130px); /* Adjust based on your footer height and navbar height */
}
</style>
