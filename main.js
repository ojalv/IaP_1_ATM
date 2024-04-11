//Entrada
let saldo = 500;
let nombreUsuario = "Pepe";
let retiro;

while (retiro == undefined || retiro <= 0 || isNaN(retiro) || retiro == "") {
  retiro = prompt("Ingrese el monto de su extraccion");
  //Proceso
  if (saldo < 0 || retiro < 0) {
    //ERROR: monto negativo
    alert(
      `Hola ${nombreUsuario}!\nParece que estas intentando extraer un numero negativo\nEsto no es posible, por favor ingresa un numero valido.`
    );
  } else if (isNaN(saldo) || isNaN(retiro) || retiro == "") {
    //ERROR: monto NaN
    alert(
      `Hola ${nombreUsuario}!\nParece que ingresaste un caracter por error\nEsto no es valido, por favor ingresa un numero.`
    );
  } else if (retiro == 0) {
    //ERROR:monto de extraccion igual a 0
    alert(
      `Hola ${nombreUsuario}!\nParece que estas intentando extraer $0\nEsto no es posible, por favor ingresa un monto mayor a cero.`
    );
  }
}
//Salida
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
