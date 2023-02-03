<!-- <section>
    <!-- Ejemlo de evento click con logica directa dentro del template! -->
    <div class="event-buttons">
      <button v-on:click="countInLine++">
        Suma +1 - usando directivo completo
      </button>
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-buttons">
      <button v-on:click="countMinusOne">
        Resta -1 - usando directivo completo pero apuntando a una funcion en vez
        de tener logica en linea
      </button>
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-buttons">
      <button @click="countInLine++">Suma +1 - usando el shortHand</button>
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-buttons">
      <button @click="countMinusOne">
        Resta -1 - usando el shortHand + apuntando a una funcion en vez de tener
        logica en linea
      </button>
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-buttons">
      <button @dblclick="countOneDouble">
        Suma +1 - usando el shortHand + dblclick
      </button>
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-buttons">
      <button @mouseenter="countOneDouble">
        Suma +1 - usando el shortHand + mouseenter event
      </button>
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-buttons">
      <button @mouseleave="countOneDouble">
        Suma +1 - usando el shortHand + mouseleave event
      </button>
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-inputs">
      <label for="inputOne">Using @click event on an input</label>
      <input type="text" id="inputone" @click="countPlusOne" />
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-inputs">
      <label for="inputTwo">Using @input event on an input</label>
      <input type="text" id="inputTwo" @input="countPlusOne" />
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-inputs">
      <label for="inputThree">Using @keydown event on an input</label>
      <input type="text" id="inputThree" @keydown="countPlusOne" />
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-inputs">
      <label for="inputFour">Using @keyUp event on an input</label>
      <input type="text" id="inputFour" @keyup="countPlusOne" />
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-inputs">
      <label for="inputFive">Using @keypress event on an input</label>
      <input type="text" id="inputFive" @keypress.space="countInLine++" />
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-inputs">
      <label for="inputSix">Using @keydown.tab event on an input</label>
      <input type="text" id="inputFive" @keydown.tab="countInLine++" />
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="event-inputs">
      <label for="inputSix">Using @keydown.delete event on an input</label>
      <input type="text" id="inputFive" @keydown.delete="countInLine++" />
      <p>La Cuenta actual es: {{ countInLine }}</p>
    </div>

    <div class="function-with-events">
      <!-- INSERT CONTEXT LATER -->
      <!-- Ejemplo de un evento que asociamos una funcion chicos que acepte un paramtero que nos diga hola dentro de una alerta, aca refrescamos un poco de js :) -->
      <button @click="holaClase('Hola chicojkaldjkjfndjksnkjdss!')">
        Dile hola a la consola
      </button>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="function-with-events">
      <button @click="holaClaseTwo">
        Escribe tu nombre y el navegador te dira hola :)
      </button>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <!-- Formulario con @submit dentro opening del form element -->
    <div class="forms">
      <h1>Form one</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-labels">
          <label for="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div class="form-labels">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <!-- Formulario con @submit fuera opening del form element -->
    <div class="forms">
      <h1>Form two</h1>
      <form @submit="handleSubmit">
        <div class="form-labels">
          <label for="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div class="form-labels">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" />
        </div>
        <input type="submit" @click.prevent value="Submit" />
      </form>
    </div>
    <!-- INSERT CONTEXT LATER -->
    <div class="class-example">
      <label for="multiple-visa">Do you have multplie citizenship?</label>
      <div class="checkbox"></div>
      <input
        type="checkbox"
        id="multiple-visa"
        @click="showHideExtraVisaElements"
      />

      <div v-if="showExtraVisa">
        <label for="visa">Enter Citizenship</label>
        <input type="text" id="visa" />
      </div>
    </div>
  </section> -->