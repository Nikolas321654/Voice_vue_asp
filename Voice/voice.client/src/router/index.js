import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import AuthorizationLoginPage from '../views/AuthorizationLoginPage.vue';
import AuthorizationRegistrationPage from '../views/AuthorizationRegistrationPage.vue';
import ThoughtStream from '../views/ThoughtStream.vue';
import SettingsProfile from '../views/SettingsProfile.vue';


const routes = [
  {
    path: '/',
    component: AuthorizationRegistrationPage
  },
  {
    path: '/login',
    component: AuthorizationLoginPage
  },
  {
    path: '/main',
    component: Main,
    children: [
      { path: '', component: ThoughtStream },
      { path: '/settings', component: SettingsProfile }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
