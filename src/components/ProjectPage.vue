<template>
  <div id="projects-section">
    <div
      class="section1-mt-0"
      :style="{
        minHeight: '750px',
        backgroundColor: '#e6e6fa',
        paddingTop: '60px',
        maxWidth: '100%',
        margin: '0 auto',
        backgroundSize: 'cover'
      }"
    >
      <div class="projects-section" data-aos="flip-up" data-aos-duration="3000">
        <h2 class="section-title" data-aos="flip-up" data-aos-duration="3000">
          My Projects
        </h2>
        <div class="row justify-content-center">
          <div
            class="col-6 col-md-4 mb-3" 
            v-for="project in projectsData"
            :key="project.name"
          >
            <div class="project-card">
              <img
                :src="project.image"
                :alt="project.name"
                class="card-img-top img-fluid"
              />
              <div class="card-body">
                <h5>{{ project.name }}</h5>
                <p>{{ project.description }}</p>
                <div class="links">
                  <a :href="project.github" target="_blank" class="btn btn-light mt-3" style="color: #6d5b67">GitHub</a>
                  <a :href="project.vercel" target="_blank" class="btn btn-light mt-3" style="color: #6d5b67">Live Demo</a>
                </div>
              </div>
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
      projectsData: [],
    };
  },
  mounted() {
    fetch("https://jords-springy.github.io/first_api/data/index.json")
      .then((response) => response.json())
      .then((data) => {
        this.projectsData = data.projects;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style>
.project-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  width: 100%; /* Set width to 100% for full utilization of the column */
  max-width: 300px; /* Adjust this to match the case study card width */
  margin: 0 auto; /* Center the card within the column */
}

.project-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}

.project-card img {
  width: 100%;
  height: 150px; /* Fixed height to maintain uniformity */
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.links {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.btn-light {
  border: none;
  color: #6d5b67;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 1rem;
  padding: 8px 16px; /* Adjust padding for a better button size */
  font-size: 14px; /* Adjust font size */
}

.btn-light:hover {
  background-color: grey; /* Change the background color on hover */
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
}

/* Media Queries */
@media (min-width: 1200px) {
  .project-card img {
    height: 180px;
  }
}

@media (min-width: 768px) and (max-width: 1200px) {
  .project-card img {
    height: 150px;
  }
}

@media (max-width: 768px) {
  .project-card img {
    height: 120px;
  }

  .section-title {
    font-size: 2rem;
  }

  .btn-light {
    padding: 6px 12px; /* Adjust button padding for medium screens */
    font-size: 12px; /* Adjust font size for medium screens */
  }
}

@media (max-width: 480px) {
  .project-card img {
    height: 90px;
  }

  .links {
    flex-direction: column; /* Stack buttons vertically */
    align-items: center; /* Center the buttons */
  }

  .btn-light {
    margin: 5px 0; /* Add vertical margin to space out the buttons */
    width: 80%; /* Make buttons full width on small screens */
    padding: 6px 12px; /* Adjust padding for smaller buttons */
    font-size: 12px; /* Adjust font size for smaller buttons */
  }
}
</style>
