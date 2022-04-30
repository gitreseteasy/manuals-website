<template>
  <div class="mb-16 flex w-full flex-col items-center justify-center space-y-4">
    <label for="searchField" class="block font-mono text-3xl font-extralight">
      Search for a manual
    </label>
    <input
      v-model="searchInput"
      class="w-7/8 block h-12 rounded-2xl border-4 px-4 py-8 font-mono text-2xl caret-black"
      name="searchField"
      type="text"
      placeholder="Enter text"
      aria-label="search input"
    />
    <button
      class="rounded-2xl border-4 border-white bg-black p-4 font-mono text-2xl text-white hover:border-4 hover:border-black hover:bg-white hover:text-black"
      aria-label="submit search"
      @click="submitSearch(searchInput)"
    >
      Submit search
    </button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class SearchPage extends Vue {
  searchInput = '';

  submitSearch(input: string) {
    console.log(`submit search for ${input}`);
  }
}
</script>
