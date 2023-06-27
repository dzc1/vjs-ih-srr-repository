<template>
  <button class="fancy-btn">
    <slot />
  </button>
  <!-- <h1>
    <slot />
  </h1> -->
  <!-- <strong class="black">
    <slot />
  </strong> -->
  <!-- <div class="sloth-flex">
    <slot />
    <slot />
    <slot />
  </div> -->
</template>

<style>
.black {
  background: green;
  color: black;
}

.sloth-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

<script setup>
/*
¿Qué es un slot?
Es un "hueco" en el que introduciremos cierta información

¿Para qué sirve un slot?
Cuando quieres que aparezca un texto en un div sueles escribir "<div> Hola </div>". Los componentes de vue no tienen un comportamiento por defecto para leer ese "hola".
Un slot sirve para decirle a un componente "oye, si el programador ha puesto algo dentro de ti (como el "hola" del ejemplo) ponlo en este sitio".

Un ejemplo
Si tenemos lo siguiente: 
<template>
    <div> <slot /> </div>
</template>
Lo que obtendremos es que ese slot se sustituirá por el contenido que nosotros hemos introducido dentro del tag. En este ejemplo, donde pone <slot /> pasará a poner "Hola".
*/
</script>
