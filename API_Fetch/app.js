/**
 * La api fetch proporciona una interfaz para recuperar
 * recursos de internet. SUstituye a XMLHRequest
 */
let tabla = document.getElementById("miTabla");
fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((data) => { });
fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

        /* for (let i = 0; i < data.length; i++) {
          let fila = document.createElement("tr");
          for (const valor in data[i]) {
            let tr = document.createElement("td");
            let texto = document.createTextNode(data[i][valor] + " ");
            tr.appendChild(texto);
            fila.appendChild(tr);
            tabla.appendChild(fila);
          }
        } */
        for (let i = 0; i < data.length; i++) {
            let fila = document.createElement("tr");
            for (const valor in data[i]) {
                if (valor === "id" || valor === "thumbnailUrl") {
                    let tr = document.createElement("td");
                    if (valor === "id") {
                        let texto = document.createTextNode(data[i][valor] + " ");
                        tr.appendChild(texto);
                    } else {
                        let imagen = document.createElement("img");
                        imagen.setAttribute("src", data[i][valor]);
                        tr.appendChild(imagen);
                    }

                    fila.appendChild(tr);
                    tabla.appendChild(fila);
                }
            }
        }
    });
