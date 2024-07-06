import {
  createRouter,
  createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPage from '@/components/LandingPage.vue';
import AboutPage from '@/components/AboutPage.vue';
import EducationComp from '@/components/EducationComp.vue';
import ProjectPage from '@/components/ProjectPage.vue';
import TestimonialPage from '@/components/TestimonialPage.vue';
import ContactPage from '@/components/ContactPage.vue';

const routes = [{
    path: '/',
    name: 'home',
    component: HomeView
  }, {
    path: '/landingpage',
    component: LandingPage
  },
  {
    path: '/about',
    component: AboutPage
  },
  {
    path: '/education',
    component: EducationComp
  },
  {
    path: '/projects',
    component: ProjectPage
  },
  {
    path: '/testimonial',
    component: TestimonialPage
  },
  {
    path: '/contact',
    component: ContactPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return {
        top: 0
      };
    }
  },
});

export default router