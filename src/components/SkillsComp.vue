<template>
  <div class="skills-section" data-aos="zoom-out-up" data-aos-duration="1500">
    <h2 class="section-title">My Skills</h2>
    <div v-for="(skills, category) in groupedSkills" :key="category" class="category-section">
      <h3 class="category-title">{{ category }}</h3>
      <div class="row justify-content-center" :class="{ 'aws-category': category === 'AWS' }">
        <div :class="category === 'AWS' ? 'col-md-auto' : 'col-md-4'" v-for="skill in skills" :key="skill.name">
          <img
            :src="skill.github"
            :alt="skill.name"
            class="card-img-top img-fluid zoom-effect"
            style="width: 150px; height: 150px"
            @click="skill.pdf && openPdf(skill.pdf)" 
          />
          <div class="card-body">
            <h5>{{ skill.name }}</h5>
            <a v-if="skill.pdf" :href="skill.pdf" target="_blank" class="btn btn-light mt-3" style="color: #6d5b67">
              View Certificates
            </a>
            <br>
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
      skillsData: [],
    };
  },
  computed: {
    groupedSkills() {
      return this.skillsData.reduce((groups, skill) => {
        if (!groups[skill.category]) {
          groups[skill.category] = [];
        }
        groups[skill.category].push(skill);
        return groups;
      }, {});
    },
  },
  mounted() {
    fetch(
      "https://jords-springy.github.io/first_api/data/index.json?_=" +
        new Date().getTime()
    )
      .then((response) => response.json())
      .then((data) => {
        this.skillsData = data.skills;
      })
      .catch((error) => console.error(error));
  },
};
</script>

<style>
.btn-light {
  border: none;
  color: #6d5b67;
  transition: background-color 0.3s, color 0.3s;
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  text-align: center; /* Center text */
  justify-content: center; /* Center vertically */
  height: 100%; /* Full height */
}

.skills-section {
  background-color: #fff;
  padding: 60px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.zoom-effect {
  animation: zoom-effect 3s infinite;
}

@keyframes zoom-effect {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.8);
  }
}

/* For screens larger than 1200px */
@media (min-width: 1200px) {
  .skills-section {
    padding: 80px 0;
  }
  .skills-section .section-title {
    font-size: 3rem;
  }
}

/* For screens between 768px and 1200px */
@media (min-width: 768px) and (max-width: 1200px) {
  .skills-section {
    padding: 60px 0;
  }
  .skills-section .section-title {
    font-size: 2.5rem;
  }
}

/* For screens smaller than 768px */
@media (max-width: 768px) {
  .skills-section {
    padding: 40px 0;
  }
  .skills-section .section-title {
    font-size: 2rem;
  }
}

/* For screens smaller than 300px */
@media (max-width: 300px) {
  .skills-section {
    padding: 20px 0;
  }
  .skills-section .section-title {
    font-size: 1.5rem;
  }
}

/* Center the AWS category skills */
.aws-category {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>