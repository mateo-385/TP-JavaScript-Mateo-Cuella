let nota1 = parseInt(prompt("Ingrese la nota del primer trimestre"));

let nota2 = parseInt(prompt("Ingrese la nota del segundo trimestre"));

let nota3 = parseInt(prompt("Ingrese la nota del tercer trimestre"));

if (
  isNaN(nota1) ||
  isNaN(nota2) ||
  isNaN(nota3) ||
  nota1 < 1 ||
  nota1 > 10 ||
  nota2 < 1 ||
  nota2 > 10 ||
  nota3 < 1 ||
  nota3 > 10
) {
  console.log("Número(s) Inválido(s) - Recargue la página");
} else {
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
}
