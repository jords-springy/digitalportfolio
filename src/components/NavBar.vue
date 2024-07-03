<template>
    <nav class="navbar navbar-light bg-body-tertiary py-3 fixed-top mb-0">
      <div class="container-fluid">
        <a href="#">
          <img src="https://jords-springy.github.io/hostedimages/images/mainlogo.jpg" alt="main logo" style="opacity: 0.8; height: 50px; border-color: black;">
        </a>
  
        <h1 style="font-size: 1.2rem; margin: 0 20%;">Jordan Springveldt's Digital Portfolio</h1>
  
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(link, index) in links" :key="index">
              <router-link class="nav-link" :to="link.to" :aria-current="link.to === '/' ? 'page' : null">{{ link.text }}</router-link>
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
          { text: 'HOME', to: '/' },
          { text: 'ABOUT', to: '/about' },
          { text: 'RESUME', to: '/resume' },
          { text: 'PROJECTS', to: '/projects' },
          { text: 'TESTIMONIAL', to: '/testimonial' },
          { text: 'CONTACT', to: '/contact' },
        ],
      };
    },
  };
  </script>
  
  <style lang="css">
  /* no need to add anything here */
  </style>