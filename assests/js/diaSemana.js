//Pido al usuario que ingrese un número entero
let input = prompt("Ingrese un número del 1 al 7").replace(",", ".").trim();
numero = parseFloat(input);
//Este control hace que vuelva a pedir la edad en caso de que:
while (
  input !== numero.toString() || //El input sea diferente al número convertido en string. ej: "123abc" != "123"
  numero < 1 || // Sea menor que 1
  numero > 7 || // Sea mayor que 7
  !Number.isInteger(numero) || // No sea un número entero
  isNaN(numero) // No sea un número
) {
  console.log("Ingrese un número válido");
  input = prompt("Ingrese un número del 1 al 7").trim();
  numero = parseFloat(input);
}
console.log(numero);
//Muestro por consola los dias utilizando un switch
switch (numero) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
}
