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


