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
  style="border-radius: 0.5rem;background-color: rgb(31 41 55);border-color: rgb(55 65 81);display: grid;grid-template-columns: repeat(4, minmax(0, 1fr));gap: 0.25rem;place-items: start;"
>
  {#key getImage}
    <img
      style="border-top-left-radius: 0.5rem;border-bottom-left-radius: 0.5rem;height: 20rem;"
      src={getImage}
      alt=""
    />
  {/key}
  <div
    style=" padding: 1.25rem;width: max-content;height: 100%;display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-start;"
  >
    <h5
      style="margin-bottom: 0.5rem;font-size: 1.125rem;line-height: 1.75rem;font-weight: 700;letter-spacing: -0.025em;color: rgb(17 24 39);color: rgb(255 255 255);"
    >
      House Type - {home_type}
    </h5>
    <div style="display: flex;flex-direction: column;width: 100%;">
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        Address - {address_text}
      </p>
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        City - {city}
      </p>
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        List Price - ${list_price_int}.
      </p>
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        Sold Price - ${sold_price_int}.
      </p>
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        Sold in {days_on_market} Days.
      </p>
    </div>
    <p
      style="cursor:pointer;display: inline-flex;align-items: center;padding-left: 0.75rem;padding-right: 0.75rem;border-radius: 0.5rem;padding-top: 0.5rem;padding-bottom: 0.5rem;font-size: 0.875rem;line-height: 1.25rem;font-weight: 500;text-align: center;color:white;background-color: rgb(29 78 216);"
    >
      Status - {status}
    </p>
  </div>

  <div
    style=" padding: 1.25rem;width: max-content;height: 100%;display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-start;"
  >
    <h5
      style="margin-bottom: 0.5rem;font-size: 1.125rem;line-height: 1.75rem;font-weight: 700;letter-spacing: -0.025em;color: rgb(17 24 39);color: rgb(255 255 255);"
    >
      House Info
    </h5>
    <div style="display: flex;flex-direction: column;width: 100%;">
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        Built in - {year_built}
      </p>
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        Beds - {beds}
      </p>
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        Baths - ${baths}.
      </p>
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        S2l Ratio - ${s2l_ratio}.
      </p>
    </div>
    <p
      style="cursor:pointer;display: inline-flex;align-items: center;padding-left: 0.75rem;padding-right: 0.75rem;border-radius: 0.5rem;padding-top: 0.5rem;padding-bottom: 0.5rem;font-size: 0.875rem;line-height: 1.25rem;font-weight: 500;text-align: center;color:white;background-color: rgb(29 78 216);"
    >
      Status - {status}
    </p>
  </div>

  <div
    style=" padding: 1.25rem;width: max-content;height: 100%;display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-start;"
  >
    <h5
      style="margin-bottom: 0.5rem;font-size: 1.125rem;line-height: 1.75rem;font-weight: 700;letter-spacing: -0.025em;color: rgb(17 24 39);color: rgb(255 255 255);"
    >
      Agent Name - {agent_full_name}
    </h5>
    <div style="display: flex;flex-direction: column;width: 100%;">
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        Agent Brokerage Info - {agent_brokerage_info}
      </p>

      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        ID - ${agent_id}.
      </p>
      <p
        style="width: 100%;font-size: 0.875rem;line-height: 1.25rem;margin-bottom: 0.75rem;font-weight: 500;color:white;"
      >
        Agent Brokerage Text - ${agent_brokerage_text}.
      </p>
    </div>
    <p
      style="cursor:pointer;display: inline-flex;align-items: center;padding-left: 0.75rem;padding-right: 0.75rem;border-radius: 0.5rem;padding-top: 0.5rem;padding-bottom: 0.5rem;font-size: 0.875rem;line-height: 1.25rem;font-weight: 500;text-align: center;color:white;background-color: rgb(29 78 216);"
    >
      Status - {status}
    </p>
  </div>
</div>
