// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const contenedor = document.getElementById("contenedor");
// const tr=document.createElement("td");
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((response) => {
//     response.forEach((element) => {
//       for (let a in element) {
//         if (a == "username" ) {
//           console.log(element[a]);
//          let td = document.createElement("tr");
//          td.appendChild(document.createTextNode("Nombre "+element[a]))
//          tr.appendChild(td);
//          contenedor.appendChild(tr);

//         }else if (a == "phone"){
//             let td = document.createElement("tr");
//             td.appendChild(document.createTextNode("Telefono " +element[a]))
//             tr.appendChild(td);
//             contenedor.appendChild(tr);
//         }
//       }
//       for (let b in element["address"]) {
//       }
//       for (let c in element["address"]["geo"]) {
//         console.log(element["address"]["geo"][c]);
//         let td = document.createElement("td");
//         td.appendChild(document.createTextNode("Latitud "+ element["address"]["geo"][c]))
//         tr.appendChild(td);
//         contenedor.appendChild(tr);

//       }
//     });
//   });

//   function hora() {
//       return new Promise((resolve, reject) => {
//           let c="hola";
//           if(c=="hola"){
//           resolve((new Date().toLocaleTimeString()));
//           }else{
//               reject("Payaso🤡")
//           }
//       })
//   };
//   hora().then((a) =>
//   setTimeout(() => {
//       alert("Son las "+a);
//   }, 3000))
//   .catch(alert);
// const container =document.getElementById("imagen");
// fetch("https://jsonplaceholder.typicode.com/photos")
//  .then((response) => response.json())
//   .then((response) => {
//     response.forEach((element) => {
//         for (let a in element) {
//             if(a==="id"){

//                 let h1=document.createElement("h1");
//                 h1.appendChild(document.createTextNode(element[a]+" "+element["title"]));

//                 container.appendChild(h1);
//             }else if(a==="url"){
//                 let imagen =document.createElement("img");
//                 imagen.setAttribute("src", element[a]);
//                 imagen.setAttribute("width","100px");
//                 container.appendChild(imagen);

//             }

//         }
//     })
// });

/* function estudiar() {
    
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("He estudiado mucho");
            }, 3000);
          
        })
   
}
async function asyncrona(){
    let c = await estudiar();
    console.log(c);

}
estudiar().then((h) => {
    console.log(h);
});
asyncrona(); */

// function primero(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Primero va esta")
//         }, 3000);
//     })
// }
// function segundo(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Y segundo esta");
//         }, 2000);
//     })
// }

// async function cositas(){
//     let a = await segundo();
//     let b = await primero();

//     console.log(a);
//     console.log(b);

// }
// cositas();
/* const boton =document.getElementById("button");
boton.addEventListener("click",datos);
function datos() { */
//RICK y MORTY
 /* const contenedor = document.getElementById("imagen");
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let a in data) {
      if (a === "results") {
        data[a].forEach((element) => {
          for (let b in element) {
            if (b === "name") {
              let h1 = document.createElement("h1");
              h1.appendChild(
                document.createTextNode("Mi nombre es " + element[b])
              );
              contenedor.appendChild(h1);
            } else if (b === "image") {
              let imagen = document.createElement("img");
              imagen.setAttribute("src", element[b]);
              contenedor.appendChild(imagen);
            } else if (b === "location") {
              for (let lugar in element[b]) {
                if (lugar === "name") {
                    let h1 = document.createElement("h4");
                    h1.appendChild(
                      document.createTextNode("Vivo en  " + element[b][lugar])
                    );
                    contenedor.appendChild(h1);
                }
              }
            }
          }
        });
      }
    }
  });  */

/*  for (let d in data) {
            
            if(d==="image"){
                let imagen = document.createElement("img");
                imagen.setAttribute("src",data[d]);
                contenedor.appendChild(imagen);
            }else if(d==="name"){
                let h1 = document.createElement("h1");
                h1.appendChild(document.createTextNode("Mi nombre es "+ data[d]));
                contenedor.appendChild(h1);
            }else if(d==="origin"){
                for (let d in data["origin"]) {
                    console.log();
                    let h1 = document.createElement("h1");
                    if(d==="name"){
                        h1.appendChild(document.createTextNode("Origen :"+data["origin"][d]));
                        contenedor.appendChild(h1);
                    }else{
                        h1.appendChild(document.createTextNode("Url:"+data["origin"][d]));
                        contenedor.appendChild(h1);
                    }
                   
                    
                }
            }
           

        } */

/*  if (i == "url") {
            let imagen = document.createElement("img");
            imagen.setAttribute("src", item[i]);
            contenedor.appendChild(imagen);
            console.log(item[i]);
          } */
/* const listaUsuarios = [
  { id: 1, nombre: "Luis", codPais: 3 },
  { id: 2, nombre: "Alfred", codPais: 1 },
  { id: 3, nombre: "Pascal", codPais: 2 },
];
const paises = { 1: "Francia", 2: "Bélgica", 3: "España" };

function getUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listaUsuarios);
    }, 3000);
  });
}

getUsuarios().then((dato) => {
  dato.forEach((element) => {
    for (let a in element) {
      if (a === "nombre") {
        console.log(element[a]);
      }
    }
  });
});
function getPaises(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(listaUsuarios);
        }, 2000);
    })
}
getPaises().then((dato) => {
    console.log(dato);
    dato.forEach(element => {
        for (let a in element) {
            if(a === "codPais") {
                for (let c in paises) {
                    console.log(c);
                    if(element[a]===c){
                        console.log(paises[c]);
                    }
                }
               
                
            }
           
        }
    });
}) */
const contenedor = document.getElementById("contenedor");
let tr=document.createElement("td");
/** */
fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    for (let a in data) {
      if (a === "results") {
        data[a].forEach((element) => {
          for (let b in element) {
            if (b === "name") {
              let h1 = document.createElement("tr");
              h1.appendChild(
                document.createTextNode("Mi nombre es " + element[b])
              );
              contenedor.appendChild(h1);
            } else if (b === "image") {
                let h1 = document.createElement("tr");
              let imagen = document.createElement("img");
              imagen.setAttribute("src", element[b]);
              h1.appendChild(imagen);
              contenedor.appendChild(h1);
            } else if (b === "location") {
              for (let lugar in element[b]) {
                if (lugar === "name") {
                    let h1 = document.createElement("h4");
                    h1.appendChild(
                      document.createTextNode("Vivo en  " + element[b][lugar])
                    );
                    contenedor.appendChild(h1);
                }
              }
            }
          }
        });
      }
    }
  }); 