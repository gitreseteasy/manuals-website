import { RouteRecordRaw } from 'vue-router';
import { SearchPage, SearchResultsPage } from '@/views';

export const routes: Array<RouteRecordRaw> = [
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
