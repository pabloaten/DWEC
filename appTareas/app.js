/**
 * @author Pablo Atenciano Jurado
 * @description Gestor de tareas con javascript
 */

let boton = document.getElementById("enviar");
let titulo = document.getElementById("titulo");
let miArray = [];
let tareasEliminadas = [];
let contador = 0;

/**
 * Funcion para actualizar el contador de tareas
 */
function actualizarContador() {
  let cont = (document.getElementById("contador").innerHTML = contador);
}
boton.addEventListener("click", añadirTarea);

/**
 * Funcion para obtener un string con la fecha
 * @returns Un string con el formato de la fecha que necesitamos
 */
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
/**
 * Funcion para añadir la tarea
 */
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
    let textoh1 = document.createTextNode(tarea.value + " " + fecha);
    h1.appendChild(textoh1);
    misTareas.appendChild(h1);
    miArray.push(tarea.value);
    actualizarContador();
    setTexto();
  } else if (miArray.includes(tarea.value)) {
    alert("Ya hay una tarea así creada");
  }
}
/**
 * Funcion para poner el input vacio
 */
function setTexto() {
  let tarea = document.getElementById("nombreTarea");
  tarea.value = "";
}
/**
 * Funcion para eliminar la tarea
 * @param {e} Object
 */
function eliminar(e) {
  let h = e.target;
  let misTareas = document.getElementById("mistareas");
  misTareas.removeChild(h);
  contador--;
  actualizarContador();
  for (let a of miArray) {
    let long = a.length;
    let valor = h.innerText;
    let h1 = valor.substr(0, long);
    if (a === h1) {
      tareasEliminadas.push(h1);
      let num = miArray.indexOf(a);
      miArray.splice(num, 1);
      console.log("Tarea eliminada " + h.innerText);
      console.log("Todas las tareas eliminadas " + tareasEliminadas);
    }
  }
}
/**
 * Funcion para presionar el boton enter y ejecutar la funcion de añadir tarea
 */
document.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    añadirTarea();
  }
});
/**
 * Funcion realizar la busqueda
 */
let buscador = document.getElementById("buscador");
buscador.addEventListener("keypress", (e) => {
  let tareaEncontrada = document.getElementById("tareaEncontrada");

  if (buscador.value === "") {
  } else {
    for (let a of miArray) {
      if (a.toString().includes(e.target.value)) {
        let h2 = document.createElement("h1");
        let texto = document.createTextNode(a.toString());
        h2.appendChild(texto);
        tareaEncontrada.appendChild(h2);
      }
    }
  }

  let buscar = document.getElementById("buscar");
  buscar.addEventListener("click", (e) => {
    let tareaEncontrada = document.getElementById("tareaEncontrada");
    tareaEncontrada.remove(2);
  });
});
