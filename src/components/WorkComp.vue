<template>
    <div>
      <div class="work-section" data-aos="zoom-out-up" data-aos-duration="1500">
        <h2 class="section-title">Work Experience</h2>
        <div v-for="(experience, index) in workExperienceData" :key="index">
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
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
  </style>