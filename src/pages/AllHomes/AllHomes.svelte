<script>
  import "./AllHomes.css";
  import page from "page";
  import { onMount } from "svelte";
  import { loadHomes, loadStates } from "../../lib/api/allhomes";
  import { topOrBottom, state, city } from "../../stores/homes";
  import Card from "../../components/Card/Card.svelte";

  export let stateQuery;
  export let cityQuery;

  let baseURL = "https://app.realtorstat.com/api/";
  let isLoading = false;
  $: searchedData = [];
  $: searchResults = [];
  $: searchedLowData = [];
  $: searchLowResults = [];
  $: searchGap = 0;
  $: searchGapArray = [];
  let tempCity;
  let keyword = [];

  let allStates = [];

  onMount(async () => {
    tempCity = cityQuery === undefined ? $city : cityQuery;
    isLoading = true;
    // localStorage.setItem("topOrBottom", $topOrBottom);
    let resultJson = await loadHomes("top_ten", stateQuery, cityQuery);
    searchedData = [...resultJson.slice(0, 10)];

    let resultLowJson = await loadHomes("bottom_ten", stateQuery, cityQuery);
    searchedLowData = [...resultLowJson.slice(0, 10)];
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
    let searchResultJson = await loadHomes("top_ten");
    searchedData = [...searchResultJson.slice(0, 10)];
    let searchLowResultJson = await loadHomes("bottom_ten");
    searchedLowData = [...searchLowResultJson.slice(0, 10)];
    isLoading = false;
  };

  // const changeType = async () => {
  //   isLoading = true;
  //   const isBrowser = typeof window !== "undefined";
  //   if (isBrowser && localStorage.getItem("topOrBottom") === "top_ten") {
  //     localStorage.setItem("topOrBottom", "bottom_ten");
  //     $topOrBottom = "bottom_ten";
  //   } else if (
  //     isBrowser &&
  //     localStorage.getItem("topOrBottom") === "bottom_ten"
  //   ) {
  //     localStorage.setItem("topOrBottom", "top_ten");
  //     $topOrBottom = "top_ten";
  //   }
  //   let newResultJson = await loadHomes();
  //   searchedData = [...newResultJson.slice(0, 10)];
  //   isLoading = false;
  // };

  async function getItems(e) {
    const url = `${baseURL}city-search/` + encodeURIComponent(e.target.value);
    const response = await fetch(url);
    const searchData = await response.json();
    searchResults = [...searchData.slice(0, 10)];
    searchResults.map((_, index) => {
      searchGap += 2.8;
      searchGapArray = [...searchGapArray, `bottom:-${searchGap}rem`];
    });
    // return searchData;
  }
</script>

{#key searchedData || searchedLowData}
  {#if isLoading}
    <div
      style="width: 100%;height: 100vh;display: flex; justify-content: center;align-items: center;"
    >
      <p
        style="font-size: 1.5rem;line-height: 2rem;font-weight: 700;color: rgb(59 130 246);"
      >
        Loading...
      </p>
    </div>
  {:else}
    <div class="allHome__nav">
      <div class="allHome__nav__child">
        <div class="allHome__nav__child__header">
          Top 10 Highest priced homes sold in City {tempCity}
        </div>
        <!-- <button
        class="allHome__nav__child__button"
        on:click={changeType}
        type="submit"
      >
        Check {$topOrBottom === "top_ten" ? "Bottom Ten" : "Top Ten"}
      </button> -->

        <div class="col-span-2 relative">
          <input
            type="text"
            value={keyword}
            on:input={(e) => getItems(e)}
            name="city"
            list="cityname"
            style="width: 300px; padding: 0.5rem;border-radius: 0.375rem;"
            placeholder="Search A City"
          />
          {#key searchResults && searchGap}
            {#each searchResults as tempResult, index}
              <div
                on:click={() => autocompleteOnChange(tempResult)}
                style={`${searchGapArray[index]};z-index: 10;cursor: pointer;position: absolute; background-color: rgb(209 213 219);width: 18.7rem;height: 2.5rem;border-radius: 0.375rem;display: flex;align-items: center;padding: 0.5rem;font-size: 1.125rem;line-height: 1.75rem;justify-content:left;`}
              >
                {tempResult.city_state}
              </div>
            {/each}
          {/key}
        </div>
      </div>
    </div>
    <div
      style="padding-left: 2.5rem;padding-right: 2.5rem;display: flex;flex-direction: column;background-color: rgb(249 250 251);margin-bottom: 2.5rem;"
    >
      {#if searchedData.length === 0}
        <div class="w-full h-screen flex justify-center items-center">
          <p class="text-2xl font-bold text-blue-500">No Data</p>
        </div>
      {:else}
        <div style="display: flex;flex-direction: column;gap: 1.5rem;">
          {#each searchedData as house, index}
            <Card {index} {...house} />
          {/each}
        </div>
      {/if}
    </div>

    <div class="allHome__nav">
      <div class="allHome__nav__child">
        <div class="allHome__nav__child__header">
          Top 10 Lowest priced homes sold in City {tempCity}
        </div>
      </div>
    </div>
    <div
      style="padding-left: 2.5rem;padding-right: 2.5rem;display: flex;flex-direction: column;background-color: rgb(249 250 251);margin-bottom: 2.5rem;"
    >
      {#if searchedLowData.length === 0}
        <div class="w-full h-screen flex justify-center items-center">
          <p class="text-2xl font-bold text-blue-500">No Data</p>
        </div>
      {:else}
        <div style="display: flex;flex-direction: column;gap: 1.5rem;">
          {#each searchedLowData as house, index}
            <Card {index} {...house} />
          {/each}
        </div>
      {/if}
    </div>
  {/if}

  <div
    style="background-color: rgb(219 234 254);padding-top: 4rem;padding-bottom: 4rem;display: flex;justify-content: center;align-items: center;"
  >
    <div>
      <p
        style="font-size: 1.125rem;line-height: 1.75rem;font-weight: 700;color: rgb(29 78 216);margin-bottom: 1rem;"
      >
        Search for homes by States
      </p>
      <div
        style="display: grid;grid-template-columns: repeat(5, minmax(0, 1fr));gap: 0.5rem;"
      >
        {#each allStates as [key, state]}
          <a
            href={`/state/${key}`}
            style="font-size: 0.875rem;line-height: 1.25rem;color: rgb(29 78 216);padding-right: 5rem;cursor: pointer;"
          >
            {state}
          </a>
        {/each}
      </div>
    </div>
  </div>
{/key}
