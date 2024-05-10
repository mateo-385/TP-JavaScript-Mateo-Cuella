let cantidad = parseInt(
    prompt("Ingrese la cantidad de unidades que va a comprar")
);

let precio = parseFloat(prompt("Ingrese el precio por unidad del articulo"));

let total = cantidad * precio;

switch (true) {
    case (cantidad > 0 && cantidad < 10) && precio > 0 ||
        (total > 0 && total < 20000):
        console.log("No se cumplieron con los requisitos para el descuento");
        console.log(`Precio Final: $${total}`);
        break;

    case cantidad >= 10 && precio > 0 && total >= 20000:
        console.log("Se cumplieron los requisitos para el %15 de descuento");
        console.log(`Precio Final: $${total * 0.85}`);
        break;
    default:
        console.log("Número(s) Inválido(s)");
        break;
}
