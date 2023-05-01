const dict = {
	a: "ai",
	e: "enter",
	i: "imes",
	o: "ober",
	u: "ufat",
};

const dict2 = {
	ai: "a",
	enter: "e",
	imes: "i",
	ober: "o",
	ufat: "u",
};

function encriptar() {
	const texto = document.getElementById("texto").value;

	if (!texto) {
		alert("Ingrese algún texto");
		return;
	}

	const textoEncriptado = texto
		.split("")
		.map((letra) => dict[letra] || letra)
		.join("");

	document.getElementById("sin-mensaje").style.display = "none";
	document.getElementById("respuesta").hidden = false;
	document.getElementById("respuesta-texto").innerHTML = textoEncriptado;
}

function desencriptar() {
	var texto = document.getElementById("texto").value;
	var textoEncriptado = "";

	if (!texto) {
		alert("Ingrese algún texto");
	} else {
		for (var i = 0; i < texto.length; i++) {
			for (var j = 5; j > 1; j--) {
				var sub = texto.substr(i, j);
				if (dict2[sub]) {
					textoEncriptado += dict2[sub];
					i += j - 1;
					break;
				}
			}
			if (!dict2[sub]) {
				textoEncriptado += texto[i];
			}
		}

		document.getElementById("sin-mensaje").style.display = "none";
		document.getElementById("respuesta").hidden = false;
		document.getElementById("respuesta-texto").innerHTML = textoEncriptado;
	}
}

function copiarTexto() {
	var texto = document.getElementById("respuesta-texto");
	texto.select();
	texto.setSelectionRange(0, 99999);
	navigator.clipboard.writeText(texto.value);

	alert("Texto Copiado!");
}

function soloMinusculas(e) {
	var inputTeclado = String.fromCharCode(e.keyCode);
	var regex = /^[a-z]+$/;
	var teclaPresionada = e.keyCode;
	if (
		!regex.test(inputTeclado) &&
		teclaPresionada != 8 &&
		teclaPresionada != 32
	) {
		e.preventDefault();
	}
}
