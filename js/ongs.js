// Función para validar una dirección de correo electrónico
function validarCorreoElectronico(correo) {
    // Expresión regular para validar una dirección de correo electrónico
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    return regexCorreo.test(correo);
  }
  
  // Solicitar al usuario que ingrese una dirección de correo electrónico
  var correoIngresado = prompt("Ingrese su dirección de correo electrónico, suscribirte a nuestro newsletter:");
  
  // Validar la dirección de correo electrónico ingresada
  if (validarCorreoElectronico(correoIngresado)) {
    alert("Gracias por suscribirte a nuestro newsletter, con el correo: "+ correoIngresado);
  } else {
    alert("La dirección de correo electrónico no es válida. Si deseas suscribirte más tarde, lo podés hacer al final de la página");
  }
  