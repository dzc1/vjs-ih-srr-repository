<!-- HTML HERE -->
<template>
  <div class="form-class-container">
    <div id="info-about-what-we-will-be-doing">
      <h1>Form Class</h1>
      <p>
        Para poder conectar nuestros inputs[formControls] con nuestra
        data[formData], usamos la directiva v-model para poder implementar el
        concepto de <strong>two-way data handling</strong>
      </p>
    </div>
    <!-- Sin el uso de la riectiva v-model es decir, good old JS, aka OG JS -->
    <!-- <div>
      <label for="message">Message:</label>
      <input
        type="text"
        id="message"
        :value="message"
        @input="(event) => (message = event.target.value)"
      />
      <p>Message is {{ message }}</p>
    </div> -->

    <!-- Este div nos dara el resultado en pantalla de nuestros datos -->
    <div>
      <pre>{{ JSON.stringify(formValues, null, 1) }}</pre>
    </div>

    <!-- Formulario De Trabajo -->
    <div id="my-form">
      <form @submit.prevent="submitFormInfo">
        <div id="applicant-name">
          <label for="name">Enter Name:</label>
          <input
            type="text"
            id="name"
            autocomplete="off"
            v-model="formValues.formName"
          />
        </div>
        <div id="applicant-age">
          <label for="applicantAge">Please enter your age:</label>
          <input
            type="number"
            id="applicantAge"
            v-model="formValues.candidateAge"
          />
        </div>
        <div id="applicant-summary">
          <label for="applicantSummary"
            >Please give us a brief work summary:</label
          >
          <textarea
            id="applicantSummary"
            cols="30"
            rows="10"
            v-model="formValues.applicantSummary"
          ></textarea>
        </div>
        <div id="applicant-country-origin">
          <label for="applicantCountry">Enter a country of origin:</label>
          <select id="applicantCountry" v-model="formValues.country">
            <option>Select a country of origin:</option>
            <option value="spain">Spain</option>
            <option value="italy">Italy</option>
            <option value="france">France</option>
            <option value="germany">Germany</option>
          </select>
        </div>
        <div id="applicant-recolation">
          <label
            >This job maybe requires that you relocate, are you willing to move
            to any of these locations where we have offices?</label
          >
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="alaska"
              value="alaska"
              v-model="formValues.jobLocation"
            />
            <label for="alaska">Alaska</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="south_pole"
              value="south_pole"
              v-model="formValues.jobLocation"
            />
            <label for="south_pole">South Pole</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="reykjavik"
              value="reykjavik"
              v-model="formValues.jobLocation"
            />
            <label for="reykjavik">Reykjavik</label>
          </div>
        </div>
        <div id="applicant-remote">
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="applicantRemote"
              v-model="formValues.remoteWork"
            />
            <label for="applicantRemote"
              >Are you willing to work fully remote?</label
            >
          </div>
        </div>
        <div id="applicant-skillset">
          <label
            >What is your current skillset (please fill more than one)</label
          >
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="html"
              value="html"
              v-model="formValues.skillSet"
            />
            <label for="html">HTML</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="css"
              value="css"
              v-model="formValues.skillSet"
            />
            <label for="css">CSS</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="js"
              value="js"
              v-model="formValues.skillSet"
            />
            <label for="js">Javascript</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              type="checkbox"
              id="vue"
              value="vue"
              v-model="formValues.skillSet"
            />
            <label for="vue">Vue</label>
          </div>
        </div>
        <div id="applicant-experience">
          <label>Years of Experience</label>
          <div class="multiple-checkboxes">
            <input
              v-model="formValues.experience"
              type="radio"
              id="0-3"
              value="0_3"
            />
            <label for="0-3">0-3 Years of Experience</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              v-model="formValues.experience"
              type="radio"
              id="3-5"
              value="3_5"
            />
            <label for="3-5">3-5 Years of Experience - Jedi Apprentice</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              v-model="formValues.experience"
              type="radio"
              id="5-8"
              value="5_8"
            />
            <label for="5-8">5-8 Years of Experience - Jedi Master</label>
          </div>
          <div class="multiple-checkboxes">
            <input
              v-model="formValues.experience"
              type="radio"
              id="8-15"
              value="8_15"
            />
            <label for="8-15">8-15 Years of Experience - Dark Sith</label>
          </div>
        </div>
        <div id="submit-form-button">
          <input type="submit" value="Submit Form Data" />
        </div>
      </form>
    </div>
  </div>
