/* function Animal(nombre,genero){
    this.nombre=nombre;
    this.genero=genero;

  
}
Animal.prototype.saludar = function(){
    console.log(`Hola ${this.nombre}`);
}

const animal1 = new Animal("perro","macho");
console.log(animal1);
console.log(animal1.saludar()); */

/* 
Crear la clase Padre estudiante con dni  y nombre 
Alumno Hlanz pertenece a los estudiantes y que tiene que indicar obligatoriamente el ciclo formativo y curso al que pertetenece
Crear los metodos modulos que me muestren los modulos de curso y permita modificar los modulos de curso y curso
Los modulos se almacenaran en un array obligatoriamente*/

class Estudiante {
  constructor(dni, nombre) {
    this.dni = dni;
    this.nombre = nombre;
  }
}

class AlumnoHlanz extends Estudiante {
  constructor(dni, nombre, curso, ciclo) {
    super(dni, nombre);
    this._curso = curso;
    this._ciclo = ciclo;
    this._modulos = new Array();
  }
  get curso() {
    return this._curso;
  }
  set curso(curso1) {
    this._curso = curso1;
  }
  set modulos(arrayModulos) {
    this._modulos.push(arrayModulos);
  }
  get modulos() {
    return this._modulos;
  }
}
let alumno = new AlumnoHlanz(1111111, "Pablo", "2DAW", "a");
alumno.modulos = ["DWEC", "LC"];
console.log(alumno);
