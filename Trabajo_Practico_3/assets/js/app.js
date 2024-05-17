function agregarTarea(nombreTarea) {
    tareas.push(nombreTarea);
}
function listarTareas() {
    let lista = "";
    for (i = 0; i < tareas.length; i++) {
        if (i == (tareas.length - 1)) {
            lista += tareas[i] + ".";
        } else {
            lista += tareas[i] + ", ";
        }
    }
    window.alert(`Tareas: ${lista}`)
}
function editarTarea(nombreTarea) {
    let existe = tareas.includes(nombreTarea)
    if (existe == true) {
        tareas.splice(tareas.indexOf(nombreTarea), 1, prompt("Ingrese el nuevo nombre de la tarea"))
    } else {
        window.alert("Ingrese un nombre válido")
    }
}
function eliminarTarea(nombreTarea) {
    let existe = tareas.includes(nombreTarea)
    if (existe == true) {
        tareas.splice(tareas.indexOf(nombreTarea), 1)
    } else {
        window.alert("Ingrese un nombre válido")
    }
}
let num
let c = 1
let tareas = []
while (c != 0) {
    num = parseInt(prompt(`Bienvenido! Eliga la tarea a realizar:
    1 - Agregar Tarea
    2 - Listar Tareas
    3 - Editar Tarea
    4 - Eliminar Tarea
    5 - Salir`))
    switch (num) {
        case 1:
            agregarTarea(prompt("Ingresa el nombre de la tarea"))
            break;
        case 2:
            listarTareas();
            break;
        case 3:
            editarTarea(prompt("Ingrese el nombre de la tarea a editar"));
            break;
        case 4:
            eliminarTarea(prompt("Ingrese el nombre de la tarea a eliminar"))
            break;
        case 5:
            c = 0;
            break;
        default:
            window.alert("Ingrese un valor correcto")
    }
}
window.alert("Adios!")