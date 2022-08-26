// VARIABLES
let modal2;
let nav;
let menu_desplegat = false;

// PRELOADER
let preloader = () => {
        var x = document.getElementById("preloader");
        x.style.display = "none";

        var y = document.getElementById("contenidorpagina");
        y.style.display = "block";
}
window.onload = preloader;

// MENÚ MOVIL
let desplegar_menu = () =>{
        let x = document.getElementById("menu_movil");
        let y = document.getElementById("label_toggle");
        x.style.left="0px";
        y.style.display="none"
        menu_desplegat = true;
}

let plegar_menu = () => {
        let x = document.getElementById("menu_movil");
        let y = document.getElementById("label_toggle");
        x.style.left = "-1000px";
        y.style.display="block"
        menu_desplegat = false;
}

// MODAL INDEX


        async function bIndex () {
                modal2 = document.getElementById("modalindex");
                nav = await document.getElementById("nav_desktop");
                modal2.style.display = await "block"; 
                modal2.style.transform = await "translateY(0%)";
                nav.style.position= await"fixed";
                if(menu_desplegat == true){
                        await plegar_menu();
                        menu_desplegat = await false;
                }
        }

        async function tancarIndex () {
                modal2.style.transform ="translateY(-120%)";
                nav.style.position="static";
        }

        window.onclick = function (event) {
                if (event.target == modal2) {
                modal2.style.transform ="translateY(-120%)";
                }
                }



// CREDITS
// var modal = document.getElementById("modalcredits");
// var btn = document.getElementById("botocredits");
// var span = document.getElementsByClassName("creu")[0];
// btn.onclick = function () {
// modal.style.display = "block";
// }
// span.onclick = function () {
//         modal.style.display = "none";
// }

// window.onclick = function (event) {
// if (event.target == modal) {
//         modal.style.display = "none";
//         let span2 = document.getElementsByClassName
//         ("iconaTanca")[0];
// }
// }