import { mount, VueWrapper } from "@vue/test-utils";
import SearchPage from "@/views/SearchPage.vue";
import faker from "@faker-js/faker";

describe('SearchPage', () => {
  const wrapper = mount(SearchPage, {});
  describe('component', () => {
    it('should mount properly without exploding', () => {
      expect(wrapper).toBeInstanceOf(VueWrapper);
    });
  })
  describe('members', () => {
    it('should mount with an initial search input of empty string', () => {
      expect(wrapper.vm.searchInput).toBe('');
    })
  });
  describe('methods', () => {
    describe('submitSearch', () => {
      it('should return undefined regardless of input', () => {
        for(let i=0; i<50; i++) {
          const input = faker.random.word();
          expect(wrapper.vm.submitSearch(input)).toBe(undefined);
        }
      });
    });
  });
});
