// PRELOADER
let preloader = () => {
        var x = document.getElementById("preloader");
        x.style.display = "none";

        var y = document.getElementById("contenidor_pagina");
        y.style.display = "block";
}
window.onload = preloader;

// MENÚ MOVIL
let desplegar_menu = () =>{
        let x = document.getElementById("menu_movil");
        let y = document.getElementById("label_toggle");
        x.style.left="0px";
        y.style.display="none"
}

let plegar_menu = () => {
        let x = document.getElementById("menu_movil");
        let y = document.getElementById("label_toggle");
        x.style.left = "-1000px";
        y.style.display="block"


}