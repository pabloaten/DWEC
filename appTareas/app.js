
let boton = document.getElementById("enviar");
let titulo = document.getElementById("titulo");
let miArray = [];
boton.addEventListener("click", añadirTarea);

function añadirTarea() {
  let tarea = document.getElementById("nombreTarea");
  let misTareas = document.getElementById("mistareas");
  if (tarea.value === "") {
    tarea.setAttribute("class", "bordeRojo");
  } else if (!miArray.includes(tarea.value)) {
    tarea.setAttribute("class", "");
    let h1 = document.createElement("h1");
    h1.addEventListener("click", eliminar);
    let textoh1 = document.createTextNode(tarea.value);
    h1.appendChild(textoh1);
    misTareas.appendChild(h1);
    miArray.push(tarea.value);
  } else if (miArray.includes(tarea.value)) {
    alert("Ya hay una tarea así creada");
  }
}

function eliminar(e) {
  let h = e.target;
  let misTareas = document.getElementById("mistareas");
  misTareas.removeChild(h);
  for (const a of miArray) {
      if(a===h.innerText) {
          let num =miArray.indexOf(a);
          miArray.splice(num,1);
      }
      
  }
}
