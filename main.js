function validarOperacion(nombreUsuario, monto, tipo = "retiro") {
  //Esta funcion valida que el dato ingresado sea un numero positivo, en caso contrario le informa al usuario el tipo de error
  while (monto == undefined || monto <= 0 || isNaN(monto) || monto == "") {
    monto = prompt(
      `Ingrese el monto que desee ${tipo == "retiro" ? "extraer" : ""}${tipo == "ingreso" ? "agregar" : ""
      } a su cuenta`
    );
    if (saldo < 0 || monto < 0) {
      //ERROR: monto negativo
      alert(
        `Hola ${nombreUsuario}!\nParece que estas intentando ${tipo == "retiro" ? "extraer" : ""
        }${tipo == "ingreso" ? "ingresar" : ""
        } un monto negativo\nEsto no es posible, por favor ingresa un monto valido.`
      );
    } else if (isNaN(saldo) || isNaN(monto)) {
      //ERROR: monto NaN
      alert(
        `Hola ${nombreUsuario}!\nParece que ingresaste un caracter por error\nEsto no es valido, por favor ingresa un numero.`
      );
    } else if (monto == "") {
      //ERROR: monto vacio
      alert(
        `Hola ${nombreUsuario}!\nParece que no ingresaste nada para ${tipo == "retiro" ? "extraer" : ""
        }${tipo == "ingreso" ? "ingresar" : ""
        }\nEsto no es valido, por favor ingresa un monto valido.`
      );
    } else if (monto == 0) {
      //ERROR:monto de extraccion igual a 0
      alert(
        `Hola ${nombreUsuario}!\nParece que estas intentando ${tipo == "retiro" ? "extraer" : ""
        }${tipo == "ingreso" ? "ingresar" : ""
        } $0\nEsto no es posible, por favor ingresa un monto mayor a cero.`
      );
    }
  }
  return parseFloat(monto);
}

function realizarOperacion(saldo, monto, operacion = "retiro") {
  if (operacion == "retiro") {
    if (saldo < monto) {
      alert(
        `Extraccion incompleta\nUsted no posee saldo suficiente para realizar el retiro de $${monto} de su cuenta\nUsted tiene $${saldo} disponibles en su cuenta`
      );
    } else if (saldo >= monto) {
      saldo = saldo - monto;
      alert(
        `Extraccion exitosa!\nUsted acaba de retirar $${monto} de su cuenta\nLe quedan $${saldo} disponibles para seguir operando`
      );
    }
  } else if (operacion == "ingreso") {
    if (saldo + monto < 1000000) {
      saldo = saldo + monto;
      alert(
        `Ingreso exitoso!\nUsted acaba de ingresar $${monto} a su cuenta\nLe quedan $${saldo} disponibles para seguir operando`
      );
    }
    if (saldo + monto > 1000000) {
      alert(
        `Ingreso incompleto\nUsted no puede ingresar $${monto} porque el total del balance supera el limite de su cuenta`
      );
    }
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

function atmApp(saldo, nombreUsuario, retiro = undefined, ingreso = undefined) {
  //Proceso
  let seleccion;
  let salir = false;
  while (salir == false) {
    seleccion = menuOpciones(nombreUsuario, seleccion, "principal");
    if (seleccion == 1) {
      // hacer extraccion de dinero
      retiro = validarOperacion(nombreUsuario, retiro); //validacion de datos
      saldo = realizarOperacion(saldo, retiro, (operacion = "retiro")); //Salida

      seleccion = undefined; // Reseteo de variable asociada
      seleccion = menuOpciones(nombreUsuario, seleccion, "salir"); // Salir de la app?
      if (seleccion == 2) {
        salir = true;
      }
      seleccion = undefined; // Reseteo de variable asociada
    } else if (seleccion == 2) {
      // hacer ingreso de dinero
      ingreso = validarOperacion(nombreUsuario, ingreso, "ingreso"); //validacion de datos
      saldo = realizarOperacion(saldo, ingreso, "ingreso"); //Salida
      seleccion = undefined; // Reseteo de variable asociada
      seleccion = menuOpciones(nombreUsuario, seleccion, "salir"); // Salir de la app?
      if (seleccion == 2) {
        salir = true;
      }
      seleccion = undefined; // Reseteo de variable asociada
    } else if (seleccion == 3) {
      // ver balance de la cuenta
      alert(`Balance
      Cuenta ${nombreUsuario}: $${saldo}`);
      seleccion = undefined;
    } else if (seleccion == 4) {
      alert("Historial de operaciones");
      seleccion = undefined
    } else if (seleccion == 5) {
      salir = true;
    }
    retiro = undefined; // Reseteo de variable asociada
    ingreso = undefined; // Reseteo de variable asociada
  }
}
//Entrada
let saldo = 500;
let nombreUsuario = "Pepe";

atmApp(saldo, nombreUsuario);
