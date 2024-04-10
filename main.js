//Entrada
let saldo = 500;
let nombreUsuario = "Pepe";
let retiro = 50;
//Proceso
if (saldo < 0 || retiro < 0) {
  console.log(`ERROR: monto negativo`);
} else if (isNaN(saldo) || isNaN(retiro)) {
  console.log(`ERROR: NaN`);
} else if (saldo < retiro) {
  console.log(`saldo insuficiente para realizar el retiro`);
} else if (saldo > retiro) {
  saldo = saldo - retiro;
  //Salida
  console.log(`retiro: $${retiro}`);
  console.log(`saldo: $${saldo}`);
}
