let titulo = document.querySelector("h1");
titulo.textContent="carajito"


let tituloh3 = document.querySelector("h2");
tituloh3.onclick = () => {
	alert( "auch no mas" );
};

let imagen = document.querySelector("img");
imagen.onclick = () => {
	let imagenAttrSrc = imagen.getAttribute("src");
	if( imagenAttrSrc === "images/Linda.png" ){
		imagen.setAttribute("images/Linda2.jpg")
	}else {
		imagen.setAttribute("images/Linda.jpg")
	}
}