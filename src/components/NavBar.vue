<template>
    <nav class="navbar navbar-light bg-light py-3 fixed-top mb-0">
      <div class="container-fluid">
        <a href="#home">
          <img src="https://jords-springy.github.io/hostedimages/images/mainlogo.jpg" alt="main logo" style="opacity: 0.8; height: 50px; border-color: black;">
        </a>
  
        <h1 style="font-size: 1.2rem; margin: 0 20%;">Jordan Springveldt's Digital Portfolio</h1>
  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(link, index) in links" :key="index">
              <a class="nav-link" :href="`#${link.to}`">{{ link.text }}</a>
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
        links: [
          { text: 'HOME', to: 'home' },
          { text: 'ABOUT', to: 'about' },
          { text: 'RESUME', to: 'resume' },
          { text: 'PROJECTS', to: 'projects' },
          { text: 'TESTIMONIAL', to: 'testimonial' },
          { text: 'CONTACT', to: 'contact' },
        ],
      };
    },
  };
  </script>
  
  <style lang="css">
    /* Your existing styles */
  </style>