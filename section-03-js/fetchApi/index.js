console.log("Fetch API Class");

// Ejemplo 001 - Llamando a un doc interno con extension .txt
let getText = () => {
  // usamos fetch
  fetch("sample.txt")
    .then((respuesta) => respuesta.text())
    .then(
      (informacionDeRespuesta) =>
        (document.querySelector("#output").innerText = informacionDeRespuesta)
    )
    .catch((error) => console.log(error));
};

// Ejemplo 001 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
document.querySelector("#getText").addEventListener("click", getText);

// Ejemplo 002 - llamando a un doc interno con extension .json - rick&morty
let getJson = () => {
  fetch("users.json")
    .then((response) => response.json())
    .then((rickAndMortyInfo) => {
      console.table(rickAndMortyInfo);
      let userData = "";
      rickAndMortyInfo.forEach((infoFromJson) => {
        userData += `
              <ul>
        <li>${infoFromJson.id}</li>
        <li>${infoFromJson.name}</li>
        <li>${infoFromJson.profession}</li>
    </ul>
              `;
      });
      return (document.querySelector("#output").innerHTML = userData);
    })
    .catch((error) => console.log(error));
};

// Ejemplo 002 - Definir logica para conectar mediante DOM a elementos de bottones que usamos en clase:
document.querySelector("#getJson").addEventListener("click", getJson);
