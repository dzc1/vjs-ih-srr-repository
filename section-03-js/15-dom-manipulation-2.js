console.log("DOM Manipulation Class Continued");
console.log(document);

// Cómo manipular elementos en el DOM
// En esta sección vamos a ver:

//  -  Cómo crear elementos
//  -  Cómo establecer el contenido innerHTML/texto de un elemento
//  -  Cómo añadir un elemento
//  -  Cómo insertar un elemento antes de otro
//  -  Cómo reemplazar un elemento hijo
//  -  Cómo eliminar un elemento hijo

// Cómo crear elementos
// El código en HTML con el ID de #parent muestra un elemento padre con 5 elementos hijos. Supongamos que queremos añadir otra etiqueta div con JavaScript. Definitivamente tendríamos que crear un nuevo elemento con el método createElement(), así:
let createElement = document.createElement("div");
console.log(createElement);

console.log(document.querySelector("#firstchild"));

// Establecer algun texto mediante unos keys de innerHTML o innerTEXT
// usando innerHTML
// createElement.innerHTML =
//   "JS aunque es dificil al principio es dem cool a la larga :)";

// usando innerText
createElement.innerText =
  "JS aunque es dificil al principio es dem cool a la larga :)";
console.log(createElement);

// Como anexar elemento creado en js al doc de HTML
// apuntamos a algun elemento del dom que este en el body y vamos a usar un metodo appendCHILD!

// Version - 1 Solo Selector
let parentElement = document
  .querySelector("#parent")
  .appendChild(createElement);

// Version 2 - Añadir Clases
createElement.className = "ejemplo1";
console.log(createElement);

//* EJERCICIOS

// 1º - Crea un <p></p> dentro de un tag de tipo <div id="insert-p"></div>

// 2º - Crea un <div id="nested"></div> desde código
