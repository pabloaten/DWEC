let boton = document.getElementById("enviar");
let titulo = document.getElementById("titulo");
let miArray = [];
let tareasEliminadas = [];
let contador = 0;

function actualizarContador() {
  let cont = (document.getElementById("contador").innerHTML = contador);
}
boton.addEventListener("click", añadirTarea);

function obtenerFecha() {
  let fecha = new Date();
  let string =
    fecha.getDate() +
    "/" +
    fecha.getMonth() +
    "---" +
    fecha.getHours() +
    ":" +
    fecha.getMinutes() +
    ":" +
    fecha.getSeconds();
  return string;
}

function añadirTarea() {
  let tarea = document.getElementById("nombreTarea");
  let misTareas = document.getElementById("mistareas");
  if (tarea.value === "") {
    tarea.setAttribute("class", "bordeRojo");
  } else if (!miArray.includes(tarea.value)) {
    contador++;
    tarea.setAttribute("class", "");
    let h1 = document.createElement("h1");
    h1.addEventListener("click", eliminar);
    let fecha = obtenerFecha();
    let textoh1 = document.createTextNode(tarea.value+" "+fecha);
    h1.appendChild(textoh1);
    misTareas.appendChild(h1);
    miArray.push(tarea.value);
    actualizarContador();
    setTexto();
  } else if (miArray.includes(tarea.value)) {
    alert("Ya hay una tarea así creada");
  }
}
function setTexto() {
  let tarea = document.getElementById("nombreTarea");
  tarea.value = "";
}
function eliminar(e) {
  let h = e.target;
  let misTareas = document.getElementById("mistareas");
  misTareas.removeChild(h);

  for (let a of miArray) {
    console.log(h.innerText);
    let long =a.length;
    let valor =  h.innerText;
    let h1=  valor.substr(0,long);
    console.log(h1);
    if (a === h1) {
      tareasEliminadas.push(a);
      let num = miArray.indexOf(a);
      miArray.splice(num, 1);
    }
  }
}
document.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    añadirTarea();
  }
});

let buscador = document.getElementById("buscador");
buscador.addEventListener("keypress", (e) => {
  let tareaEncontrada = document.getElementById("tareaEncontrada");
  console.log(buscador.value);
  if (buscador.value === "") {
  } else {
    for (const a of miArray) {
      if (a.toString().includes(e.target.value)) {
        let h2 = document.createElement("h1");
        let texto = document.createTextNode(a.toString());
        h2.appendChild(texto);
        tareaEncontrada.appendChild(h2);
        console.log(miArray.length);
        break;
      }
    }
  }
  let buscar = document.getElementById("buscar");
  buscar.addEventListener("click", (e) => {
    let tareaEncontrada = document.getElementById("tareaEncontrada");
    tareaEncontrada.children[0].remove();
  });
  console.log(a.toString().includes(e.target.value));
  console.log(e.target.value);
});

console.log(tareasEliminadas);
