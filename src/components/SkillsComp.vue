<template>
  <div>
    <!-- Skills Section -->
    <div class="skills-section" data-aos="zoom-out-up" data-aos-duration="1500">
      <h2 class="section-title">My Skills</h2>
      <div v-for="(skills, category) in groupedSkills" :key="category" class="category-section">
      <br><br>
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
              <a v-if="skill.link" :href="skill.link" target="_blank" style="color: #6d5b67">
                  View Credential
                </a>
              <a v-if="skill.pdf" :href="skill.pdf" target="_blank" class="btn btn-light mt-3" style="color: #6d5b67">
                View Certificates
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Case Studies Section -->
    <div class="case-studies-section" data-aos="fade-up" data-aos-duration="1500">
      <h2 class="section-title">Case Studies</h2>
      <div v-for="(caseStudies, category) in groupedCaseStudies" :key="category" class="category-section">
        <h3 class="category-title">{{ category }}</h3>
        <div class="row justify-content-center flex-wrap">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" v-for="caseStudy in caseStudies" :key="caseStudy.name">
            <div class="case-study-card">
              <img
                :src="caseStudy.github"
                :alt="caseStudy.name"
                class="card-img-top img-fluid zoom-effect"
                style="width: 275px; height: 275px;"
              />
              <div class="card-body">
                <h5>{{ caseStudy.name }}</h5>
                <a v-if="caseStudy.link" :href="caseStudy.link" target="_blank" class="btn btn-light mt-3" style="color: #6d5b67">
                  View Case Study
                </a>
                <a v-if="caseStudy.pdf" :href="caseStudy.pdf" target="_blank" class="btn btn-light mt-3" style="color: #6d5b67">
                  Download PDF
                </a>
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
      skillsData: [],
      caseStudiesData: [], // Store the case studies data
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
    groupedCaseStudies() {
      return this.caseStudiesData.reduce((groups, caseStudy) => {
        if (!groups[caseStudy.category]) {
          groups[caseStudy.category] = [];
        }
        groups[caseStudy.category].push(caseStudy);
        return groups;
      }, {});
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("https://jords-springy.github.io/first_api/data/index.json?_=" + new Date().getTime())
        .then((response) => response.json())
        .then((data) => {
          this.skillsData = data.skills;
          this.caseStudiesData = data.caseStudies;
        })
        .catch((error) => console.error(error));
    },
    openPdf(pdfLink) {
      window.open(pdfLink, '_blank');
    }
  }
};
</script>

<style>
/* Skills and Case Studies Sections */
.skills-section, .case-studies-section {
  background-color: #fff;
  padding: 60px 0;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 30px;
  text-align: center;
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

/* Case Study Card Styles */
.case-study-card {
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s; /* Smooth transition on hover */
}

.case-study-card:hover {
  transform: translateY(-5px); /* Lift effect on hover */
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}

/* Responsive Spacing for Cards */
.row.justify-content-center {
  gap: 20px; /* Adds space between columns */
}

/* Button Styles */
.btn-light {
  border: none;
  color: #6d5b67;
  transition: background-color 0.3s, color 0.3s;
}

/* Center Content in Card Body */
.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 100%;
}

/* AWS Category Flex */
.aws-category {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

/* Large Screens */
@media (min-width: 1200px) {
  .skills-section, .case-studies-section {
    padding: 80px 0;
  }
  .section-title {
    font-size: 3rem;
  }
}

/* Medium Screens */
@media (min-width: 768px) and (max-width: 1200px) {
  .skills-section, .case-studies-section {
    padding: 60px 0;
  }
  .section-title {
    font-size: 2.5rem;
  }
}

/* Small Screens */
@media (max-width: 768px) {
  .skills-section, .case-studies-section {
    padding: 40px 0;
  }
  .section-title {
    font-size: 2rem;
  }
}

/* Extra Small Screens */
@media (max-width: 300px) {
  .skills-section, .case-studies-section {
    padding: 20px 0;
  }
  .section-title {
    font-size: 1.5rem;
  }
}
</style>
