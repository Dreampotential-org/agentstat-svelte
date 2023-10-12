<script>
  let GOOGLE_KEY = "AIzaSyCFH-yKmfPyaa18_uYUwVWb7THj-b1hymE";
  export let home_type = "";
  export let agent_full_name = "";
  export let address_text = "";
  export let status = "";
  export let list_price_int = "";
  export let sold_price_int = "";
  export let days_on_market = "";
  export let agent_brokerage_info = "";
  export let agent_id = "";
  export let agent_brokerage_text = "";
  export let year_built = "";
  export let beds = "";
  export let baths = "";
  export let s2l_ratio = "";
  export let city = "";
  export let geo_location = [];
  const getImage = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${geo_location[1]},${geo_location[0]}&fov=80&heading=70&pitch=0&key=${GOOGLE_KEY}`;
</script>

<div
  class="drop-shadow-2xl rounded-lg shadow bg-gray-800 border-gray-700 grid grid-cols-4 gap-1 place-items-start"
>
  {#key getImage}
    <img class="rounded-l-lg h-80" src={getImage} alt="" />
  {/key}
  <div class="p-5 w-max h-full flex flex-col justify-start items-start">
    <h5
      class="mb-2 text-lh font-bold tracking-tight text-gray-900 dark:text-white"
    >
      House Type - {home_type}
    </h5>
    <div class="flex flex-col w-full">
      <p class="w-full text-sm mb-3 font-medium text-white">
        Address - {address_text}
      </p>
      <p class="w-full text-sm mb-3 font-medium text-white">
        City - {city}
      </p>
      <p class="w-full text-sm mb-3 font-medium text-white">
        List Price - ${list_price_int}.
      </p>
      <p class="w-full text-sm mb-3 font-medium text-white">
        Sold Price - ${sold_price_int}.
      </p>
      <p class="w-full text-sm mb-3 font-medium text-white">
        Sold in {days_on_market} Days.
      </p>
    </div>
    <p
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Status - {status}
    </p>
  </div>

  <div class="p-5 w-max h-full flex flex-col justify-start items-start">
    <h5
      class="mb-2 text-lh font-bold tracking-tight text-gray-900 dark:text-white"
    >
      House Info - {home_type}
    </h5>
    <div class="flex flex-col w-full">
      <p class="w-full text-sm mb-3 font-medium text-white">
        Built in - {year_built}
      </p>
      <p class="w-full text-sm mb-3 font-medium text-white">
        Beds - {beds}
      </p>
      <p class="w-full text-sm mb-3 font-medium text-white">
        Baths - ${baths}.
      </p>
      <p class="w-full text-sm mb-3 font-medium text-white">
        S2l Ratio - ${s2l_ratio}.
      </p>
    </div>
    <p
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Status - {status}
    </p>
  </div>

  <div class="p-5 w-max h-full flex flex-col justify-start items-start">
    <h5
      class="mb-2 text-lh font-bold tracking-tight text-gray-900 dark:text-white"
    >
      Agent Name - {agent_full_name}
    </h5>
    <div class="flex flex-col w-full">
      <p class="w-full text-sm mb-3 font-medium text-white">
        Agent Brokerage Info - {agent_brokerage_info}
      </p>

      <p class="w-full text-sm mb-3 font-medium text-white">
        ID - ${agent_id}.
      </p>
      <p class="w-full text-sm mb-3 font-medium text-white">
        Agent Brokerage Text - ${agent_brokerage_text}.
      </p>
    </div>
    <p
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Status - {status}
    </p>
  </div>
</div>
