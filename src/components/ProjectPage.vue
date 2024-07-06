<template>
    <div id="projects-section">
    <div
      class="section1-mt-0"
      :style="{
        minHeight: '750px',
        backgroundImage: 'url(https://jords-springy.github.io/hostedimages/images/section1.png)',
        paddingTop: '60px',
        maxWidth: '100%',
        margin: '0 auto',
        backgroundSize: 'cover'
      }"
    >
    <div class="projects-section" data-aos="flip-up" data-aos-duration="3000">
      <h2 class="section-title" data-aos="flip-up" data-aos-duration="3000">My Projects</h2>
      <div class="row">
        <div class="col-md-4" v-for="project in projectsData" :key="project.name">
          <div class="project-card">
            <img :src="project.image" :alt="project.name" class="card-img-top img-fluid" style="width: 500px; height: 150px;">
            <div class="card-body">
              <h5>{{ project.name }}</h5>
              <p>{{ project.description }}</p>
              <div class="links">
                <a :href="project.github" target="_blank">GitHub</a>
                <a :href="'https://' + project.vercel" target="_blank">Live Demo</a>
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
    fetch("https://jords-springy.github.io/first_api/data/index.json?_=" + new Date().getTime())
      .then(response => response.json())
      .then(data => {
        this.projectsData = data.projects;
      })
      .catch(error => console.error(error));
  },
};
</script>

<style>
.project-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  text-align: center;
  width: 250px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.links {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.links a {
  margin: 5px;
  text-decoration: none;
  color: lightslategray;
}

.links a:hover {
  text-decoration: underline;
}

/* For screens larger than 1200px */
@media (min-width: 1200px) {
  .project-card {
    width: 300px;
  }
  .project-card img {
    height: 180px;
  }
}

/* For screens between 768px and 1200px */
@media (min-width: 768px) and (max-width: 1200px) {
  .project-card {
    width: 250px;
  }
  .project-card img {
    height: 150px;
  }
}

/* For screens smaller than 768px */
@media (max-width: 768px) {
  .project-card {
    width: 200px;
  }
  .project-card img {
    height: 120px;
  }
}

/* For screens smaller than 300px */
@media (max-width: 300px) {
  .project-card {
    width: 150px;
  }
  .project-card img {
    height: 90px;
  }
  .links {
    flex-direction: column;
  }
  .links a {
    margin: 10px;
  }
}
</style>