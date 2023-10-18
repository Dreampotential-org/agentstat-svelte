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
  export let zipcode = "";
  export let agent_brokerage_text = "";
  export let year_built = "";
  export let beds = "";
  export let baths = "";
  export let s2l_ratio = "";
  export let city = "";
  export let geo_location = [];
  export let index;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  const getImage = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${geo_location[1]},${geo_location[0]}&fov=80&heading=70&pitch=0&key=${GOOGLE_KEY}`;
</script>

<div class="m-5">
  <div
    class="mx-auto grid max-w-screen-xl grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg"
  >
    <span
      class="order-2 col-span-3 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4 no-underline"
    >
      <div class="group relative h-52 w-60 overflow-hidden flex gap-4">
        <p class="font-semibold text-gray-600">#{index + 1}</p>
        <img
          src={getImage}
          alt=""
          class="h-full w-full object-cover text-gray-700 rounded-lg"
        />
      </div>
    </span>
    <div class="col-span-9 flex flex-col gap-2 pr-8 text-left sm:pl-4">
      <div class="flex gap-4">
        <div class="text-lg font-medium text-gray-500">
          Price(List/Sold) :<span
            class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900"
            >${numberWithCommas(list_price_int)}/ ${numberWithCommas(
              sold_price_int
            )}</span
          >
        </div>
      </div>
      <p p class="mb-3 overflow-hidden pr-7 text-md font-semibold sm:text-md">
        {address_text}
        {zipcode}
      </p>
      <p
        class="overflow-hidden pr-7 text-sm flex flex-row gap-5 font-semibold text-gray-700"
      >
        <li class="bg-gray-300 rounded-xl px-4 py-1">Built in {year_built}</li>
        <li class="bg-gray-300 rounded-xl px-4 py-1">Beds {beds}</li>
        <li class="bg-gray-300 rounded-xl px-4 py-1">Baths {baths}</li>
        <li class="bg-gray-300 rounded-xl px-4 py-1">
          {home_type.replace("_", " ")}
        </li>
      </p>

      <div
        class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2"
      >
        <div class="">
          Sold with: <span class="font-semibold text-black"
            >{agent_full_name}</span
          >
        </div>
        <div class="">
          Brokerage: <span class="font-semibold text-black"
            >{agent_brokerage_info}</span
          >
        </div>
      </div>

      <div
        class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2"
      >
        <div class="">
          Status :<span
            class={`ml-2 mr-3 rounded-full  px-2 py-0.5 ${
              status === "Sold"
                ? "text-red-900 bg-red-100"
                : "text-green-900 bg-green-100"
            }`}
          >
            {status}.
          </span>
        </div>

        <div class="">
          Sold in :<span
            class="ml-2 mr-3 rounded-full bg-yellow-100 px-2 py-0.5 text-green-900"
          >
            {days_on_market} Days.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
