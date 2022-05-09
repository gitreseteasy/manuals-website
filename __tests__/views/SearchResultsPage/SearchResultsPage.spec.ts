import {mount, VueWrapper} from "@vue/test-utils";
import {SearchResultsPage} from "@/views";
import faker from "@faker-js/faker";
import {useSearchResultsStore} from "@/stores/search-results.store";
import {createPinia} from "pinia";

describe('SearchResultsPage', () => {
  const wrapper = mount(SearchResultsPage, {
    global: {
      plugins: [createPinia()],
      mocks: {
        $route: {params: {}},
        $router: {push: jest.fn()}
      }
    }
  });
  const store = useSearchResultsStore();
  
  describe('component', () => {
    it('should mount properly without exploding', () => {
      expect(wrapper).toBeInstanceOf(VueWrapper);
    });
  });
  describe('methods', () => {
    describe('resultsWithViewCopy', () => {
      it('should return an empty array with empty results store', () => {
        store.updateResults([]);
        expect(wrapper.vm.resultsWithViewCopy).toEqual([]);
      });
      it('should return an array of SearchResultModel (with formatted dates) when results store is changed', () => {
       const id = faker.datatype.uuid();
       const title = faker.hacker.phrase();
       const author_name = faker.internet.userName();
       const contributor_name = faker.internet.userName();

       store.updateResults([
         { id, title, author_name, contributor_name, created_at: '2022-06-20' }
       ]);

        const expected = { id, title, author_name, contributor_name, created_at: '20 Jun 2022' };

        expect(wrapper.vm.resultsWithViewCopy.length).toEqual(1);
        expect(wrapper.vm.resultsWithViewCopy[0]).toEqual(expected);
      });
    });
  })
});
