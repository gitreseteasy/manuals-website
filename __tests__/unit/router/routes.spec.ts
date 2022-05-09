import {routes} from "@/router/routes";
import {SearchPage, SearchResultsPage} from "@/views";
import {RouteRecordRaw} from "vue-router";

describe('routes', () => {
  it('should contain 2 routes', () => {
    expect(routes.length).toEqual(2);
  });
  it('should contain a home search page route', () => {
    routes.find((route: RouteRecordRaw) => {
      return (
        route.path === '/' &&
        route.name === 'Home' &&
        route.component === SearchPage
      );
    })
  });
  it('should contain a home search page route', () => {
    routes.find((route: RouteRecordRaw) => {
      return (
        route.path === '/search-results' &&
        route.name === 'SearchResults' &&
        route.component === SearchResultsPage
      );
    })
  });
});
