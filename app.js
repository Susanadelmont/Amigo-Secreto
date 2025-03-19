// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Este nombre ya está en la lista.");
    return;
  }

  amigos.push(nombre);

  input.value = "";

  mostrarListaAmigos();
}

function mostrarListaAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debe haber al menos 2 amigos en la lista para realizar el sorteo.");
    return;
  }

  let amigosSorteo = [...amigos]; 
  let resultadoSorteo = {};

  for (let i = 0; i < amigos.length; i++) {
    let amigo = amigos[i];
    let posiblesOpciones = amigosSorteo.filter((a) => a !== amigo);
    if (posiblesOpciones.length === 0) {

      return sortearAmigo();
    }

    let elegido = posiblesOpciones[Math.floor(Math.random() * posiblesOpciones.length)];
    resultadoSorteo[amigo] = elegido;

    amigosSorteo = amigosSorteo.filter((a) => a !== elegido);
  }

  mostrarResultado(resultadoSorteo);
}

function mostrarResultado(resultadoSorteo) {
  const resultadoLista = document.getElementById("resultado");
  resultadoLista.innerHTML = "";

  for (const [amigo, asignado] of Object.entries(resultadoSorteo)) {
    const li = document.createElement("li");
    li.textContent = `${amigo} → ${asignado}`;
    resultadoLista.appendChild(li);
  }
}
