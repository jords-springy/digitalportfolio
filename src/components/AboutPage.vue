<template>
    <div>
      <div class="about-section mt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6" data-aos="fade-right">
              <h2 class="section-title">About Me</h2>
              <p
                class="section-description"
                v-for="about in aboutData"
                :key="about.description"
              >
                {{ about.description }}
              </p>
              <div class="about-section.btn-light">
                <a
                  href="https://lifechoices.co.za/life-choices-academy/"
                  target="_blank"
                  class="btn btn-light mt-3" style="color: #6D5B67"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1.5.5v3.975a.5.5 0 0 1-1 0V6.707z"
                    />
                  </svg>
                  Visit Life Choices Website</a
                >
              </div>
            </div>
            <div class="col-md-6" data-aos="fade-left">
              <img
                v-if="aboutData.length > 0"
                :src="aboutData[0].image"
                loading="lazy"
                class="img-fluid rounded-square"
                style="
                  height: 350px;
                  width: 350px;
                  object-fit: cover;
                  border-radius: 10px;
                  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                  display: inline block;
                  margin-right: 20px;
                "
                alt="Jordan Springveldt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        aboutData: [],
      };
    },
    mounted() {
      fetch(
        "https://jords-springy.github.io/first_api/data/index.json?_=" +
          new Date().getTime()
      )
        .then((response) => response.json())
        .then((data) => {
          this.aboutData = data.about;
        })
        .catch((error) => console.error(error));
    },
  };
  </script>
    
    <style>
  .about-section {
    background-color: #f8f9fa;
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
  
  .section-description {
    font-size: 1.1rem;
    line-height: 1.7; 
    width: 100%; 
    margin: 0 auto; 
  }
  .btn-light {
    background-color: #a6a6a6;
    border: none;
    color: #6D5B67
  }
  
  .btn-light:hover {
    background-color: lightslategray;
  }
  
  .row {
    display: flex;
    align-items: center;
  }
  
  .about-section img {
    height: 350px;
    width: 350px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    margin-left: 300px; 
  }

  /* For screens larger than 1200px */
  @media (min-width: 1200px) {
    .about-section {
      padding: 80px 0;
    }
    .section-title {
      font-size: 3rem;
    }
    .section-description {
      font-size: 1.3rem;
    }
    .about-section img {
      height: 400px;
      width: 400px;
      margin-left: 350px;
    }
  }

  /* For screens between 768px and 1200px */
  @media (min-width: 768px) and (max-width: 1200px) {
    .about-section {
      padding: 60px 0;
    }
    .section-title {
      font-size: 2.5rem;
    }
    .section-description {
      font-size: 1.2rem;
    }
    .about-section img {
      height: 350px;
      width: 350px;
      margin-left: 250px;
    }
  }

  /* For screens smaller than 768px */
  @media (max-width: 768px) {
    .about-section {
      padding: 40px 0;
    }
    .section-title {
      font-size: 2rem;
    }
    .section-description {
      font-size: 1.1rem;
    }
    .about-section img {
      height: 250px;
      width: 250px;
      margin-left: 150px;
    }
  }

  /* For screens smaller than 300px */
  @media (max-width: 300px) {
    .about-section {
      padding: 20px 0;
    }
    .section-title {
      font-size: 1.5rem;
    }
    .section-description {
      font-size: 1rem;
    }
    .about-section img {
      height: 150px;
      width: 150px;
      margin-left: 50px;
    }
    .row {
      flex-direction: column;
    }
    .col-md-6 {
      width: 100%;
    }
  }
</style>