<template>
  <div class="container my-4">
    <h1 class="text-center">Countries List</h1>
    <div class="row" v-if="countries">
      <div class="col-sm-4">
        <ul class="list-group">
          <RouterLink
            v-for="(country, index) in countries"
            :key="index"
            v-bind:to="`/country/${country.alpha3Code}`"
          >
            <li
              class="list-group-item d-flex flex-column justify-content-center align-items-center"
            >
              <img
                v-bind:src="`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`"
                alt=""
                class="country-flag mb-2"
              />
              <p class="text-center fw-bold">
                {{ country.name.common }}
              </p>
            </li>
          </RouterLink>
        </ul>
      </div>
      <div class="col-sm-8"><RouterView /></div>
    </div>
    <div v-else class="col-12"><Spinner text="Loading Countries..." /></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CountryDetails from "./CountryDetails.vue";
import Spinner from "./Spinner.vue";
// data property to dynamically check if we have any data from the api and provide visbility onto the UI :)
const countries = ref(null);

// Function to call API
const fetchCountries = async () => {
  // variable to call api
  const response = await fetch(
    "https://ih-countries-api.herokuapp.com/countries"
  );
  // variable to store info from api and cleanUp it's JSON format with json() method.
  const finalResponse = await response.json();
  //   console.log(finalResponse);

  // variable to sort country by "COMMON NAME" from the API instance
  const sortedCountries = finalResponse.sort((a, b) => {
    return a.name.common.localeCompare(b.name.common);
  });

  // We store the value of the sortedCountries inside of the countries variable that is declared on line 27 as a ref() property.
  countries.value = sortedCountries;
};
//using a simple Call!
//fetchCountries();
onMounted(() => {
  fetchCountries;
  console.log(fetchCountries());
  console.log("Hello");
});

// using onMounted()
</script>

<style scoped>
.country-flag {
  width: 120px;
}
</style>
