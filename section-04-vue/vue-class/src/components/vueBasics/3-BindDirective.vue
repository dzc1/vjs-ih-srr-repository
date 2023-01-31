<!-- Si queremos bindear atributos dentro de nuestro codigo/scriptTag no podemos usar el syntax de los bigotes!, El euqipo de vue a creado tags especificos para poder bindear/vincularnos a estos tipos de atributos.  -->

<!-- HTML HERE -->
<template>
  <h1>
    Usando el directo "v-bind" para unificar ciertas elementos con nuestro js :)
  </h1>

  <div id="binding-attributes">
    <!-- Binding ID's -->
    <div id="binding-ids">
      <!-- Without binding an ID :)  -->
      <h2 id="someRandomId">random text</h2>
      <!-- let's bind an ID :) - LONG SYNTAX VERSION  -->
      <h2 v-bind:id="headingId">
        Heading - con un ID bindeado dinamicamente desde el script tag - LONG
        VERSION
      </h2>
      <!-- let's bind an ID :) - SHORT SYNTAX VERSION  -->
      <h2 :id="headingId">
        Heading - con un ID bindeado dinamicamente desde el script tag - SHORT
        VERSION
      </h2>
    </div>
    <hr />
    <!-- Binding Reserved keywords -->
    <div id="binding-reserved-attribute-keywords">
      <!-- Case 1 - Bindeamos unn valor via una variable que es reactive y le pasamos un valor booleanico por defecto! -->
      <!-- Sin vinculo con el directivo v-bind -->
      <!-- <button disabled>PACO</button> -->

      <!-- Con vinculo con el directivo v-bind - long syntax -->
      <!-- <button v-bind:disabled="isDisabled" v-text="buttonText"></button> -->

      <!-- Con vinculo con el directivo v-bind - short syntax -->
      <button :disabled="isDisabled" v-text="buttonText"></button>

      <!-- Cae 2 - El mismo binding de aca arriba pero tomamos en cuenta el casoOpuesto.  -->
      <button :disabled="!isDisabled" v-text="buttonText"></button>
    </div>
    <!-- Binding Classes -->
    <div id="binding-classes">
      <!-- Binding one simple class -->
      <!-- Long syntax -->
      <p v-bind:class="status">Underline Text - bindning a class attribute</p>
      <!-- Binding classes to elements that alreay have a class -->
      <p class="underline" v-bind:class="twoClassBinding">
        Underline Text - binding a class attribute to an element that has
        already a class
      </p>
      <hr />
      <!-- Binding conditional Classes through conditionals -->
      <p>
        Usando una condicional para bindear una clase a traves de un operador
        logico! - chicos, aca usaremos la potencia del v-bind + js de la vieja
        escuela para generar este approach
      </p>
      <p :class="isPromoted && 'promotedMovie'">Promoted Movies</p>
      <hr />
      <!-- USING TERNARYS -->
      <p>Usando un ternario para condicionar dos clases ECMA6.</p>
      <p :class="soldOut ? 'sold-out' : 'available'">
        Secret Window - Pablo's Fav Movie
      </p>
      <hr />
      <!-- Binding conditional class through combining logical expressions (&&) and we are going to use an array to hold all of this info! -->
      <p :class="[isPromoted && 'promotedMovie', soldOut && 'available']">
        The Wolf of Wallstreet - Array de clases condicionales
      </p>
      <hr />
    </div>
    <!-- Binding Styles -->
    <div id="binding-style">
      <h1>Binding Inline Styles</h1>
      <!-- Binding css props through attribute style inside the element tag -->
      <p
        :style="{
          textDecoration: 'underline',
          color: textColor,
          fontSize: textSize + 'em',
        }"
      >
        binding css props inside the style attribute through v-bind directive
      </p>
      <!-- Estilos en linea a traves de un approach de 'objetos' -->

      <p :style="objectOfStyles">
        Bindeando elementos dentro de un objeto en el script tag dentro del
        atributo "style"
      </p>
    </div>
  </div>
</template>

<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

// ID BINDING
const headingId = ref("my-super-cool-dynamic-id");

// RESERVED KEYWORD BINDING
const isDisabled = ref(true);
const buttonText = ref("Click Me");

// BINDING CLASSES
const status = ref("danger");
const twoClassBinding = ref("binding-two-classes");

//CLASS BINDING THROUGH BOOLEAN VALUE USING LOGICAL OPERATOR && ON THE HTML
const isPromoted = ref(true);

// CLASS BINDING THROUGH BOOLEAN VALUE USING A TERNARY OPERATOR
const soldOut = ref(false);

// INLINE STYLING THROUGH THE STYLE PROPERTY
const textColor = ref("#ffa03b");
const textSize = ref(6);

// INLINE STYLINE THROUGH THE STYLE PROPERTY BUT, LETS USE AN OBJECT INSIDE THE SCRIPT
const objectOfStyles = reactive({
  color: "purple",
  fontSize: "17px",
  textDecoration: "underline",
});
</script>

<!-- CS HERE -->
<style scoped>
/* General Styling */
button {
  padding: 2rem;
  font-size: 2em;
}
h1,
h2,
p {
  font-size: 2em;
}

#binding-ids,
#binding-reserved-keywords,
#binding-classes {
  padding: 2rem 0;
}

/* Binding Id's */
#my-super-cool-dynamic-id {
  color: rgb(35, 110, 35);
}

/* Binding Classes */
.danger {
  text-decoration: underline;
  color: red;
}
.underline {
  text-decoration: underline;
}
.binding-two-classes {
  color: yellow;
}

.promotedMovie {
  color: blue;
  font-style: italic;
}

.sold-out {
  color: red;
  text-decoration: line-through;
}

.available {
  color: green;
  text-decoration: overline;
}
</style>
