import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import SearchPage from '@/views/SearchPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: SearchPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
