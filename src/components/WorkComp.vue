<template>
    <div>
      <div class="work-section" data-aos="zoom-out-up" data-aos-duration="1500">
        <h2 class="section-title work-section__title">Work Experience</h2>
        <div v-for="(experience, index) in workExperienceData" :key="index" class="work-section__content">
          {{ experience.description }}
        </div>
        <br>
        <button @click="downloadCV">Download CV</button>
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
    methods: {
      downloadCV() {
        const url = 'https://jords-springy.github.io/hostedimages/images/CV-Jordan-Springveldt.pdf';
        const filename = 'CV-Jordan-Springveldt.pdf';
        fetch(url)
          .then(response => response.blob())
          .then(blob => {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          })
          .catch(console.error);
      }
    }
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
    button {
  background-color: #a6a6a6;
  color: #fff;
  padding: 10px 20px;
  border: solid 1px transparent; /* add this line */
  border-radius: 10px;
  cursor: pointer;
}
    button:hover {
      background-color: #6d5b67;
    }
  </style>
  