//Entrada
let saldo = 500;
let nombreUsuario = "Pepe";
let retiro = prompt("Ingrese el monto de su extraccion");
//Proceso
if (saldo < 0 || retiro < 0) {
  console.log(`ERROR: monto negativo`);
} else if (isNaN(saldo) || isNaN(retiro)) {
  console.log(`ERROR: NaN`);
  //Salida
} else if (saldo < retiro) {
  alert(`saldo insuficiente para realizar el retiro`);
} else if (saldo > retiro) {
  saldo = saldo - retiro;
  alert(`retiro: $${retiro}\nsaldo: $${saldo}`);
}
