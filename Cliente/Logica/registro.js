

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let user = document.getElementById("user")
let password = document.getElementById("password")
let registrarme = document.getElementById("registrarme")

registrarme.addEventListener("click",(e)=>{
    let dataFormat={
        id_usuario: "",
        nombre:nombre.value,
        apellido:apellido.value,
        usuario:user.value,
        psw:password.value,
        id_rol:1
    }
    const settings = {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(dataFormat)
    }
    fetch(`http://localhost:5000/agregando-usuario`,settings)
    .then(rest=>rest.ok?rest.json():Promise.reject(rest))
    .then(json=>{
        console.log("Se conecto con el Servidor",json)
        location.href="/Conexion/Cliente/index.html"
        //location.href="/Cliente/Vistas/Inventario.html"
    })
    .catch(error=>{
        console.log("Error con el Servidor")
    })
})