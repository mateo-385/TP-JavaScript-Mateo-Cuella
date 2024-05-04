//Pido al usuario que ingrese un número entero
let input = prompt("Ingrese un número del 1 al 7").trim();
numero = parseFloat(input);

while (
  input !== numero.toString() ||
  numero < 1 ||
  numero > 7 ||
  !Number.isInteger(numero) ||
  isNaN(numero)
) {
  console.log("Ingrese un número válido");
  input = prompt("Ingrese un número del 1 al 7").trim();
  numero = parseFloat(input);
}
console.log(numero);

if (numero == 1) {
  console.log("Lunes");
}
if (numero == 2) {
  console.log("Martes");
}
if (numero == 3) {
  console.log("Miércoles");
}
if (numero == 4) {
  console.log("Jueves");
}
if (numero == 5) {
  console.log("Viernes");
}
if (numero == 6) {
  console.log("Sábado");
}
if (numero == 7) {
  console.log("Domingo");
}
