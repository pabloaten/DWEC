/**
 * @description Flujo de eventos
 */
function info(evento){
    //nombre del evento
    console.log("Hola soy el evento "+ this.className+ " y el click lo lanzo el "+evento.target.className);

}
const eventosDiv =document.querySelectorAll(".flujos-eventos div");
/* console.log(eventosDiv); */
eventosDiv.forEach((div) =>{
    div.addEventListener("click",info,{
        capture:true,
        once:true, //solo se ejecuta una vez el elemento
    });
})
document.querySelector("a").addEventListener("click", (e)=> {
    e.preventDefault();
    
});

