const SeguirLeyendo= document.getElementById("SeguirLeyendo")
const OcultarLeyendo=document.getElementById("OcultarLeyendo")
const Ocultar=document.getElementById("hijo")
SeguirLeyendo.addEventListener("click",function(){
    SeguirLeyendo.style.display="none";
    Ocultar.style.display="block";
    OcultarLeyendo.style.display="block";

})
OcultarLeyendo.addEventListener("click",function(){
    OcultarLeyendo.style.display="none";
    Ocultar.style.display="none";
    SeguirLeyendo.style.display="block";

})