// JavaScript Document
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




// PRELOADER

// window.onload = function(){
// 	alert("Pàgina correctament carregada");
// 	document.querySelector(".preloader").style.display = "none";
	
// }


// window.onload = function carrega (){	
// 	alert("Pàgina correctament carregada");	
// 	var x = document.getElementById("preloader2");
// 	x.style.display = "none";

// 	var y = document.getElementById("amaga");
// 	y.style.display = "block";
// }


// window.onload = function carrega (){	
// 	alert("carregat");	
// 	var x = document.getElementById("preloader");
// 	x.style.display = "none";

// 	var y = document.getElementById("amaga");
// 	y.style.display = "block";
// }
