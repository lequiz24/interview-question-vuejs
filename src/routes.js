import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import ContactPage from './components/ContactPage.vue';

export default [
  {
    path: '/',
    name: 'homepage',
    component: HomePage,
  },
  {
    path: '/aboutpage',
    name: 'aboutpage',
    component: AboutPage,
  },
  {
    path: '/contactpage',
    name: 'contactpage',
    component: ContactPage,
  },
];
