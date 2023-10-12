<script>
  import page from "page";
  import { onMount } from "svelte";
  import { loadHomes, loadStates } from "../../lib/api/allhomes";
  import { topOrBottom, state, city } from "../../stores/homes";
  import Card from "../../components/Card/card.svelte";

  let baseURL = "https://app.realtorstat.com/api/";
  let isLoading = false;
  $: searchedData = [];
  $: searchResults = [];
  $: searchGap = 0;
  $: searchGapArray = [];

  let keyword = [];

  let allStates = [];

  onMount(async () => {
    isLoading = true;
    let resultJson = await loadHomes();
    searchedData = [...resultJson];
    isLoading = false;
    let resultStates = await loadStates();
    allStates = [...Object.entries(resultStates.allStates)];
  });

  const autocompleteOnChange = async (ac) => {
    keyword = ac.city_state;
    searchResults = [];
    isLoading = true;
    $city = ac?.city;
    $state = ac?.state;
    let searchResultJson = await loadHomes();
    searchedData = [...searchResultJson];
    isLoading = false;
  };

  const changeType = async () => {
    isLoading = true;
    const isBrowser = typeof window !== "undefined";
    if (isBrowser && localStorage.getItem("topOrBottom") === "top_ten") {
      localStorage.setItem("topOrBottom", "bottom_ten");
      $topOrBottom = "bottom_ten";
    } else if (
      isBrowser &&
      localStorage.getItem("topOrBottom") === "bottom_ten"
    ) {
      localStorage.setItem("topOrBottom", "top_ten");
      $topOrBottom = "top_ten";
    }
    let newResultJson = await loadHomes();
    searchedData = [...newResultJson];
    isLoading = false;
  };

  async function getItems(e) {
    const url = `${baseURL}city-search/` + encodeURIComponent(e.target.value);
    const response = await fetch(url);
    const searchData = await response.json();
    searchResults = [...searchData];
    searchResults.map((_, index) => {
      searchGap += 2.8;
      searchGapArray = [...searchGapArray, `bottom:-${searchGap}rem`];
    });
    // return searchData;
  }
</script>

{#key searchedData}
  <div class="flex flex-col px-10 bg-gray-50">
    <div
      class="grid gap-4 grid-cols-9 my-10 p-4 rounded-md bg-gray-700 items-center"
    >
      <div
        on:click={() => page.redirect("/allhomes")}
        class="text-2xl font-bold text-white col-span-5 cursor-pointer"
      >
        Top 10 {$topOrBottom === "top_ten" ? "Highest" : "Lowest"} priced homes sold
        in Your City
      </div>
      <button
        on:click={changeType}
        type="submit"
        class="text-blue-400 font-bold text-lg cursor-pointer col-span-2"
      >
        Check {$topOrBottom === "top_ten" ? "Bottom Ten" : "Top Ten"}
      </button>

      <div class="col-span-2 relative">
        <input
          type="text"
          value={keyword}
          on:input={(e) => getItems(e)}
          name="city"
          list="cityname"
          class="w-[300px] p-2 rounded-md"
          placeholder="Search An Address"
        />
        {#key searchResults && searchGap}
          {#each searchResults as tempResult, index}
            <div
              on:click={() => autocompleteOnChange(tempResult)}
              style={`${searchGapArray[index]}`}
              class="z-10 cursor-pointer absolute bg-gray-300 w-[18.7rem] h-10 rounded-md flex justify-left items-center p-2 text-lg"
            >
              {tempResult.city_state}
            </div>
          {/each}
        {/key}
      </div>
    </div>
  </div>
  {#if isLoading}
    <div class="w-full h-screen flex justify-center items-center">
      <p class="text-2xl font-bold text-blue-500">Loading...</p>
    </div>
  {:else}
    <div class="px-10 flex flex-col bg-gray-50 mb-10">
      {#if searchedData.length === 0}
        <div class="w-full h-screen flex justify-center items-center">
          <p class="text-2xl font-bold text-blue-500">No Data</p>
        </div>
      {:else}
        <div class="flex flex-col gap-6">
          {#each searchedData as house}
            <Card {...house} />
          {/each}
        </div>
      {/if}
    </div>
  {/if}

  <div class="bg-blue-100 py-16 flex justify-center items-center">
    <div>
      <p class="text-lg font-bold text-blue-700 mb-4">
        Search for homes by States
      </p>
      <div class="grid grid-cols-5 gap-2">
        {#each allStates as [key, state]}
          <a
            href={`/state/${key}`}
            class="text-sm text-blue-700 pr-20 cursor-pointer"
          >
            {state}
          </a>
        {/each}
      </div>
    </div>
  </div>
{/key}
