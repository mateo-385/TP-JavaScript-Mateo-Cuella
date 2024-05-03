// Pido al usuario un numero y lo convierto a decimal, en caso de tener comas, las reemplaza por puntos
let input = prompt("Ingrese su edad").replace(",", ".");
let edad = parseFloat(input);

/*
Este control hace que vuelva a pedir la edad en caso de que:
- Al convertir el input en número estos dos valores sean diferentes, entonces si el usuario pone "15a", parseFloat lo convierte a "15", pero al ser diferente que el input original, da error. Esto también sirve si el usuario pone espacios
- La edad es negativa
- La edad no es un numero entero
- La edad no es un número
*/

while (
  input !== edad.toString() ||
  edad < 0 ||
  !Number.isInteger(edad) ||
  isNaN(edad)
) {
  console.log("Ingrese una edad válida");
  input = prompt("Ingrese su edad").replace(",", ".");
  edad = parseFloat(input);
}

// Muestra por consola los resultados de las operaciones
console.log(edad);
if (edad >= 0 && edad <= 12) {
  console.log("Usted es un niño");
}
if (edad >= 13 && edad <= 19) {
  console.log("Usted es un adolecente");
}
if (edad >= 20 && edad <= 59) {
  console.log("Usted es un adulto");
}
if (edad >= 60) {
  console.log("Usted es un adulto mayor");
}
