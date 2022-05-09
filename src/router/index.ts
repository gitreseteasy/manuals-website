import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { SearchPage, SearchResultsPage } from '@/views';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
