let edad = parseFloat(prompt("Ingrese su edad").replace(",", "."));

while (edad < 0 || Number.isInteger(edad) == false || isNaN(edad)) {
  console.log("Ingrese una edad válida");
  edad = parseFloat(prompt("Ingrese su edad").replace(",", "."));
}
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
