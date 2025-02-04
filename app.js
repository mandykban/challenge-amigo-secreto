// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
const $inputFormulario = document.querySelector("#amigo");
const $contenedorListaAmigos = document.querySelector("#listaAmigos");
const $elementoResultado = document.querySelector("#resultado");

const amigoComponente = (nombre) => {
  const elementoLista = document.createElement("li");
  elementoLista.textContent = nombre; // Más eficiente que `appendChild` con `createTextNode`
  return elementoLista;
};

const numeroAleatorio = () => Math.floor(Math.random() * listaAmigos.length);

const agregarAmigoALista = () => {
  const nombre = $inputFormulario.value.trim(); // Elimina espacios en blanco al inicio y final
  if (nombre) {
    listaAmigos.push(nombre);
    $inputFormulario.value = "";
    actualizarLista();
  } else {
    alert("Ingresa un nombre por favor!");
  }
};

const actualizarLista = () => {
  $contenedorListaAmigos.innerHTML = ""; // Limpia la lista antes de actualizarla
  listaAmigos.forEach((nombre) => {
    $contenedorListaAmigos.appendChild(amigoComponente(nombre));
  });
};

const nuevoSorteo = () => {
  listaAmigos = [];
  $contenedorListaAmigos.innerHTML = "";
  $elementoResultado.textContent = ""; // Usa `textContent` para limpiar el resultado
  $inputFormulario.value = "";
};

const removerDeLista = (item) => {
  const index = listaAmigos.indexOf(item);
  if (index !== -1) listaAmigos.splice(index, 1); // Verifica que el elemento exista antes de eliminarlo
};

const sortearAmigo = () => {
  if (listaAmigos.length > 1) {
    const resultadoSorteo = listaAmigos[numeroAleatorio()];
    removerDeLista(resultadoSorteo);
    actualizarLista();
    $elementoResultado.textContent = `Tu amigo secreto es ${resultadoSorteo}!`; // Usa `textContent` para asignar el resultado
  } else {
    alert("No hay suficientes nombres para realizar el sorteo!");
  }
};