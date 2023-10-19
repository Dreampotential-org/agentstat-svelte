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
  export let state = "";
  export let year_built = "";
  export let beds = "";
  export let baths = "";
  export let agent_s3_image = "";
  export let city = "";
  export let geo_location = [];
  export let index;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  const getImage = `https://maps.googleapis.com/maps/api/streetview?size=400x400&location=${geo_location[1]},${geo_location[0]}&fov=80&heading=70&pitch=0&key=${GOOGLE_KEY}`;
</script>

<div style="margin: 1.25rem" class="m-5">
  <div
    style="margin-left: auto; border-radius: 0.5rem;border-width: 1px;padding-top: 2rem/* 32px */;padding-bottom: 2rem/* 32px */;
  margin-right: auto;display: grid; max-width: 1280px;grid-template-columns: repeat(12, minmax(0, 1fr));--tw-space-x-reverse: 0;
  margin-right: calc(2rem/* 32px */ * var(--tw-space-x-reverse));--tw-text-opacity: 1;color: rgb(55 65 81 / var(--tw-text-opacity));--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms;box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow); margin-left: calc(2rem/* 32px */ * calc(1 - var(--tw-space-x-reverse)));overflow: hidden;"
  >
    <span
      style="grid-column: 1/4;margin-top: 1rem/* 16px */;text-align: left;--tw-text-opacity: 1;
    color: rgb(75 85 99 / var(--tw-text-opacity));"
    >
      <div
        style="position: relative;height: 13rem/* 208px */;width: 18rem/* 240px */;overflow: hidden;display: flex;gap: 1rem/* 16px */;justify-content:space-evenly;"
      >
        <p
          style="font-weight: 800;--tw-text-opacity: 1;
        color: rgb(75 85 99 / var(--tw-text-opacity));font-size:20px;"
        >
          #{index + 1}
        </p>
        <img
          src={getImage}
          alt=""
          style="height: 100%;object-fit: cover;border-radius: 0.5rem/* 8px */;--tw-text-opacity: 1;
          color: rgb(55 65 81 / var(--tw-text-opacity));"
        />
      </div>
    </span>
    <div
      style="grid-column: 5/12;display: flex;flex-direction: column;gap: 0.5rem/* 8px */;padding-right: 2rem/* 32px */;text-align: left;"
    >
      <div style="display: flex;gap: 1rem/* 16px */;">
        <div
          style="font-weight: 500;--tw-text-opacity: 1;
        color: rgb(107 114 128 / var(--tw-text-opacity));font-size: 1.125rem/* 18px */;line-height: 1.75rem/* 28px */;"
        >
          Price(List/Sold) :<span
            style="margin-left: 0.5rem/* 8px */;margin-right: 0.75rem/* 12px */;border-radius: 9999px;--tw-bg-opacity: 1;
            background-color: rgb(219 234 254 / var(--tw-bg-opacity));padding-left: 0.5rem/* 8px */;padding-top: 0.125rem/* 2px */;
            padding-bottom: 0.125rem/* 2px */;--tw-text-opacity: 1;
            color: rgb(30 58 138 / var(--tw-text-opacity));
            padding-right: 0.5rem/* 8px */;"
            >${numberWithCommas(list_price_int)}/ ${numberWithCommas(
              sold_price_int
            )}</span
          >
        </div>
      </div>
      <p
        style="margin-bottom: 0.75rem/* 12px */;overflow: hidden;padding-right: 1.75rem/* 28px */;font-weight: 600; font-size: 1rem; /* 16px */
      line-height: 1.5rem; /* 24px */"
      >
        {address_text}
        {state}
        {zipcode}
      </p>
      <p
        style="overflow: hidden;padding-right: 1.75rem/* 28px */;font-size: 0.875rem/* 14px */;
      line-height: 1.25rem/* 20px */;display: flex;flex-direction: row;gap: 1.25rem/* 20px */;font-weight: 600; --tw-text-opacity: 1;
      color: rgb(55 65 81 / var(--tw-text-opacity));"
      >
        <li
          style="padding-top: 0.25rem;
        padding-bottom: 0.25rem; 
        padding-left: 1rem;
        padding-right: 1rem; 
        border-radius: 0.75rem; 
        background-color: #D1D5DB; "
        >
          Built in {year_built}
        </li>
        <li
          style="padding-top: 0.25rem;
        padding-bottom: 0.25rem; 
        padding-left: 1rem;
        padding-right: 1rem; 
        border-radius: 0.75rem; 
        background-color: #D1D5DB; "
        >
          Beds {beds}
        </li>
        <li
          style="padding-top: 0.25rem;
        padding-bottom: 0.25rem; 
        padding-left: 1rem;
        padding-right: 1rem; 
        border-radius: 0.75rem; 
        background-color: #D1D5DB; "
        >
          Baths {baths}
        </li>
        <li
          style="padding-top: 0.25rem;
        padding-bottom: 0.25rem; 
        padding-left: 1rem;
        padding-right: 1rem; 
        border-radius: 0.75rem; 
        background-color: #D1D5DB; "
        >
          {home_type.replace("_", " ")}
        </li>
      </p>

      <div
        style="display: flex; 
            margin-top: 1.25rem; 
            margin-top: 0.75rem; 
            margin-top: 0.875rem; 
            font-size: 0.875rem;
            line-height: 1.25rem; 
            font-weight: 500; 
            color: #6B7280;
            gap: 1rem; 
            align-items: center;"
      >
        <div class="">
          Sold with: <span
            style="font-weight: 600; 
          color: #000000; ">{agent_full_name}</span
          >
        </div>
        <div class="">
          Brokerage: <span
            style="font-weight: 600; 
          color: #000000; ">{agent_brokerage_info}</span
          >
        </div>
        <div>
          {#if agent_s3_image}
            <img
              src={agent_s3_image}
              style="display: flex; 
              justify-content: center; 
              align-items: center; 
              border-radius: 9999px; 
              width: 3rem; 
              height: 3rem; 
              "
            />
          {:else}
            <div
              style="display: flex; 
              justify-content: center; 
              align-items: center; 
              border-radius: 9999px; 
              width: 3rem; 
              height: 3rem; 
              color: #ffffff; 
              background-color: #6B7280; 
              font-size: 8px;
              "
            >
              No Image
            </div>
          {/if}
        </div>
      </div>

      <div
        style="display: flex; 
        margin-top: 1.25rem; 
        margin-top: 0.75rem; 
        margin-top: 0.875rem; 
        font-size: 0.875rem;
        line-height: 1.25rem; 
        font-weight: 500; 
        color: #6B7280; "
      >
        <div class="">
          Status :<span
            style={`padding-top: 0.125rem;
          padding-bottom: 0.125rem; 
          padding-left: 0.5rem;
          padding-right: 0.5rem; 
          margin-left: 0.5rem; 
          margin-right: 0.75rem; 
          border-radius: 9999px; 
          ${
            status === "Sold"
              ? "color: #7F1D1D; background-color: #FEE2E2; "
              : "color: #064E3B; background-color: #D1FAE5; "
          }
          `}
          >
            {status}.
          </span>
        </div>

        <div class="">
          Sold in :<span
            style="padding-top: 0.125rem;
            padding-bottom: 0.125rem; 
            padding-left: 0.5rem;
            padding-right: 0.5rem; 
            margin-left: 0.5rem; 
            margin-right: 0.75rem; 
            border-radius: 9999px; 
            color: #064E3B; 
            background-color: #FEF3C7; "
          >
            {days_on_market} Days.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>
