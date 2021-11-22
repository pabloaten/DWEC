/**
 * @author Pablo
 * @description efecto acordeon
 */
const eleAcordeon = document.getElementsByClassName("acordeon");

/* console.log(eleAcordeon); */
for (let elemento of eleAcordeon) {
    //elemento.classList.toggle(xxxx) <---- cambia un parametro de una clase
    elemento.addEventListener("click",(e) => {
        let panel = elemento.nextElementSibling;
        if(panel.style.display == "none") {
            panel.style.display = "block";
        }else{
            panel.style.display = "none";
        }
    });
  /*   elemento.addEventListener("mouseover", (e)=>{
        
        elemento.style.backgroundColor = "orange";
           
        
    }); */
    
}