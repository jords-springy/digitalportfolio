<template>
    <nav class="navbar navbar-light bg-light py-3 fixed-top mb-0">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="https://jords-springy.github.io/hostedimages/images/mainlogo.jpg" alt="main logo" style="opacity: 0.8; height: 50px; border-color: black;">
        </router-link>
  
        <h1 style="font-size: 1.2rem; margin: 0 20%;">Jordan Springveldt's Digital Portfolio</h1>
        <button class="navbar-toggler" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link" @click="closeNavbar">HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link" @click="closeNavbar">ABOUT</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/education" class="nav-link" @click="closeNavbar">RESUME</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/projects" class="nav-link" @click="closeNavbar">PROJECTS</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/testimonial" class="nav-link" @click="closeNavbar">TESTIMONIAL</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link" @click="closeNavbar">CONTACT</router-link>
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
    },
  };
  </script>
  
  <style>
  /* Your navbar styles */
  </style>
  