<template>
  <div id="home">
    <div
  class="section1-mt-0"
  :style="{
    backgroundColor: '#e6e6fa',
    paddingTop: '60px',
    margin: '0 auto',
  }"
>

      <div class="d-flex justify-content-end align-items-center h-100">
        <div class="col-md-8 hover-card" style="margin-top:7rem">
          <div class="card shadow-lg" data-aos="fade-up">
            <div class="card-body">
              <h2 class="card-title" style="color: #6d5b67">
                <div class="typing-container">
                <div class="typing-effect">
                  Hello, I'm Jordan Springveldt
                </div>
                </div>
              </h2>
              <h4 class="card-text" style="color: #6d5b67">
                A Life Choices Student + Aspiring Web Developer
              </h4>
              <button
                class="btn btn-light mt-3"
                data-aos="fade-up"
                style="color: #6d5b67"
                @click="scrollToSection('contact-section')"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <img
            src="https://jords-springy.github.io/hostedimages/images/jordan_landing.png"
            loading="lazy"
            class="img-fluid rounded-start hover-zoom"
            alt="main picture of jordan"
            data-aos="fade-up"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init();
  },
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
  <style>
.section1-mt-0 {
  width: 100vw; /* Ensure full viewport width */
  max-width: 100%; /* Prevent overflow beyond viewport width */
  overflow-x: hidden; /* Prevent any horizontal scrolling */
  padding: 60px 0;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

.card {
  width: 100%;
  max-width: 100%;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  position: relative; /* Ensure positioning context */
  z-index: 1; /* Ensure card is above other elements */
}

.card-body {
  padding: 20px;
  color: #6d5b67;
}

.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.hover-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #6d5b67;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1.25rem;
  font-weight: 400;
  color: #6d5b67;
}

.btn-light {
  background-color: #f8f9fa;
  border: none;
  padding: 10px 20px;
  color: #6d5b67;
  transition: background-color 0.3s, color 0.3s;
}
.typing-container {
  display: flex;
  justify-content: flex-start; /* Align the text to the left */
  /* Use justify-content: flex-end for right alignment */
}

.typing-effect { /* Optional: to simulate a typing font */
  white-space: nowrap; /* Prevent the text from wrapping */
  overflow: hidden; /* Hide the text until it "types out" *//* The cursor effect */
  display: inline-block; /* Ensure the text occupies only the needed space */
  animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
}

/* Keyframes for the typing animation */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%; /* The width grows based on the content */
  }
}

/* Keyframes for the blinking cursor */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}






.hover-zoom:hover {
  transform: scale(1.05);
  transition: transform 0.3s;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

/* Media Queries for Responsive Layout */

/* Tablets and below */
@media (max-width: 1200px) {
  .card {
    margin-top: 15rem; /* Increase top margin */
    width: 100%;
  }
}

@media (max-width: 992px) {
  .card-title {
    font-size: 2rem;
  }
  .card-text {
    font-size: 1rem;
  }
}

@media (max-width: 768px) {
  .d-flex {
    flex-direction: column;
    align-items: center;
  }
  .col-md-8,
  .col-md-4 {
    width: 100%; /* Stack columns on small screens */
  }
  .card {
    margin-top: 5rem; /* Adjust top margin */
    margin-left: 0;
    margin-right: 0;
  }
  .img-fluid {
    width: 80%; /* Adjust image size for mobile */
    margin: 20px 0; /* Add spacing between image and text */
  }
}

/* Small phones and below */
@media (max-width: 576px) {
  .card {
    margin-top: 3rem; /* Further reduce top margin */
  }
  .card-title {
    font-size: 1.5rem;
  }
  .card-text {
    font-size: 0.9rem;
  }
  .img-fluid {
    width: 90%; /* Ensure image fits smaller screens */
  }
}

/* Very small devices (300px and below) */
@media (max-width: 300px) {
  .card-title {
    font-size: 1.2rem;
  }
  .card-text {
    font-size: 0.8rem;
  }
  .img-fluid {
    width: 95%; /* Further reduce image size */
  }
}




  </style>
