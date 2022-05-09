import {mount, VueWrapper} from "@vue/test-utils";
import {SearchResultsPage} from "@/views";
import faker from "@faker-js/faker";

describe('SearchResultsPage', () => {
  const wrapper = mount(SearchResultsPage, {
    global: {
      mocks: {
        $route: {params: {}},
        $router: {push: jest.fn()}
      }
    }
  });
  
  describe('component', () => {
    it('should mount properly without exploding', () => {
      expect(wrapper).toBeInstanceOf(VueWrapper);
    });
  });
  describe('members', () => {
    it('should mount with an empty array of results', () => {
      expect(wrapper.vm.results).toEqual([]);
    });
  });
  describe('methods', () => {
    describe('resultsWithViewCopy', () => {
      it('should return an empty array with empty input', () => {
        wrapper.vm.results = [];
        expect(wrapper.vm.resultsWithViewCopy).toEqual([]);
      });
      it('should return an array of SearchResultModel (with formatted dates) when results is changed', () => {
       const id = faker.datatype.uuid();
       const title = faker.hacker.phrase();
       const author_name = faker.internet.userName();
       const contributor_name = faker.internet.userName();
       
        wrapper.vm.results = [
          { id, title, author_name, contributor_name, created_at: '2022-06-20' }
        ];
        
        const expected = { id, title, author_name, contributor_name, created_at: '20 Jun 2022' };

        expect(wrapper.vm.resultsWithViewCopy.length).toEqual(1);
        expect(wrapper.vm.resultsWithViewCopy[0]).toEqual(expected);
      });
    });
  })
});
