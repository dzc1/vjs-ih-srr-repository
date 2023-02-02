<template>
  <div class="container">
    <div class="card">
      <div class="title">
        <div class="title-headings">
          <h3>Sublime</h3>
          <button @click="viewToggleFunction">click me</button>
        </div>
        <p>
          Eric Wilson and Bud Gaugh were childhood friends. Having grown up in
          the same Long Beach neighborhood, Eric's father, Billy Wilson taught
          Gaugh how to read music and play the drums. Gaugh and Wilson, together
          with future Sublime manager Michael Happoldt, formed a three-piece
          punk band called The Juice Bros during their high school years. About
          this time, Bradley Nowell, who had recently dropped out of University
          of California, Santa Cruz, joined the band. Nowell helped introduce
          Gaugh and Wilson (who at the time listened exclusively to punk rock)
          to reggae and ska
        </p>
        <template v-if="viewToggle"><img :src="sublimeLogo" alt="" /></template>

        <!-- v-show === display:none - si lo usan la variable booleanica tiene que ser true pro defecto -->
        <!-- <img :src="sublimeLogo" alt="" v-show="viewToggleShow" /> -->
      </div>

      <div class="circle"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const sublimeLogo = ref(
  "https://logos-world.net/wp-content/uploads/2022/11/Sublime-Emblem.png"
);

// function to change value - bool
const viewToggle = ref(false);
const viewToggleShow = ref(true);
const viewToggleFunction = () => {
  viewToggle.value = !viewToggle.value;
  // viewToggleShow.value = !viewToggleShow.value;
};
</script>

<style scoped>
body {
  font-family: "Roboto", sans-serif;
  background: #f0f5f9;
}
.card {
  position: relative;
  margin: 150px auto;
  width: 450px;
  padding: 20px;
  box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border: 0;
}
.card img {
  width: 50%;
}

.card .title-headings {
  display: flex;
  justify-content: space-between;
}
.title-headings button {
  margin-right: 15rem;
}
.card .circle {
  border-radius: 3px;
  width: 150px;
  height: 150px;
  background: rgb(150, 116, 116);
  position: absolute;
  right: 0px;
  top: 0;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  border-bottom-left-radius: 170px;
}
.card .content {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
}
.card h1 {
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 0;
}
.card h2 {
  font-size: 18px;
  letter-spacing: 0.5px;
  font-weight: 300;
}

.card p {
  font-size: 0.8em;
  padding: 0 8rem 0 0;
}

.card .location {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
