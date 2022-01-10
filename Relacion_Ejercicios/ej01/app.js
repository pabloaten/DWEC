/**
 * Ejercicio 1
 * @author Pablo
 *
 *
 *
 *
 *
 * @param {Number} ms
 * @returns {Promise} Promise
 */

/* function retardo(ms) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(`Estoy hasta el cipote durante ${ms/1000} segundos🤑`);
        },ms);
    })
   }


   retardo(3000)
   .then((respuesta) => {  alert(respuesta)}); */

/**
 * Ejercicio 3
 */

/**
 *
 * @param {Date} fecha
 * @returns {Promise}
 */

// function insertarFecha(fecha){
//     return new Promise(function (resolve, reject) {
//         if (typeof Storage != undefined ) {
//             /* Puedo almacenar en localstorage */
//             resolve(localStorage.setItem("Fecha",fecha));
//         }else{
//             /* No se puede */
//             reject("Tu navegador no puede almacenar en storage");
//         }
//     })
// }
// insertarFecha(new Date(Date.now()).toLocaleDateString())
// .then(() => {console.log("Fecha almacenada "+localStorage.getItem("Fecha"))})
// .catch(console.log);

//uso de la api fetch ("https://jsonplaceholder.typicode.com/albums")

// const urlAPI = "https://jsonplaceholder.typicode.com";

// const codigoHTML = document.querySelector("#aplicacion");
// const ul =document.createElement("ul");
// fetch(`${urlAPI}/users`)
// .then(response => response.json())
// .then((users) => {
//     users.forEach(user => {
//         let elementoLi= document.createElement("li");
//         elementoLi.appendChild(document.createTextNode(`${user.name}🤡 y correo ${user.email}📧`));
//         ul.appendChild(elementoLi);
//     });

// });
// codigoHTML.appendChild(ul);
// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then((response) => response.json())
// .then((response) => console.log(response))

// async function fetchAPI(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//     let posts = await response.json();
//     console.log(posts);
// }

// fetchAPI();

/* POSTS */
// fetch("https://jsonplaceholder.typicode.com/users",{
//     method:"POST",
//     body:JSON.stringify({"name": "Pablo","email": "pablo@typicode.com"}),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       }

// })
//     .then(response => response.json())
//     .then((user) => {
//         console.log(user);
//     });

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((posts) => {
//     console.log(posts);
// })
const listaUsuarios = [
  { id: 1, nombre: "Luis", codPais: 2 },
  { id: 2, nombre: "Pablo", codPais: 1 },
];
const listaPais = { 1: "Francia", 2: "España" };

function obtenerUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
        resolve(listaPais)},3000);
    })
}
obtenerUsuarios()
.then((paises) => {
    console.log("Paieses:"+paises);
})

const misUsuarios =obtenerUsuarios();

misUsuarios.then(usuarios => {
    console.log(usuarios);
})