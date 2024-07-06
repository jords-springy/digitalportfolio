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
import SpinnerComp from "./components/SpinnerComp.vue";
import NavBar from "./components/NavBar.vue";
import FooterComp from "./components/FooterComp.vue";

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
    this.fetchData();
  },
  beforeMounted() {
  },
  methods: {
    async fetchData() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        this.isLoading = false;
      } catch (error) {
        console.error("Error fetching data:", error);
        this.isLoading = false;
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
  color: #6d5b67;
}

main {
  padding-top: 70px; 
  min-height: calc(
    100vh - 130px
  );
}
</style>
