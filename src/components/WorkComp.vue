<template>
    <div>
      <div class="work-section" data-aos="zoom-out-up" data-aos-duration="1500">
        <h2 class="section-title work-section__title">Work Experience</h2>
        <div v-for="(experience, index) in workExperienceData" :key="index" class="work-section__content">
          {{ experience.description }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        workExperienceData: [],
      };
    },
    mounted() {
      fetch("https://jords-springy.github.io/first_api/data/index.json?_=" + new Date().getTime())
      .then(response => response.json())
      .then(data => {
          this.workExperienceData = data.workExperience;
        })
      .catch(error => console.error(error));
    },
  };
  </script>
  
  <style>
    /* add styles here */
   .work-section {
    background-color: #f8f9fa;
    padding: 60px 0;
  }
  
 .work-section__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
  
 .work-section__content {
    font-size: 1.2rem;
  }
  
  /* For screens larger than 1200px */
@media (min-width: 1200px) {
 .work-section {
    padding: 80px 0;
  }
 .work-section__title {
    font-size: 3rem;
  }
 .work-section__content {
    font-size: 1.3rem;
  }
}

/* For screens between 768px and 1200px */
@media (min-width: 768px) and (max-width: 1200px) {
 .work-section {
    padding: 60px 0;
  }
 .work-section__title {
    font-size: 2.5rem;
  }
 .work-section__content {
    font-size: 1.2rem;
  }
}

/* For screens smaller than 768px */
@media (max-width: 768px) {
 .work-section {
    padding: 40px 0;
  }
 .work-section__title {
    font-size: 2rem;
  }
 .work-section__content {
    font-size: 1.1rem;
  }
}

/* For screens smaller than 300px */
@media (max-width: 300px) {
 .work-section {
    padding: 20px 0;
  }
 .work-section__title {
    font-size: 1.5rem;
  }
 .work-section__content {
    font-size: 1rem;
  }
}
  </style>