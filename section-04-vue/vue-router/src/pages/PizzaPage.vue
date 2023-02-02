<template>
  <div class="container">
    <div class="card">
      <div class="title">
        <div class="title-headings">
          <h3>{{ foodType.name }}</h3>
          <button @click="viewToggleFunction">click me</button>
        </div>
        <p>
          {{ foodType.info }}
        </p>
        <template v-if="foodType.viewToggle"
          ><img :src="foodType.img" :alt="foodType.alt"
        /></template>

        <!-- v-show === display:none - si lo usan la variable booleanica tiene que ser true pro defecto -->
        <!-- <img :src="sublimeLogo" alt="" v-show="viewToggleShow" /> -->
      </div>

      <div class="circle"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const foodType = reactive({
  name: "Pizza",
  info: "I love all type of pizza!",
  img: "https://www.pngplay.com/wp-content/uploads/2/Cheese-Pizza-PNG-Background.png",
  alt: "Pepperoni Pizza Image - png",
  viewToggle: false,
});
const booleanArray = reactive([true, "diego", 10]);
const viewToggleFunction = () => {
  // como apuntar al valor de un dato dentro de un objeto
  foodType.viewToggle = !foodType.viewToggle;
  console.log(foodType.viewToggle);
  // como apuntar al valor de un dato dentro de un array
  booleanArray[0] = !booleanArray[0];
  booleanArray[1] = !booleanArray[1];
  booleanArray[2] = !booleanArray[2];
  console.log(booleanArray[0]);
  console.log(booleanArray[1]);
  console.log(booleanArray[2]);
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
