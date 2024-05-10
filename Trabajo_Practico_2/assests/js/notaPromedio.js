//primer nota
let input1 = prompt("Ingrese la nota del primer trimestre")
  .replace(",", ".")
  .trim();
nota1 = parseFloat(input1);

//controles
while (
  input1 !== nota1.toString() || //si tiene letras
  !Number.isInteger(nota1) || //si no es entero
  isNaN(nota1) || // si no es un número
  nota1 < 1 ||
  nota1 > 10 //si no está entre 1 y 10
) {
  console.log("Número inválido");
  input1 = prompt("Ingrese la nota del primer trimestre")
    .replace(",", ".")
    .trim();
  nota1 = parseFloat(input1);
}

//segunda nota
let input2 = prompt("Ingrese la nota del primer trimestre")
  .replace(",", ".")
  .trim();
nota2 = parseFloat(input2);

//controles
while (
  input2 !== nota2.toString() || //si tiene letras
  !Number.isInteger(nota2) || //si no es entero
  isNaN(nota2) || // si no es un número
  nota2 < 1 ||
  nota2 > 10 //si no está entre 1 y 10
) {
  console.log("Número inválido");
  input2 = prompt("Ingrese la nota del primer trimestre")
    .replace(",", ".")
    .trim();
  nota2 = parseFloat(input2);
}

//tercer nota
let input3 = prompt("Ingrese la nota del primer trimestre")
  .replace(",", ".")
  .trim();
nota3 = parseFloat(input3);

//controles
while (
  input3 !== nota3.toString() || //si tiene letras
  !Number.isInteger(nota3) || //si no es entero
  isNaN(nota3) || // si no es un número
  nota3 < 1 ||
  nota3 > 10 //si no está entre 1 y 10
) {
  console.log("Número inválido");
  input13 = prompt("Ingrese la nota del primer trimestre")
    .replace(",", ".")
    .trim();
  nota3 = parseFloat(input3);
}

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 1 && promedio < 4) {
  console.log(promedio.toFixed(2));
  console.log("Nota Insuficiente");
} else if (promedio >= 4 && promedio < 6) {
  console.log(promedio.toFixed(2));
  console.log("Nota Regular");
} else if (promedio >= 6 && promedio < 8) {
  console.log(promedio.toFixed(2));
  console.log("Nota Buena");
} else if (promedio >= 8 && promedio < 10) {
  console.log(promedio.toFixed(2));
  console.log("Nota Muy Buena");
} else if (promedio == 10) {
  console.log(promedio.toFixed(2));
  console.log("Nota Sobresaliente");
}
