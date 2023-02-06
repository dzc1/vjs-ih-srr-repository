<!-- HTML HERE -->
<template></template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
</script>
<!-- CSS HERE -->
<style scoped></style>

<!-- Computed Properties - what are they ? -->
<!-- Las propiedades computadas en Vue.js son valores reactivos que se calculan en base a los valores de otros datos reactivos en tu componente. Se utilizan para obtener nuevos datos a partir de datos reactivos existentes, y pueden ser utilizados como cualquier otro dato en tu componente.
    
Las propiedades computadas se utilizan en Vue.js con diversos fines, incluyendo:

- Derivar datos que sean más complejos o formateados que los datos crudos.
- Proporcionar una forma más conveniente y reutilizable de acceder a datos que se utilizan con frecuencia.
- Mejorar el rendimiento al almacenar en caché el valor computado y solo volver a calcularlo cuando sus dependencias cambien.
- Añadir funcionalidad adicional, como filtrar o ordenar, a los datos que se muestran en tu componente.

Al utilizar propiedades computadas, puedes escribir código más conciso, mantenible y eficiente, mientras sigues disfrutando de la reactividad y la simplicidad que brinda Vue.js.

ANALOGIA:
Las propiedades computadas en Vue.js se pueden comparar con un cálculo que realiza una calculadora. Al igual que una calculadora, las propiedades computadas toman valores existentes (los números que ingresas) y realizan un cálculo con ellos (por ejemplo, la suma o el producto) para producir un nuevo valor (el resultado). En el caso de Vue.js, los valores existentes son los datos reactivos en tu componente, y la propiedad computada es el cálculo que se realiza con ellos.

Además, al igual que una calculadora, las propiedades computadas en Vue.js solo se recalculan cuando sus dependencias cambian. De esta manera, pueden mejorar el rendimiento al evitar recalculaciones innecesarias. 

EJEMPLO: 
Imagina que estás mostrando una lista de precios pero que el usuario puede meter un código de descuento. Puedes hacer una propiedad computada que sea el descuento
y otra que sea el precio.
Cuando el descuento cambie, cambiarán el resto de precios y el usuario lo verá en pantalla inmediatamente. 

-->