</template>

<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const message = ref("");

// Crear una variable que sea un objeto que contenga todos los "keys" queremos, debido a que es un objeto que tipo de metodo usaremos chicos ?
// debido a que es un objeto vamos con un reactive()
const formValues = reactive({
  formName: "",
  candidateAge: "",
  applicantSummary: "",
  country: "Select a country of origin:",
  jobLocation: [],
  remoteWork: false,
  skillSet: [],
  experience: "",
});

// Funcion que envia los datos del usuario y los plasma en el nevegador dentro de una alerta nativa
const submitFormInfo = () => {
  // log de verificacion que recibamos info
  console.log(`
        Form Values are ${formValues.formName}
    `);
  // usar metodo nativo de js alert() para darle visibilidad al usuario
  alert(`
        !!EXITO!!
        Hemos recibido tu solicitud correctamente. Nos pondremos en contacto contigo en los proximos 5-8 dias habiles. 

        Gracias por haber aplicado a la NASA V-Europe

        Te confirmamos los datos imputados: 

        - Nombre: ${formValues.formName}
        - Edad: ${formValues.candidateAge}
        - Resumen Laboral: ${formValues.applicantSummary}
        - Pais de provinencia: ${formValues.country}
        - Relocalizacion: ${formValues.jobLocation}
        - Trabajo Remoto: ${formValues.remoteWork}
        - Habilidades: ${formValues.skillSet}
        - Experiencia: ${formValues.experience}
    `);
};
</script>

<!-- CSS HERE -->
<style scoped>
pre {
  font-size: 24px;
}
div {
  display: flex;
  flex-direction: column;
}

.multiple-checkboxes {
  display: flex;
  flex-direction: row;
}

.form-class-container {
  min-width: 75%;
}

label {
  font-size: 1rem;
}

input[type="text"],
input[type="number"],
input[type="email"],
textarea,
select {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="checkbox"],
input[type="radio"] {
  margin: 0 2rem 0 0;
}

#my-form div {
  padding: 1rem 0;
  /* border: 0.2px blue solid; */
}
</style>

<!-- INFO & CONTEXT -->

<!-- ¿Qué es la directiva v-model de Vue?

La directiva v-model es una característica de Vue.js que le permite vincular un valor desde su componente a un elemento de formulario o entrada. Crea una conexión bidireccional entre los datos del componente y el elemento de formulario, de modo que los cambios en ambos se reflejarán en el otro.

¿Por qué se utiliza la directiva v-model de Vue?

La directiva v-model se utiliza para simplificar la conexión de datos entre los datos del componente y los elementos de formulario, lo que facilita mantener los datos del componente y los elementos de formulario sincronizados. Esto puede reducir la cantidad de código que debe escribir, así como hacer que su componente sea más legible y mantenible.

¿Cómo se utiliza la directiva v-model en la API de composición?

En la API de composición, la directiva v-model se puede utilizar con un ref reactivo para vincular un valor desde los datos del componente a un elemento de formulario. El ref reactivo se utiliza para crear una propiedad reactiva que se puede actualizar y utilizar para almacenar el valor del elemento de formulario. Luego, puede usar la directiva v-model para vincular el ref reactivo al elemento de formulario, creando una conexión bidireccional entre los datos del componente y el elemento de formulario. -->
