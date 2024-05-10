let input1 = prompt("Ingrese la cantidad de unidades que va a comprar")
  .replace(",", ".")
  .trim();
let cantidad = parseInt(input1);

while (
  input1 !== cantidad.toString() ||
  !Number.toString(cantidad) ||
  isNaN(cantidad) ||
  cantidad < 1
) {
  console.log("Número inválido");
  input1 = prompt("Ingrese la cantidad de unidades que va a comprar")
    .replace(",", ".")
    .trim();
  cantidad = parseInt(input1);
}

let input2 = prompt("Ingrese el precio por unidad del articulo")
  .replace(",", ".")
  .trim();
let precio = parseFloat(input2);

while (input2 !== precio.toString() || isNaN(cantidad) || precio < 0) {
  console.log("Número inválido");
  input2 = prompt("Ingrese el precio por unidad del articulo")
    .replace(",", ".")
    .trim();
  precio = parseInt(input2);
}

let total = cantidad * precio;

switch (true) {
  case cantidad < 10 || total < 20000:
    console.log("No se cumplieron con los requisitos para el descuento");
    console.log(`Precio Final: $${total}`);
    break;

  case cantidad >= 10 && total >= 20000:
    console.log("Se cumplieron los requisitos para el %15 de descuento");
    console.log(`Precio Final: $${total * 0.85}`);
    break;
}
