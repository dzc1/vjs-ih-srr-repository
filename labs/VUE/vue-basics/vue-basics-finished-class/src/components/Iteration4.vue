<!-- HTML HERE -->
<template>
  <section v-for="book in books">
    <!-- // check this -->
    <div v-for="(myInfo, key, index) in book">
      {{ key }} : {{ myInfo }} : {{ index }}
    </div>
    <!-- // check this -->
    <p>{{ index }}</p>
    <p>{{ key }}</p>
    <h2>{{ book.booktTitle }}</h2>
    <p>{{ book.bookGenre }}</p>
    <p v-text="book.bookDescription"></p>
  </section>
</template>

<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const books = reactive([
  {
    booktTitle: "Fear & Loathing in Las Vegas",
    bookDescription:
      "A gonzo approach to journalism through the eyes of Hunther S Thompson, providing a glimpse of the americana decadence of the late 60's through the eyes of a counterculture journalist ",
    bookGenre: "Gonzo Journalism",
  },
  {
    booktTitle: "El Principito",
    bookDescription: "Antoinne De Choperin, some cool random book",
    bookGenre: "Kids Literature",
  },
  {
    booktTitle: "The Lord of the Rings, The Two Towers",
    bookDescription: "Just simply freaking! amazing, just read it",
    bookGenre: "O.G Book",
  },
]);
</script>
