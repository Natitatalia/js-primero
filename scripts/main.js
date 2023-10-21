let titulo = document.querySelector("h1");
titulo.textContent="carajito"


let tituloh3 = document.querySelector("h2");
tituloh3.onclick = () => {
	alert( "auch no mas" );
};

imagen.onclick = () => {
	let imagen = document.querySelector("img");
	let imagenAttrSrc = imagen.getAttribute("src");
	if( imagenAttrSrc === "images/Linda.jpg" ){
		imagen.setAttribute("src", "images/Linda2.jpg");
	}else {
		imagen.setAttribute("src", "images/Linda.jpg");
	}
};


AsignarUsuario = () => {
	NombreUsuario = prompt("ingresa tu Nombre");
	LocalStorage.setItem(NombreUsuario);
	titulo.textContent = "hola "+NombreUsuario
};


let MyBoton = document.querySelector("button");
MyBoton.onclick = function () {
	AsignarUsuario ();
};