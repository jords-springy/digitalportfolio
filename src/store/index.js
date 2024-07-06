import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    about: [],
    projects: [],
    education: [],
    skills: [],
    workExperience: [],
    testimonial: [],
    loading: false,
  },
  mutations: {
    SET_ABOUT(state, about) {
      state.about = about;
    },
    SET_PROJECTS(state, projects) {
      state.projects = projects;
    },
    SET_EDUCATION(state, education) {
      state.education = education;
    },
    SET_SKILLS(state, skills) {
      state.skills = skills;
    },
    SET_WORK_EXPERIENCE(state, workExperience) {
      state.workExperience = workExperience;
    },
    SET_TESTIMONIAL(state, testimonial) {
      state.testimonial = testimonial;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    async fetchData({
      commit
    }) {
      commit('SET_LOADING', true);
      try {
        const response = await fetch('https://jords-springy.github.io/first_api/data/index.json');
        const data = await response.json();
        commit('SET_ABOUT', data.about);
        commit('SET_PROJECTS', data.projects);
        commit('SET_EDUCATION', data.education);
        commit('SET_SKILLS', data.skills);
        commit('SET_WORK_EXPERIENCE', data.workExperience);
        commit('SET_TESTIMONIAL', data.testimonial);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        commit('SET_LOADING', false);
      }
    }
  },
  getters: {
    about: (state) => state.about,
    projects: (state) => state.projects,
    education: (state) => state.education,
    skills: (state) => state.skills,
    workExperience: (state) => state.workExperience,
    testimonial: (state) => state.testimonial,
    loading: (state) => state.loading,
  }
});