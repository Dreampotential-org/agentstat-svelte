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
  style="background-color: rgb(219 234 254);padding-top: 4rem;padding-bottom: 4rem;display: flex;justify-content: center;align-items: center;min-height: 100vh;min-height: 100vh;"
>
  <div>
    <div
      style="display: flex;justify-content: space-between;align-items: center;"
    >
      <p
        style="font-size: 1.125rem;line-height: 1.75rem;font-weight: 700;color: rgb(29 78 216);margin-bottom: 1rem;"
      >
        Search for homes by Cities
      </p>
      <a
        style="font-size: 1.125rem;line-height: 1.75rem;font-weight: 700;color: rgb(29 78 216);margin-bottom: 1rem;cursor: pointer;"
        href={`/allhomes`}
      >
        Go To Home
      </a>
    </div>
    <div
      style="display: grid;grid-template-columns: repeat(5, minmax(0, 1fr));gap: 0.5rem;"
    >
      {#each allCities as city}
        <p
          on:click={() => gotoResult(city)}
          style="font-size: 0.875rem;line-height: 1.25rem;color: rgb(29 78 216);padding-right: 5rem;cursor: pointer;"
        >
          {city}
        </p>
      {/each}
    </div>
  </div>
</div>
