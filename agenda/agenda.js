var datos = [
    { id: 1, nombre: "Juan", Telefono: "555-12983" },
    { id: 2, nombre: "Maria", Telefono: "667-65432" },
    { id: 3, nombre: "Jose", Telefono: "no tiene" }
];

function mostrarDatos() {
    let tabla = document.getElementById("tabla");

    while (tabla.rows.length > 1) {
        tabla.deleteRow(-1);
    }

    datos.forEach(c => {
        let fila = tabla.insertRow(-1);
        fila.insertCell(0).innerHTML = c.id;
        fila.insertCell(1).innerHTML = c.nombre;
        fila.insertCell(2).innerHTML = c.Telefono;
    });
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("El documento ya se cargo");
    mostrarDatos();
});

function guardarDatos() {
    let edID = document.getElementById("edId");
    let edNombre = document.getElementById("edNombre");
    let edTelefono = document.getElementById("edTelefono");

    if (edID.value == "" && edNombre.value == "") {
        //let contacto = { id: edID.value, nombre: edNombre.value, telefono: edTelefono.value, }
        console.log("Debe escribir algo");
        return;
    }
    let contacto = {
        id: Number(edID.value),
        nombre: edNombre.value,
        telefono: edTelefono.value
    };
    datos.push(contacto);
    edId.value = '';
    edNombre.value = '';
    edTelefono.vale = '';
    mostrarDatos();
}

function agregarContacto(){
    let temp= datos.reduce(function (maxId, contacto){
        return (contacto.id > maxId) ? contacto.id : maxId;
    }, 0);

/*    let i = 0;
    while(i < datos.length){
        let contacto = datos[i];
        if(contacto.id > maxId){
            maxId = contacto.id;
        }
        i++;
    }*/
}