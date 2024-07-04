<template>
    <div>
      <div
        class="section1-mt-0"
        :style="{
          minHeight: '750px',
          backgroundImage:
            'url(https://jords-springy.github.io/hostedimages/images/section1.png)',
          paddingTop: '60px',
          maxWidth: '100%',
          margin: '0 auto',
          backgroundSize: 'cover'
        }"
      >
      <div class="card" data-aos="zoom-out-down" data-aos-duration="1500">
        <div class="education-section">
          <div class="education-section__title">Education</div>
          <div class="education-section__content">
            <div v-for="(education, index) in educationData" :key="index">
                <h1>{{ education.placeOfInstitution1 || education.placeOfInstitution2 }}</h1>
                <p v-if="education.description1">{{ education.description1 }}<br></p>
                <p v-if="education.contactName1 || education.contactName2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg>
                  {{ education.contactName1 }} {{ education.contactName2 }}<br>
                  {{ education.contactDetails1 }} {{ education.contactDetails2 }}
                </p>
                <p>Years: {{education.year1}} {{education.years}}</p>
                <p v-if="education.subjects2 || education.pass2">
                  <span v-if="education.subjects2">Subjects: {{ education.subjects2 }}</span><br>
                  <span v-if="education.pass2">Pass: {{ education.pass2 }}</span><br>
                </p>
              </div>
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
        educationData: [],
      };
    },
    mounted() {
      fetch("https://jords-springy.github.io/first_api/data/index.json?_=" + new Date().getTime())
        .then(response => response.json())
        .then(data => {
          this.educationData = data.education;
        })
        .catch(error => console.error(error));
    },
  };
  </script>
  
  <style>
 .card {
    background-color: #fff;
    width: 1000px;
    padding: 20px;
    margin: 0 auto; /* add this line */
    border: 1px solid #ddd;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
  

  
  .education-section__title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
  }
  
  .education-section__content {
    font-size: 1.1rem;
    line-height: 1.7;
    width: 100%;
    margin: 0 auto;
  }
  </style>