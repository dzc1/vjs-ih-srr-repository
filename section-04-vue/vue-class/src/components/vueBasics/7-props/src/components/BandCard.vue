<!-- HTML HERE -->
<template>
  <section>
    <BandImage
      :bandImage="bandImageBandCard"
      :text="bandImageAltTextBandCard"
    />
    <BandName :band-name="bandNamePropBandCard" />
    <Song :popular-song="bandPopularSongBandCard" />
    <SongInfo :song-info="bandSongInfobandCard" />
  </section>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
import BandName from "../components/BandName.vue";
import BandImage from "../components/BandImage.vue";
import Song from "../components/Song.vue";
import SongInfo from "../components/SongInfo.vue";

//prop bueno - esto es un prop definido con un objeto para pasarle algunas reglas ['type', 'required', ]
defineProps({
  bandNamePropBandCard: String,
  bandPopularSongBandCard: String,
  bandSongInfobandCard: String,
  bandImageBandCard: String,
  bandImageAltTextBandCard: String,
});

// const bindedBandImg = reactive({
//   source:
//     "https://cdn.freebiesupply.com/logos/large/2x/wu-tang-clan-logo-png-transparent.png",
//   alt: "Some Random TEXT",
// });
// const bindedBandName = ref("The Rolling Stones");
// const bindedSong = ref("Under My Thumb");
// const bindedBandNameValidator = ref(
//   "Some other random text that will trigger a warning on the console due to the rule being applied on the prop with the validator function :) -  check console"
// );
// const bindedSongInfo = ref(`Escrita por Mick Jagger y Keith Richards...​`);
</script>
