import { defineStore } from 'pinia';
import {SearchResultModel} from "@/models";

export const useSearchResultsStore = defineStore('SearchResultsStore', {
  // state
  state: () => ({
    results: [] as Array<SearchResultModel>
  }),
  
  actions: {
    updateResults(results: Array<SearchResultModel>) {
      this.results = results;
    }
  }

  // actions

  // getters
});
