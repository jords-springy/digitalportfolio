<template>
  <div>
    <div class="work-section" data-aos="zoom-out-up" data-aos-duration="1500">
      <h2 class="section-title work-section__title">Work Experience</h2>
      <div
        v-for="(experience, index) in workExperienceData"
        :key="index"
        class="work-section__content"
      >
        {{ experience.description }}
        <br>
        {{ experience.date }}
      </div>
      <br />
      <button @click="downloadCV" class="btn btn-light mt-3" style="color: #6d5b67">Download CV</button>
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
    fetch(
      "https://jords-springy.github.io/first_api/data/index.json?_=" +
        new Date().getTime()
    )
      .then((response) => response.json())
      .then((data) => {
        this.workExperienceData = data.workExperience;
      })
      .catch((error) => console.error(error));
  },
  methods: {
    downloadCV() {
      const url =
        "https://jords-springy.github.io/hostedimages/images/CV%20-%20Jordan%20Springveldt.pdf";
      const filename = "CV-Jordan-Springveldt.pdf";
      fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
          const link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch(console.error);
    },
  },
};
</script>
  
  <style>
.work-section {
  background-color: #fff;
  padding: 60px 0;
}

.work-section__title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.work-section__content {
  font-size: 1.1rem;
}

.btn-light {
  background-color: #a6a6a6;
  border: none;
  color: #6d5b67;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 1rem;
}

.btn-light:hover{
  color:#f4f0ec
}

/* Media query for 1200px */
@media (max-width: 1200px) {
 .work-section {
    padding: 40px 0;
  }
 .work-section__title {
    font-size: 2rem;
  }
 .work-section__content {
    font-size: 1rem;
  }
  button {
    padding: 8px 16px;
  }
}

/* Media query for 768px */
@media (max-width: 768px) {
 .work-section {
    padding: 20px 0;
  }
 .work-section__title {
    font-size: 1.8rem;
  }
 .work-section__content {
    font-size: 0.9rem;
  }
  button {
    padding: 6px 12px;
  }
}

/* Media query for 300px */
@media (max-width: 300px) {
 .work-section {
    padding: 10px 0;
  }
 .work-section__title {
    font-size: 1.5rem;
  }
 .work-section__content {
    font-size: 0.7rem;
  }
  button {
    padding: 4px 8px;
  }
}
</style>
  