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

// MODAL INDEX
var modal2 = document.getElementById("modalindex");
var btn2 = document.getElementById("botoindex");
var span2 = document.getElementsByClassName
("iconaTanca")[0];
var nav = document.getElementById
("nav");
	
btn2.onclick = function () {
modal2.style.display = "block";
modal2.style.transform ="translateY(0%)";
nav.style.position="fixed";
}
span2.onclick = function () {
modal2.style.transform ="translateY(-120%)";
nav.style.position="static";
}
window.onclick = function (event) {
if (event.target == modal2) {
modal2.style.transform ="translateY(-120%)";
}
}

// CREDITS
var modal = document.getElementById("modalcredits");
var btn = document.getElementById("botocredits");
var span = document.getElementsByClassName("creu")[0];
btn.onclick = function () {
modal.style.display = "block";
}
span.onclick = function () {
        modal.style.display = "none";
}

window.onclick = function (event) {
if (event.target == modal) {
        modal.style.display = "none";
}
}