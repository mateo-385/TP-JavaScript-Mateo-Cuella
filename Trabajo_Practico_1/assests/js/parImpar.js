// Pido al usuario un numero y lo convierto a decimal, en caso de tener comas, las reemplaza por puntos
let input = prompt("Ingrese un número").replace(",", ".").trim();
let numero = parseFloat(input);

//Control que repite el prompt en caso de que el input sea diferente al número convertido en string. ej: "123abc" != "123" o no sea un número
while (isNaN(numero) || input !== numero.toString()) {
  console.log("Ingrese un número válido");
  input = prompt("Ingrese un número").replace(",", ".");
  numero = parseFloat(input);
}
//Muestra el número ingresado y devuelve un mensaje diciendo si es par o impar dependiendo de si el resto es 0 o no
console.log(numero);
if (numero % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
