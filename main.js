//Entrada
let saldo = 500;
let nombreUsuario = "Pepe";
let retiro = 50;
//Proceso
if (saldo < 0) {
  console.log(
    `ERROR: saldo invalido, el saldo no puede ser un numero negativo`
  );
} else if (isNaN(saldo)) {
  console.log(`ERROR: saldo invalido, el saldo no es un numero`);
} else if (saldo > retiro) {
  saldo = saldo - retiro;

  //Salida
  console.log(`retiro: $${retiro}`);
  console.log(`saldo: $${saldo}`);
} else if (saldo < retiro) {
  console.log(`saldo insuficiente para realizar el retiro`);
}
