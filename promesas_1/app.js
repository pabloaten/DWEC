
const peliculas = [
    { id: 1, titulo: "Titulo Pelicula 1", sinopsis: "contenido pelicula 1;" },
    { id: 2, titulo: "Titulo Pelicula 2", sinopsis: "contenido pelicula 2;" },
];

//-----PROMESAS
//Las promesas se construyen con la palabra new Promise(resolve,reject)

setTimeout(() => {
    buscarPelicula(1).then((pelicula)=> {
        console.log(pelicula);
    }).catch((pelicula)=> {
        console.log(pelicula);
    }).finally(console.log("Un placer buscar peliculas por ti..."));
},3000);

const buscarPelicula = (id)=> {
    const pelicula = peliculas.find((item)=> item.id === id);
    return new Promise((resolve,reject)=>{
        if(pelicula){
            resolve(pelicula);
        }else{
            reject("No ha encontrado la pelicula con la id "+id);
        }
    })
}
//para obtener los resolve tengo que llamar a .then
//para obtener los reject .catch
//tb se puede usar finally() que se mostraria siempre
