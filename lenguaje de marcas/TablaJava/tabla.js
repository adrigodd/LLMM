var Nombre = prompt("Elige un numero")

var tabla= document.getElementById("Adri")


let contador = 0
let Distribución=document.getElementById("Distribución")
let Mostrar=document.getElementById("Mostrar")
Distribución.innerHTML = "Hola "+Nombre+" bienvenido a la cueva cadi";

Original();




function Original(){
    Mostrar.innerHTML = "";
    for (let i= 1; i<=numero; i++){
        let elemento = document.getElementById(i);
        elemento.style.backgroundColor = "purple";
        elemento.style.borderCollapse="Collapse";
        elemento.style.borderCollapse="collapse";
        elemento.style.transform="scale(1)";
        elemento.style.opacity="1";
        elemento.style.boxShadow="null";
        elemento.style.color="white"
    }
}

