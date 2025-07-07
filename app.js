console.log("Hola mundo")

let array = JSON.parse(localStorage.getItem("Datos")) ? JSON.parse(localStorage.getItem("Datos")) : []; 

function guardar(){
    let obtenerDatos = {
        "nombre": document.getElementById("nombre").value,
        "correo": document.getElementById("correo").value,
        "telefono": document.getElementById("telefono").value,
        "estado": document.getElementById("estado").value
    }

    array.push(obtenerDatos)

    localStorage.setItem("Datos", JSON.stringify(array))

    document.getElementById("nombre").value = ""
    document.getElementById("correo").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("estado").value = ""

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
                    <th class="identificador">Nombre</th>
                    <th class="identificador">Correo</th>
                    <th class="identificador">Telefono</th>
                    <th class="identificador">Nivel de Experiencia</th>
                </thead>
                <tbody class="tbody">
                    <td class="datos">${elemento.nombre}</td>
                     <td class="datos">${elemento.correo}</td>
                      <td class="datos">${elemento.telefono}</td>
                       <td class="datos">${elemento.estado}</td>
                        <td class="td1" ><button class="boton1" onclick="editar(${index})">Modificar</button></td>
                         <td class="td1"><button class="boton1" onclick="borrar(${index})">Borrar</button></td>
                         <tr class="tr"></tr>
                </tbody>
            </table>
        </div>
        `
    })
}

function editar(index){
    for(i = 0; i < array.length; i++){
        if(i == index){
            document.getElementById("nombre").value = array[i].nombre
            document.getElementById("correo").value = array[i].correo
            document.getElementById("telefono").value = array[i].telefono
            document.getElementById("estado").value = array[i].estado
        }
    }
     
    let verDatos = document.getElementById("mostrar")
    verDatos.innerHTML = `
    <td><button onclick="reguardar(${i})">Modificar</button><td>
    <td><button>Salir</button><td>
    `
    
}

function reguardar(i){

     let obtenerDatos = {
        "nombre": document.getElementById("nombre").value,
        "correo": document.getElementById("correo").value,
        "telefono": document.getElementById("telefono").value,
        "estado": document.getElementById("estado").value
    }
    console.log("Datos",array.splice(i, 1))
    array[i] = obtenerDatos
    console.log(array[i])

    
    
    localStorage.setItem("Datos", JSON.stringify(array))

    document.getElementById("nombre").value = ""
    document.getElementById("correo").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("estado").value = ""

    render()

}

function borrar(position){
    array.splice(position, 1)
    localStorage.setItem("Datos", JSON.stringify(array))
    render()
}
