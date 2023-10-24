let titulo = document.querySelector("h1");
titulo.textContent="carajito"


let tituloh3 = document.querySelector("h2");
tituloh3.onclick = () => {
	alert( "auch no mas" );
};

let imagen = document.querySelector("img");
imagen.onclick = () => {
	let imagenAttrSrc = imagen.getAttribute("src");
	if( imagenAttrSrc === "images/Linda.jpg" ){
		imagen.setAttribute("src", "images/Linda2.jpg");
	}else {
		imagen.setAttribute("src", "images/Linda.jpg");
	}
};


AsignarUsuario = () => {
	NombreUsuario = prompt("ingresa tu Nombre");
	localStorage.setItem("nombre", NombreUsuario);
	titulo.textContent = "hola "+localStorage.getItem("nombre");
	document.getElementById("nombreUsu").textContent = "hola "+localStorage.getItem("nombre");
};


if(localStorage.getItem("nombre")){
	titulo.textContent = "hola "+localStorage.getItem("nombre");
	document.getElementById("nombreUsu").textContent = "hola "+localStorage.getItem("nombre");
}else{
	AsignarUsuario ();
};

let MyBoton = document.querySelector("button");
MyBoton.onclick = function () {
	AsignarUsuario ();
};

let MyOtroBoton = document.getElementById("btn-borrar");
MyOtroBoton.onclick = () => {
	localStorage.clear();
	titulo.textContent ="hola ingresa";
	document.getElementById("nombreUsu").innerHTML = "holas Conectate";
}

let mybotonConectar = document.getElementById("btn-iniciarSesion");
mybotonConectar.onclick = () => {
	sessionStorage.setItem = ("nombre", "sesion iniciada")
	document.getElementById(sessionTag) = sessionStorage.getItem("nombre")
}