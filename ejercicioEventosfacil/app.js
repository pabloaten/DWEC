function miFuncion(e){
    if(e.target.matches("li")){
        if(e.target.children[0].style.display == "none"){
            e.target.children[0].style.display ="block";
        }else{
            e.target.children[0].style.display="none";
        }
    }
}

document.addEventListener("click",miFuncion);
