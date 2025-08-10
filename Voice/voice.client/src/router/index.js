import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';
import AuthorizationLoginPage from '../views/AuthorizationLoginPage.vue';
import AuthorizationRegistrationPage from '../views/AuthorizationRegistrationPage.vue';
import ThoughtStream from '../views/ThoughtStream.vue';
import SettingsProfile from '../views/SettingsProfile.vue';
import AboutApp from '../views/AboutApp.vue';
import Bookmarks from '../views/Bookmarks.vue';
import Explore from '../views/Explore.vue';


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
      { path: 'main', component: ThoughtStream },
      { path: 'profile', component: SettingsProfile },
      { path: 'aboutApp', component: AboutApp },
      { path: 'bookmarks', component: Bookmarks },
      { path: 'explore', component: Explore }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
