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
