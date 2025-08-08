let array = JSON.parse(localStorage.getItem("Datos")) ? JSON.parse(localStorage.getItem("Datos")) : []; 

function guardar(){
    let obtenerDatos = {
        "nombre": document.getElementById("nombre").value,
        "estado": document.getElementById("estado").value,
        "telefono": document.getElementById("telefono").value,
        "correo": document.getElementById("correo").value
    }

    console.log("Registro guardado:", obtenerDatos);

    array.push(obtenerDatos)

    localStorage.setItem("Datos", JSON.stringify(array))

    document.getElementById("nombre").value = ""
    document.getElementById("estado").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("correo").value = ""

    render()
}

function render(){
    let verDatos = document.getElementById("mostrar")
    verDatos.innerHTML=""
    array.forEach(function(elemento, index){
        verDatos.innerHTML += `
             <div>
            <table class="tabla">
                <thead class="head">
                    <th class="identificador">ID</th>
                    <th class="identificador">Nombre</th>
                    <th class="identificador">Nivel de Experiencia</th>
                    <th class="identificador">Telefono</th>
                    <th class="identificador">Correo</th>
                </thead>
                <tbody class="tbody">
                    <tr class="tr">
                        <td class="datos">${index + 1}</td>
                        <td class="datos">${elemento.nombre}</td>
                        <td class="datos">${elemento.estado}</td>
                        <td class="datos">${elemento.telefono}</td>
                        <td class="datos">${elemento.correo}</td>
                        <td class="td1" ><button class="boton1" onclick="editar(${index})">Modificar</button></td>
                        <td class="td1"><button class="boton1" onclick="borrar(${index})">Borrar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        `
    })
}


function borrar(i){
    console.log("Registro borrado:", array.splice(i, 1))
    localStorage.setItem("Datos", JSON.stringify(array))
    render()
}

function salir(e){
console.log(e)

render()
}




let indiceEditando = null; 

function editar(index){
    
    document.getElementById("nombre").value = array[index].nombre
    document.getElementById("estado").value = array[index].estado
    document.getElementById("telefono").value = array[index].telefono
    document.getElementById("correo").value = array[index].correo

    indiceEditando = index;
    mostrarBotonesEdicion(); 


}

function mostrarBotonesEdicion() {
    document.getElementById('btn-enviar').style.display = 'none';
    document.getElementById('btn-modificar').style.display = 'inline-block';
    document.getElementById('btn-salir').style.display = 'inline-block';
}

function modificar(){
    if(indiceEditando !== null){
    
        array[indiceEditando] = {
            "nombre": document.getElementById("nombre").value,
            "estado": document.getElementById("estado").value,
            "telefono": document.getElementById("telefono").value,
            "correo": document.getElementById("correo").value
        };

        console.log("Registro modificado:", array[indiceEditando]);
       
        localStorage.setItem("Datos", JSON.stringify(array));

    
        document.getElementById("nombre").value = "";
        document.getElementById("estado").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("correo").value = "";

        indiceEditando = null;
        salirEdicion(); 
        render(); 
    }
}

function salirEdicion() {
    document.getElementById('btn-enviar').style.display = 'inline-block';
    document.getElementById('btn-modificar').style.display = 'none';
    document.getElementById('btn-salir').style.display = 'none';
  
    document.getElementById("nombre").value = "";
    document.getElementById("estado").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("correo").value = "";
    indiceEditando = null;

    console.log("Registro sin modificar:", array[salirEdicion] || "No hay registro para mostrar");
}
