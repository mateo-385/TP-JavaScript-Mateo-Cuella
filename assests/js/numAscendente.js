//Pido al usuario tres números y los muestro por consola
//También agrego un control en caso de que los inputs no sean números o contengan letras
let input1 = prompt("Ingrese el primer número").trim();
num1 = parseFloat(input1);

while (isNaN(num1) || input1 !== num1.toString()) {
  console.log("Ingrese un número válido");
  input1 = prompt("Ingrese el primer número");
  num1 = parseFloat(input1);
}
console.log(num1);

let input2 = prompt("Ingrese el segundo número");
num2 = parseFloat(input2);

while (isNaN(num2) || input2 !== num2.toString()) {
  console.log("Ingrese un número válido");
  input2 = prompt("Ingrese el segundo número");
  num2 = parseFloat(input2);
}
console.log(num2);

let input3 = prompt("Ingrese el tecrer número");
num3 = parseFloat(input3);

while (isNaN(num3) || input3 !== num3.toString()) {
  console.log("Ingrese un número válido");
  input3 = prompt("Ingrese el tecrer número");
  num3 = parseFloat(input3);
}
console.log(num3);

//Agrego los números dentro de un array
let numeros = [num1, num2, num3];

//Muestro por consola el array ordenado de menor a mayor con la función sort(), la cual tiene una función de comparación que se asegura de ordernar números de manera correcta y no en función al orden de caracteres de Unicode
//Lo convierto en string y separo cada número con coma y espacio con join()
console.log("Orden ascendente:", numeros.sort((a, b) => a - b).join(", "));
