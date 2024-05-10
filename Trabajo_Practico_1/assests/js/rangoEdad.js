// Pido al usuario un numero y lo convierto a decimal, en caso de tener comas, las reemplaza por puntos y borra los espacios
let input = prompt("Ingrese su edad").replace(",", ".").trim();
let edad = parseFloat(input);

//Este control hace que vuelva a pedir la edad en caso de que:
while (
  input !== edad.toString() || //El input sea diferente al número convertido en string. ej: "123abc" != "123"
  edad < 0 || // El número sea menor que 0
  !Number.isInteger(edad) || // El número no es un entero
  isNaN(edad) // El input no es un número
) {
  console.log("Ingrese una edad válida");
  input = prompt("Ingrese su edad").replace(",", ".");
  edad = parseFloat(input);
}

// Muestra por consola los resultados de las operaciones
console.log(edad);
if (edad >= 0 && edad <= 12) {
  console.log("Usted es un niño");
} else if (edad >= 13 && edad <= 19) {
  console.log("Usted es un adolecente");
} else if (edad >= 20 && edad <= 59) {
  console.log("Usted es un adulto");
} else if (edad >= 60) {
  console.log("Usted es un adulto mayor");
}
