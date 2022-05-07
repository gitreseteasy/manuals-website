<template>
  <div>
    <div class="text-5xl w-full text-center h-20">Results</div>
    <div class="border-2 border-black p-4">
      <table class="table w-full text-left">
        <tbody>
          <tr class="h-12 border-b-2 border-black text-3xl">
            <th>Result</th>
            <th>Title</th>
            <th>Author</th>
            <th>Contributor</th>
            <th>Creation Date</th>
          </tr>
          <template v-if="resultsWithViewCopy.length">
            <tr
                v-for="(resultItem, resultIndex) in resultsWithViewCopy"
                :key="resultIndex"
                class="h-12 border-b-2 border-black text-2xl odd:bg-gray-200"
            >
              <td>{{ resultIndex + 1 }}</td>
              <td>{{ resultItem.title }}</td>
              <td>{{ resultItem.author_name }}</td>
              <td>{{ resultItem.contributor_name }}</td>
              <td>{{ resultItem.created_at }}</td>
            </tr>
          </template>
        <template v-else>
          <tr>
            <td colspan="5" class="h-12 text-center text-2xl">No results</td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { SearchResultModel } from '@/models';
import { formatDateForResultsPage } from '@/helpers';

@Options({
})
export default class SearchResultsPage extends Vue {
  results: Array<SearchResultModel> = [];

  get resultsWithViewCopy(): Array<SearchResultModel> {
    return this.results.map((resultItem, resultIndex) => {
      return {
        ...resultItem,
        created_at: formatDateForResultsPage(resultItem.created_at)
      };
    });
  }
}
</script>
