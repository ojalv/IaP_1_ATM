//Entrada
let saldo = 500;
let nombreUsuario = "Pepe";
let retiro;

while (retiro == undefined || retiro <= 0 || isNaN(retiro) || retiro == "") {
  retiro = prompt("Ingrese el monto de su extraccion");
  //Proceso
  if (saldo < 0 || retiro < 0) {
    alert(`ERROR: monto negativo`);
  } else if (isNaN(saldo) || isNaN(retiro) || retiro == "") {
    alert(`ERROR: NaN`);
  } else if (retiro == 0) {
    alert(`ERROR: monto de extraccion igual a 0`);
  }
}
//Salida
if (saldo < retiro) {
  alert(`saldo insuficiente para realizar el retiro`);
} else if (saldo >= retiro) {
  saldo = saldo - retiro;
  alert(`retiro: $${retiro}\nsaldo: $${saldo}`);
}
