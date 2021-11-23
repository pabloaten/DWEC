/**
 * @author Pablo
 * @description Ambitos del uso de this
 */
console.log(this);
/* console.log(window); */
this.nombre = "contexto Global";

function saludo() {
  console.log(this.nombre);
}
saludo();
const objeto = {
  nombre: "contexto objeto",
  imprimir: function () {
    console.log(this.nombre);
  },
};
objeto.imprimir();
const objeto2 = {
  nombre: "contexto objeto",
  imprimir: () => {
    console.log(this.nombre);
  },
};
objeto2.imprimir();

//Las funciones flecha el problema que acarrean es que heredan el contexto donde han sido creadas
