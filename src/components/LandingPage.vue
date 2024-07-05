<template>
    <div>
      <!-- Main Section -->
      <div
        class="section1-mt-0"
        :style="{
          minHeight: '750px',
          backgroundImage:
            'url(https://jords-springy.github.io/hostedimages/images/section1.png)',
          paddingTop: '60px',
          maxWidth: '100%',
          margin: '0 auto',
        }"
      >
        <div class="d-flex justify-content-end align-items-center h-100">
          <div class="col-md-8 hover-card">
            <div class="card shadow-lg" data-aos="fade-up">
              <div class="card-body">
                <h1 class="card-title" style="color: #6D5B67">Hello, I'm Jordan Springveldt</h1>
                <h4 class="card-text"  style="color: #6D5B67">
                  A Life Choices Student + Aspiring Web Developer
                </h4>
                <a href="#contact" class="btn btn-light mt-3" data-aos="fade-up" style="color:#6d5b67"
                  >Get in Touch</a
                >
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
  };
  </script>
    
    <style>
  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  .card {
  background-color: #f2d7f5;
  border: none;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  background-color: #f8f9fa; /* Add this line */
}

.card-body {
  padding: 20px;
  /* Add this line */
  color:#6d5b67
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
    color:#6d5b67
  }
  
  .card-text {
    font-size: 1.25rem;
    font-weight: 400;
    color:#6d5b67
  }
  
.btn-light {
  background-color: #f2d7f5;
  border: none;
  /* Add this line to define the text color */
}

.btn-light:hover {
  background-color: #6d5b67;
  color: #fff; /* You might want to keep the text color the same on hover */
}
  
  .hover-zoom:hover {
    transform: scale(1.05);
    transition: transform 0.3s;
  }
  
  .shadow-lg {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }
  
  /* Media Queries */
  @media (max-width: 1200px) {
    .card {
      width: 100%;
      margin-left: 0;
    }
    .section1-mt-0 {
      padding-top: 80px;
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
      width: 100%;
    }
    .card {
      margin-left: 0;
      margin-right: 0;
    }
    .img-fluid {
      margin-top: 0;
      width: 80%;
    }
  }
  
  @media (max-width: 576px) {
    .card-title {
      font-size: 1.5rem;
    }
    .card-text {
      font-size: 0.9rem;
    }
    .section1-mt-0 {
      padding-top: 60px;
    }
    .img-fluid {
      width: 100%;
    }
  }
  
  @media (max-width: 300px) {
    .card-title {
      font-size: 1.2rem;
    }
    .card-text {
      font-size: 0.8rem;
    }
    .section1-mt-0 {
      padding-top: 40px;
    }
    .img-fluid {
      width: 100%;
    }
    .card {
      width: 90%;
      margin-left: 0;
    }
    .col-md-8,
    .col-md-4 {
      width: 100%;
      padding: 10px;
    }
    .card-body {
      padding: 20px;
    }
    .card-title {
      margin-bottom: 10px;
    }
    .card-text {
      font-size: 0.9rem;
    }
  }
  </style>
    