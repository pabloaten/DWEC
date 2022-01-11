//1.- template literals
const nombre = "Pablo";
const apellidos = "Atenciano";
console.log(`${nombre} 🤑--- ${apellidos}🤑`);

/* function Componente ({backgroundColor}) {
    return (
        <div className= {``}></div>
    )
} */

//2.- short and property names (acortadores de nombres)
const nombre2 = "Pablo";
const apellidos2 = "Atenciano";
const edad = 19;

const Alumno = {
  nombre: nombre2,
  apellidos: apellidos2,
  edad: edad,
};
const alumno2 = {
  nombre,
  apellidos,
  edad,
};

/* 3 Arrows function */
const datos = () => "hola";

/* 4.- Destructuring ***** */
const figura = {
  x: 10,
  y: 20,
};
/* Calculo Area *****/
function area(figura) {
  return figura.x * figura.y;
}
function area2(figura) {
  const { x, y } = figura;
  return x * y;
}
const area3 = ({ x, y }) => x * y;
console.log(area(figura));
/* Destructuring dentro del propio objeto */
/* const nuevaPersona = {
  ...persona,
  nombre: "Lucas",
}; */

/* 6.- Spread y Rest Operator */
const array = [1, 2, 3, 4, 5, 6];
const otroArray = [7, 8, 9, 10, 11, 12, 13, 14];
const nuevoArray = array.concat(otroArray);
const nuevoArray2 = [...array, ...otroArray];
console.log(nuevoArray);

/* 7.-Import y export */
/* import {a,b,c} from "./suma"
  export */

/* 8.- Operador condicional ternario */
const coche = {
  marca: "peugeot",
  model: "207",
};
let modelo;
if (coche.model) {
  modelo = coche.model;
}
let modeloNew = coche.model ? coche.model : "X";
console.log(modeloNew);
/* 9 PROMESAS */
/* 10 Nullish coalescing*/

function suma(a, b) {
  a = a ?? 0;
  b = b ?? 0;
  return a + b;
}
/* 11.- Optional chaining */
const persona = {
  name:"Gerardo",
  email:"email@gmail.com",
}
const titulo = persona?.trabajoActual?.titulo;