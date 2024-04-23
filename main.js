function validarRetiro(nombreUsuario, retiro) {
  //Esta funcion valida que el dato ingresado sea un numero positivo, en caso contrario le informa al usuario el tipo de error
  while (retiro == undefined || retiro <= 0 || isNaN(retiro) || retiro == "") {
    retiro = prompt("Ingrese el monto de su extraccion");
    if (saldo < 0 || retiro < 0) {
      //ERROR: monto negativo
      alert(
        `Hola ${nombreUsuario}!\nParece que estas intentando extraer un monto negativo\nEsto no es posible, por favor ingresa un monto valido.`
      );
    } else if (isNaN(saldo) || isNaN(retiro)) {
      //ERROR: monto NaN
      alert(
        `Hola ${nombreUsuario}!\nParece que ingresaste un caracter por error\nEsto no es valido, por favor ingresa un monto valido.`
      );
    } else if (retiro == "") {
      //ERROR: monto vacio
      alert(
        `Hola ${nombreUsuario}!\nParece que no ingresaste nada para retirar\nEsto no es valido, por favor ingresa un monto valido.`
      );
    } else if (retiro == 0) {
      //ERROR:monto de extraccion igual a 0
      alert(
        `Hola ${nombreUsuario}!\nParece que estas intentando extraer $0\nEsto no es posible, por favor ingresa un monto mayor a cero.`
      );
    }
  }
  return parseFloat(retiro);
}

function hacerRetiro(saldo, retiro) {
  if (saldo < retiro) {
    alert(
      `Extraccion incompleta\nUsted no posee saldo suficiente para realizar el retiro de $${retiro} de su cuenta\nUsted tiene $${saldo} disponibles en su cuenta`
    );
  } else if (saldo >= retiro) {
    saldo = saldo - retiro;
    alert(
      `Extraccion exitosa!\nUsted acaba de retirar $${retiro} de su cuenta\nLe quedan $${saldo} disponibles en su cuenta para seguir operando`
    );
  }
  return saldo;
}

function menuOpciones(nombreUsuario, seleccion, tipoMenu = "principal") {
  if (tipoMenu == "principal") {
    while (
      seleccion == undefined ||
      (seleccion != 1 &&
        seleccion != 2 &&
        seleccion != 3 &&
        seleccion != 4 &&
        seleccion != 5)
    ) {
      seleccion = parseFloat(
        prompt(
          `Hola ${nombreUsuario}! Bienvenido a Atm Fake App
            1. hacer extraccion de dinero
            2. hacer ingreso de dinero
            3. ver balance de la cuenta
            4. ver movimientos
            5. salir`
        )
      );
    }
  } else if (tipoMenu == "salir") {
    while (seleccion == undefined || (seleccion != 1 && seleccion != 2)) {
      seleccion = parseFloat(
        prompt(
          `${nombreUsuario}, deseas realizar otra operacion?
        1. si
        2. no`
        )
      );
    }
  }
  return seleccion;
}

function atmApp(saldo, nombreUsuario, retiro) {
  //Proceso
  let seleccion;
  let salir = false;
  while (salir == false) {
    seleccion = menuOpciones(nombreUsuario, seleccion, "principal");
    if (seleccion == 1) {
      retiro = validarRetiro(nombreUsuario, retiro);
      saldo = hacerRetiro(saldo, retiro); //Salida
      retiro = undefined;
      seleccion = undefined;
      seleccion = menuOpciones(nombreUsuario, seleccion, "salir");
      if (seleccion == 2) {
        salir = true;
      }
      seleccion = undefined;
    } else if (seleccion == 2) {
      alert("seleccion 2");
    } else if (seleccion == 3) {
      alert("seleccion 3");
    } else if (seleccion == 4) {
      alert("seleccion 4");
    } else if (seleccion == 5) {
      alert("seleccion 5");
    }
  }
}
//Entrada
let saldo = 500;
let nombreUsuario = "Pepe";
let retiro;

atmApp(saldo, nombreUsuario, retiro);
