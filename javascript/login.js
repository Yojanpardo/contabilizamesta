

function iniciar() {
	verificarUsuario=document.getElementById("verificarUsuario");
	verificarPass=document.getElementById("verificarPass");
	usuario=document.getElementById("usuario");
	pass=document.getElementById("pass");
	usuario.addEventListener("input",validacion,false);
	pass.addEventListener("input",validacion,false);
	validacion();
	if(document.form.usuario.value == "administrador" && document.form.pass.value == "123456"){
		document.form.submit();
	}else{
		alert("Nombre o contraseña incorrectos");
	}
}

function validacion() {
	if(usuario.value==""){
		verificarUsuario.textContent="ingresa un usuario";
		usuario.setCustomValidity("Ingresa un usuario");
		usuario.style.border="2px solid red";
	}else if(pass.value==""){
		verificarUsuario.textContent="";
		usuario.setCustomValidity("");
		usuario.style.border="1px solid #FFFFFF";
		verificarPass.textContent="ingresa una contraseña";
		pass.setCustomValidity("Ingresa una contraseña");
		pass.style.border="2px solid red";
	}else{
		verificarPass.textContent="";
		pass.setCustomValidity("");
		pass.style.border="1px solid #FFFFFF";
	}
}
