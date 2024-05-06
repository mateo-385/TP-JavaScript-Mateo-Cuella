//Pido al usuario tres números y los muestro por consola
let input1 = prompt("Ingrese el primer número").replace(",", ".").trim();
num1 = parseFloat(input1);
//Control en caso de que los inputs no sean números o contengan letras
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

//Muestro los números por consola dependiendo de su orden
if (num1 < num2) {
  if (num2 < num3) {
    console.log(`En orden ascendente: ${num1}, ${num2}, ${num3}`);
  } else {
    console.log(`En orden ascendente: ${num1}, ${num3}, ${num2}`);
  }
} else if (num2 < num1 && num2 < num3) {
  if (num1 < num3) {
    console.log(`En orden ascendente: ${num2}, ${num1}, ${num3}`);
  } else {
    console.log(`En orden ascendente: ${num2}, ${num3}, ${num1}`);
  }
} else if (num3 < num2 && num3 < num1) {
  if (num2 < num1) {
    console.log(`En orden ascendente: ${num3}, ${num2}, ${num1}`);
  } else {
    console.log(`En orden ascendente: ${num3}, ${num1}, ${num2}`);
  }
}
