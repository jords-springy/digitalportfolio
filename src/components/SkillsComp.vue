<template>
    <div class="skills-section" data-aos="zoom-out-up" data-aos-duration="1500">
        <h2 class="section-title">My Skills</h2>
        <div class="row">
            <div class="col-md-4" v-for="skill in skillsData" :key="skill.name">
                <img :src="skill.github" :alt="skill.name" class="card-img-top img-fluid zoom-effect" style="width: 150px; height: 150px;">
                <div class="card-body">
                    <h5>{{ skill.name }}</h5>
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
  mounted() {
    fetch("https://jords-springy.github.io/first_api/data/index.json?_=" + new Date().getTime())
    .then(response => response.json())
    .then(data => {
        this.skillsData = data.skills;
      })
    .catch(error => console.error(error));
  },
};
</script>

<style>
   .skills-section {
        background-color: #f8f9fa;
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
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
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
</style>