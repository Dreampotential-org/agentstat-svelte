import { get } from "svelte/store";
import {topOrBottom,state,city} from "../../stores/homes";

let baseUrl = "https://app.realtorstat.com/api/";

export async function loadStates() {
    let allStates = {};
    let result = await fetch(`${baseUrl}states`,{
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    allStates = await result.json();
    
	return { allStates };
}

export async function loadHomes() {
    let allResults = await fetch(
        `${baseUrl}${get(topOrBottom)}/state/${get(state)}/city/${get(city)}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );
  
      let getData = await allResults.json();

      return getData;
}

export async function loadCities(stateName) {
    
    let allCities;
    let result = await fetch(`${baseUrl}cities/${stateName}/`,{
        method:'GET',
        headers:{'Content-Type':'application/json',}});
    allCities = await result.json();

    return {
        allCities
    }
}