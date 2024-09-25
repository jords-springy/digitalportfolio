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



  font-family: "Uchen", serif;
  font-weight: 400;
  font-style: normal;



 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #6d5b67;
  display: flex; /* Ensure it's a flex container */
  flex-direction: column; /* Stack children vertically */
  width: 100%; /* Ensure full width */
  height: 100%; /* Ensure full height */
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
}





h1, h2, h3 {
    font-weight: 700; /* or adjust to your preference for headings */
}

p {
    font-weight: 300; /* or 400 for normal weight */
}



main {
  width: 100%; /* Ensure full width */
  max-width: 100%; /* Ensure it doesn't exceed the viewport width */
  flex-grow: 1; /* Grow to fill remaining space */
  margin: 0; /* Reset margin */
  padding: 0; /* Reset padding */
  box-sizing: border-box; /* Ensure padding and border are included in width */; /* Add background for visibility */
}

/* Media queries for responsive adjustments */
@media (max-width: 1440px) {
  main {
    padding-top: 50px;
  }
}

@media (max-width: 1024px) {
  main {
    padding-top: 40px;
  }
}

@media (max-width: 768px) {
  main {
    padding-top: 30px;
  }
}

@media (max-width: 425px) {
  main {
    padding-top: 25px;
  }
}

@media (max-width: 375px) {
  main {
    padding-top: 20px;
  }
}

@media (max-width: 320px) {
  main {
    padding-top: 15px;
  }
}

@media (max-width: 300px) {
  main {
    padding-top: 10px;
  }
}
</style>
