//funcion para controlar que el nombre no contenga caracteres especiales ni espacios
function control(nombreTarea) {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(nombreTarea);
}
// funcion para agregar tareas
function agregarTarea(nombreTarea) {
    //si el nombre no contiene espacios ni caracteres especiales o no existe en la lista, se agrega
    if (control(nombreTarea)) {
        if (!tareas.includes(nombreTarea)) {
            tareas.push(nombreTarea);
        } else {
            window.alert("La tarea ya existe en la lista.");
        }
    } else {
        window.alert(
            "Ingrese un nombre válido (sin caracteres especiales ni espacios)"
        );
    }
}
// funcion para listar tareas
function listarTareas() {
    // se vacia la variable lista para luego agregar las tareas
    lista = "";
    for (i = 0; i < tareas.length; i++) {
        // si es la ultima tarea se agrega un punto al final, sino se agrega una coma
        if (i == tareas.length - 1) {
            lista += tareas[i] + ".";
        } else {
            lista += tareas[i] + ", ";
        }
    }
}
// funcion para editar tareas
function editarTarea(nombreTarea) {
    // si la tarea existe y pasa por el control, se edita por la variable nuevoNombre, la cual también se valida
    if (tareas.includes(nombreTarea)) {
        if (control(nombreTarea)) {
            let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea");
            if (control(nuevoNombre)) {
                if (!tareas.includes(nuevoNombre)) {
                    tareas.splice(tareas.indexOf(nombreTarea), 1, nuevoNombre);
                    window.alert(
                        `¡Tarea editada con éxito!\n${nombreTarea} -> ${nuevoNombre}`
                    );
                } else {
                    window.alert("La tarea ya existe en la lista.");
                }
            } else {
                window.alert(
                    "Ingrese un nombre válido (sin caracteres especiales ni espacios)"
                );
            }
        } else {
            window.alert(
                "Ingrese un nombre válido (sin caracteres especiales ni espacios)"
            );
        }
    } else {
        window.alert("Ingrese un nombre válido");
    }
}
// funcion para eliminar tareas
function eliminarTarea(nombreTarea) {
    if (tareas.includes(nombreTarea)) {
        tareas.splice(tareas.indexOf(nombreTarea), 1);
        window.alert(`¡Tarea eliminada con éxito!\n->${nombreTarea}`);
    } else {
        window.alert("Ingrese un nombre válido");
    }
}
// declaracion de variables
let c = 1;
let num;
let tareas = [];
let lista = "";
// bucle para el menu
while (c !== 0) {
    num = parseInt(
        prompt(`¡Bienvenido! Elija la tarea a realizar:
    1 - Agregar Tarea
    2 - Listar Tareas
    3 - Editar Tarea
    4 - Eliminar Tarea
    5 - Salir`)
    );


    // switch para las opciones del menu
    switch (num) {
        case 1:
            agregarTarea(prompt("Ingresa el nombre de la tarea"));
            break;
        case 2:
            if (tareas.length === 0) {
                window.alert("No hay tareas");
            } else {
                listarTareas();
                window.alert(`Tareas: ${lista}`);
            }
            break;
        case 3:
            // si el array esta vacio se le avisa al usuario
            if (tareas.length === 0) {
                window.alert("No hay tareas");
                break;
            } else {
                // se actualiza la variable lista para luego mostrar las tareas
                listarTareas();
                editarTarea(
                    prompt(`Ingrese el nombre de la tarea a editar
                    Tareas: ${lista}`)
                );
                break;
            }
        case 4:
            // si el array esta vacio se le avisa al usuario
            if (tareas.length === 0) {
                window.alert("No hay tareas");
                break;
            } else {
                // se actualiza la variable lista para luego mostrar las tareas
                listarTareas();
                eliminarTarea(
                    prompt(`Ingrese el nombre de la tarea a eliminar
                    Tareas: ${lista}`)
                );
                break;
            }
        case 5:
            c = 0;
            break;
        default:
            window.alert("Ingrese un valor del 1 al 5");
    }
}
window.alert("Gracias por usar el programa. ¡Adios!");
