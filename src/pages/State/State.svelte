<script>
  import page from "page";
  import { onMount } from "svelte";
  import { city, state } from "../../stores/homes";
  import { loadCities } from "../../lib/api/allhomes";

  export let stateName;

  let allCities = [];

  onMount(async () => {
    let resultCities = await loadCities(stateName);
    allCities = [...Object.values(resultCities.allCities)];
  });

  const gotoResult = (tempCity) => {
    $city = tempCity;
    $state = stateName;
    console.log("city", $city, $state);
    page.redirect("/allhomes");
  };
</script>

<div
  class="bg-blue-100 py-16 flex justify-center items-center min-h-screen h-full"
>
  <div>
    <div class="flex justify-between items-center">
      <p class="text-lg font-bold text-blue-700 mb-4">
        Search for homes by Cities
      </p>
      <a
        href={`/allhomes`}
        class="text-lg font-bold text-blue-700 mb-4 cursor-pointer"
      >
        Go To Home
      </a>
    </div>
    <div class="grid grid-cols-5 gap-2">
      {#each allCities as city}
        <p
          on:click={() => gotoResult(city)}
          class="text-sm text-blue-700 pr-20 cursor-pointer"
        >
          {city}
        </p>
      {/each}
    </div>
  </div>
</div>
