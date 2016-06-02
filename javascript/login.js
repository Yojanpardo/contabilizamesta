

function iniciar() {
	usuario=document.getElementById("usuario");
	pass=document.getElementById("pass");
	usuario.addEventListener("input",validacion,false);
	pass.addEventListener("input",validacion,false);
	validacion();
	direccionar();

}

function validacion() {
	if(usuario.value==""){
		usuario.setCustomValidity("Ingresa un usuario");
		usuario.style.background="#FFDDDD";
	}else{
		usuario.setCustomValidity("");
		usuario.style.background="#FFFFFF";
	}
	if(pass.value==""){
		pass.setCustomValidity("Ingresa una contraseña");
		pass.style.background="#FFDDDD";
	}else{
		pass.setCustomValidity("");
		pass.style.background="#FFFFFF";
	}
}

function direccionar() {
	if(usuario.value!="" &&  pass.value!=""){
	window.location ="dashboard.html"; 
	}
	
}
