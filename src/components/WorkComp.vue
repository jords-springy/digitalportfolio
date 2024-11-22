<template>
  <div>
    <div class="work-section" data-aos="zoom-out-up" data-aos-duration="1500">
      <h2 class="section-title work-section__title">Work Experience</h2>
      <button
        @click="downloadCV"
        class="btn btn-light mt-3"
        style="color: #6d5b67"
      >
        Download CV
      </button>
      <br />
      <br />
      <br />
      <div class="timeline">
        <div
          v-for="(experience, index) in workExperienceData"
          :key="index"
          :class="['timeline-item', index % 2 === 0 ? 'left' : 'right']"
        >
          <div class="content">
            <img
              :src="experience.contact.github"
              alt="Work Logo"
              class="work-logo"
            />
            <h4>{{ experience.placeOfWork }}</h4>
            <h5>{{ experience.description }}</h5>
            <p>{{ experience.date }}</p>
          </div>
        </div>
      </div>
      <br />
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
        "https://jords-springy.github.io/hostedimages/images/Jordan%20Springveldt%20-%20CV.pdf";
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
.work-logo {
  max-width: 100px;
  height: auto;
  margin-bottom: 10px;
}

.work-section {
  background-color: #fff;
  padding: 60px 0;
}

.work-section__title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 6px;
  background-color: #6d5b67;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

.timeline-item {
  position: relative;
  padding: 10px 40px;
  width: 50%;
  margin-bottom: 20px; /* Add margin for spacing */
}

.timeline-item.left {
  left: 0;
}

.timeline-item.right {
  left: 50%;
}

.timeline-item .content {
  padding: 20px;
  border-radius: 8px;
  position: relative;
  text-align: center;
}

.timeline-item::before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  left: 50%; /* Center the dot horizontally */
  transform: translateX(-50%); /* Offset to ensure the dot is centered */
  background-color: #6d5b67;
  border: 4px solid #f4f0ec;
  top: 100px;  /* Adjust to control vertical placement */
  border-radius: 50%;
  z-index: 1;
}

.timeline-item.left::before {
  left: 100%; /* Center the dot horizontally for left-side items */
}

.timeline-item.right::before {
  left: 0%; /* Center the dot horizontally for right-side items */
}

.btn-light {
  border: none;
  color: #6d5b67;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 1rem;
}

.btn-light:hover {
  color: #f4f0ec;
}

/* Media Queries */
@media (max-width: 768px) {
  .work-section {
    padding: 30px 0; /* Reduce padding on mobile */
  }

  .work-section__title {
    font-size: 2rem; /* Adjust title size for smaller screens */
  }

  .timeline {
    max-width: 100%; /* Allow full-width on smaller screens */
    padding: 0 10px;
  }

  .timeline-item {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }

  .timeline-item.left,
  .timeline-item.right {
    left: 0;
  }

  .timeline::after {
    left: 20px;
  }

  .timeline-item::before {
    left: 50%; /* Center the dots */
    top: 80px; /* Lower the dots slightly for mobile */
  }

  .work-logo {
    max-width: 80px; /* Reduce logo size on mobile */
  }

  .btn-light {
    width: 100%; /* Make the button full-width on mobile */
    margin-top: 20px;
  }
}
</style>
