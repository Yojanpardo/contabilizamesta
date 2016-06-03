
function iniciar() {
	titulo=document.getElementById('titulo');
	mesa=document.getElementById('mesa');
	nMesa();
}

function nMesa() {
	if(mesa.value=="Mesa 1"){
		mesa=1;
		titulo.textContent="Mesa " + mesa;
	}
}