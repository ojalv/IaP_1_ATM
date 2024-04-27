function montoEntrada(nombreUsuario, monto, tipo = "retiro") {
  //Esta funcion valida que el dato ingresado sea un numero positivo, en caso contrario le informa al usuario el tipo de error
  do {
    monto = prompt(
      `Ingrese el monto que desee ${tipo == "retiro" ? "extraer" : ""}${
        tipo == "ingreso" ? "agregar" : ""
      } a su cuenta`
    );

    switch (monto) {
      case monto < 0: //ERROR: monto negativo
        alert(
          `Hola ${nombreUsuario}!\nParece que estas intentando ${
            tipo == "retiro" ? "extraer" : ""
          }${
            tipo == "ingreso" ? "ingresar" : ""
          } un monto negativo\nEsto no es posible, por favor ingresa un monto valido.`
        );
        break;

      case isNaN(monto): //ERROR: monto NaN
        alert(
          `Hola ${nombreUsuario}!\nParece que ingresaste un caracter por error\nEsto no es valido, por favor ingresa un numero.`
        );
        break;

      case monto == "": //ERROR: monto vacio
        alert(
          `Hola ${nombreUsuario}!\nParece que no ingresaste nada para ${
            tipo == "retiro" ? "extraer" : ""
          }${
            tipo == "ingreso" ? "ingresar" : ""
          }\nEsto no es valido, por favor ingresa un monto valido.`
        );
        break;

      case monto == 0: //ERROR:monto de extraccion igual a 0
        alert(
          `Hola ${nombreUsuario}!\nParece que estas intentando ${
            tipo == "retiro" ? "extraer" : ""
          }${
            tipo == "ingreso" ? "ingresar" : ""
          } $0\nEsto no es posible, por favor ingresa un monto mayor a cero.`
        );
        break;
      default:
        break;
    }
  } while (monto == undefined || monto <= 0 || isNaN(monto) || monto == "");
  return parseFloat(monto);
}
function operacionValida(saldo, monto, limite = 100000, operacion = "retiro") {
  switch (operacion) {
    case "retiro": // retiro valido?
      if (monto > saldo) {
        return false;
      } else if (monto <= saldo) {
        return true;
      }
      break;

    case "ingreso": // ingreso valido
      if (saldo + monto > limite) {
        return false;
      } else if (saldo + monto <= limite) {
        return true;
      }
      break;

    default:
      break;
  }
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

function atmApp(saldo, nombreUsuario) {
  //Proceso
  let seleccion;
  let monto;
  let salir = false;

  do {
    seleccion = menuOpciones(nombreUsuario, seleccion, "principal");
    switch (seleccion) {
      case 1: // retiro de dinero
        monto = montoEntrada(nombreUsuario, monto);
        switch (operacionValida(saldo, monto, 100000, "retiro")) {
          case true:
            saldo = saldo - monto;
            alert(
              `Extraccion exitosa!\nUsted acaba de retirar $${monto} de su cuenta\nLe quedan $${saldo} disponibles para seguir operando`
            );
            break;

          case false:
            alert(
              `Extraccion incompleta\nUsted no posee saldo suficiente para realizar el retiro de $${monto} de su cuenta\nUsted tiene $${saldo} disponibles en su cuenta`
            );

          default:
            break;
        }

        seleccion = undefined; // Reseteo de variable asociada
        seleccion = menuOpciones(nombreUsuario, seleccion, "salir"); // Salir de la app?
        if (seleccion == 2) {
          salir = true;
        }
        seleccion = undefined; // Reseteo de variable asociada

        break;
      case 2: // ingreso de dinero
        monto = montoEntrada(nombreUsuario, monto, "ingreso"); //validacion de datos
        switch (operacionValida(saldo, monto, 100000, "ingreso")) {
          case true:
            saldo = saldo + monto;
            alert(
              `Ingreso exitoso!\nUsted acaba de ingresar $${monto} a su cuenta\nLe quedan $${saldo} disponibles para seguir operando`
            );
            break;

          case false:
            alert(
              `Ingreso incompleto\nUsted no puede ingresar $${monto} porque el total del balance supera el limite de su cuenta`
            );

          default:
            break;
        }

        seleccion = undefined; // Reseteo de variable asociada
        seleccion = menuOpciones(nombreUsuario, seleccion, "salir"); // Salir de la app?
        if (seleccion == 2) {
          salir = true;
        }
        seleccion = undefined; // Reseteo de variable asociada
        break;
      case 3: // ver balance de la cuenta
        alert(`Balance Cuenta ${nombreUsuario}: $${saldo}`);
        seleccion = undefined;
        break;

      case 4: // ver historial de operaciones
        alert("Historial de operaciones");
        seleccion = undefined;
        break;
      case 5: // salir de la aplicacion
        salir = true;
        break;

      default:
        break;
    }
  } while (salir == false);
}
//Entrada
let saldo = 500;
let nombreUsuario = "Pepe";

atmApp(saldo, nombreUsuario);
