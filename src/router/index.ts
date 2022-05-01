import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { SearchPage, SearchResultsPage } from '@/views';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: SearchPage
  },
  {
    path: '/search-results',
    name: 'SearchResults',
    component: SearchResultsPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
