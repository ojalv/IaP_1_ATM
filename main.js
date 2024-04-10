//Entrada
let saldo = 500;
let nombreUsuario = "Pepe";
let retiro = 50;
//Proceso
if (saldo > retiro) {
  saldo = saldo - retiro;

  //Salida
  console.log(`retiro: $${retiro}`);
  console.log(`saldo: $${saldo}`);
} else if (saldo < retiro) {
  console.log(`saldo insuficiente para realizar el retiro`);
}
