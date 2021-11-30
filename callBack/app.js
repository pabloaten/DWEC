/**
 * Uso de las callbacks
 * Una funcion de callback es una funcion que se pasa a una funcion
 * a otra  funcion como argumento que posteriormente es invocado dentro de una funcion externa
 * */
const peliculas = [
    { id: 1, titulo: "Titulo Pelicula 1", sinopsis: "contenido pelicula 1;" },
    { id: 2, titulo: "Titulo Pelicula 2", sinopsis: "contenido pelicula 2;" },
];
/**
 *
 * @param {Number} id
 * @param {Callback} callback
 */
const buscarPelicula = (id, callback) => {

    const pelicula = peliculas.find((item) => item.id === id);
    if (pelicula) {
        callback(pelicula);
    } else {
        callback("No hay ninguna pelicula con id " + id);
    }


};
setTimeout(() => {
    buscarPelicula(2, (pelicula) => {
        alert(pelicula);
    });
}, 3000);

let temporizador = setInterval(() => {
    let d = new Date();
    document.getElementById("hora").innerHTML = d.getHours() + ":" + d.getUTCMinutes() + ":" + d.getSeconds();
}, 1000);
/* let holaMundo = setTimeout(() => {
    alert("Hola mundo");
},3000); */
