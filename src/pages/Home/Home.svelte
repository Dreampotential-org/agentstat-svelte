<script>
  import {
    FooterDashboard,
    NavBar,
    SearchBar,
    StatesLinks,
  } from "../../components";
  import { getAgentUrlParams } from "../../lib/api";
  import { isAuthenticated} from "../../lib/api/auth";
  import { onMount } from "svelte";
  let currentPage;

  let is_authenticated = isAuthenticated();
  let open = false;

  function close() {
    open = false;
  }

  onMount(() => {
    currentPage = location.pathname;
  });

  export function updateParams(evt) {
    window.location = "/agents/?" + getAgentUrlParams(evt.detail);
  }
</script>

<NavBar flat />
<svelte:window on:click={close} />
<section class="home">
  <h1>Real Estate <span class="poa-title">Agent</span> Search Engine</h1>
  <div class="flex">
    <i class="fas fa-check" />You're in control
    <i class="fas fa-check" />Full Agent Directory
    <i class="fas fa-check" />Search Filter, Sort By Sales Results
    <i class="fas fa-check" />You Pick Which Agent Matches your needs
    <i class="fas fa-check" />No B.S or Forms
  </div>
  <div class="filter">
    <SearchBar on:load on:search={updateParams} />
  </div>
  <div class="video-box">
    <!-- <video loop autoplay muted>
      <source
        src="https://realtorstat.com/video/GETSTAT-7-11.10.2020.mp4"
        type="video/mp4"
      />
    </video> -->
  </div>
  {#if !is_authenticated}
  {#if currentPage != "/Ai"}
  <a href="/Ai">Here is our latest feature! TRY OUR AI.</a>
  {/if}
  {/if}
  {#if is_authenticated}
  {#if currentPage != "/Ai"}
  <a href="/Ai">Here is our latest feature! TRY OUR AI.</a>
  {/if}
  {/if}

</section>
<StatesLinks />
<FooterDashboard />

<style src="./home.scss"></style>
