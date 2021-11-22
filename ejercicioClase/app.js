/**
 * @author Pablo
 * @description Escuchador de eventos
 
 */

const boton = document.getElementById("boton");
const caja = document.getElementById("caja");

//escuchamos el evento

boton.addEventListener("click", (e) => {
  //e hace referencia al objeto que lo genera
  console.log("Has pulsado " + e.target);
});
caja.addEventListener("mouseenter", (e) => {
  //Metodo para cambiar o remplazar una clase de css(Class.list.replace)
  caja.classList.replace("rojo", "azul");
});
caja.addEventListener("mouseleave", (e) => {
  caja.classList.replace("azul", "rojo");
});
boton.addEventListener("dblclick", (e) => {
  caja.classList.replace("rojo", "azul");
});
document.addEventListener("keydown", (e) => {
  if (e.code === "KeyG") {
    caja.classList.add("verde");
    caja.classList.remove("rojo");
  }
});
