<template>
  <nav class="navbar navbar-light bg-light py-3 fixed-top mb-0">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">
        <img
          src="https://jords-springy.github.io/hostedimages/images/mainlogo.jpg"
          alt="main logo"
          style="opacity: 0.8; height: 50px; border-color: black"
        />
      </router-link>

      <h1 style="font-size: 1.2rem; margin: 0 20%">
        Jordan Springveldt's Digital Portfolio
      </h1>
      <button class="navbar-toggler" type="button" @click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        :class="{ show: isNavbarOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              @click="scrollToSection('home')"
              >HOME</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              @click="scrollToSection('about-section')"
              >ABOUT</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              @click="scrollToSection('education-section')"
              >EDUCATION</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              @click="scrollToSection('projects-section')"
              >PROJECTS</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              @click="scrollToSection('testimonial-section')"
              >TESTIMONIAL</router-link
            >
          </li> -->
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              @click="scrollToSection('contact-section')"
              >CONTACT</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
  
  <script>
export default {
  data() {
    return {
      isNavbarOpen: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    closeNavbar() {
      this.isNavbarOpen = false;
    },
    scrollToSection(sectionId) {
      this.closeNavbar();
      this.$nextTick(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = document.querySelector(".navbar").offsetHeight;
          const offsetTop = element.offsetTop - navbarHeight;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      });
    },
  },
};
</script>
  
  <style scoped>
.navbar-toggler {
  display: block !important;
}

.navbar {
  background-color: #f0f0f0;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 10px;
}

.nav-link {
  color: #337ab7;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #23527c;
}

.collapse.navbar-collapse {
  padding: 10px;
}

.navbar-toggler-icon {
  font-size: 1.5rem;
}

/* Media queries */
@media (max-width: 1200px) {
  .navbar {
    padding: 5px;
  }
  .navbar-brand {
    font-size: 1.2rem;
  }
  .nav-link {
    font-size: 1.1rem;
  }
}

@media (max-width: 786px) {
  .navbar {
    padding: 3px;
  }
  .navbar-brand {
    font-size: 1rem;
  }
  .nav-link {
    font-size: 1rem;
  }
  h1 {
    font-size: 1rem;
    margin: 0 auto;
  }
}

@media (max-width: 576px) {
  .navbar {
    padding: 3px;
  }
  .navbar-brand {
    font-size: 0.9rem;
  }
  .nav-link {
    font-size: 0.9rem;
  }
  h1 {
    font-size: 0.9rem;
    margin: 0 5%;
  }
}

@media (max-width: 400px) {
  .navbar {
    padding: 2px;
  }
  .navbar-brand {
    font-size: 0.8rem;
  }
  .nav-link {
    font-size: 0.8rem;
  }
  h1 {
    font-size: 0.8rem;
    margin: 0 2%;
  }
}

@media (max-width: 300px) {
  .navbar {
    padding: 2px;
  }
  .navbar-brand {
    font-size: 0.7rem;
  }
  .nav-link {
    font-size: 0.7rem;
  }
  h1 {
    font-size: 0.7rem;
    margin: 0 1%;
  }
}

</style>