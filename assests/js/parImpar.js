let numero = prompt("Ingrese un número").replace(",", ".");

while (isNaN(numero) || numero.trim() === "") {
  console.log("Ingrese un número válido");
  numero = prompt("Ingrese un número").replace(",", ".");
}
if (numero % 2 == 0) {
  console.log("El número es par");
} else {
  console.log("El número es impar");
}
