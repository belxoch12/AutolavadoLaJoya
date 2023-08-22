let registrotienda = document.getElementById("registrotienda")
let registroAutolavado = document.getElementById("registroAutolavado")
let citas = document.getElementById("citas")
let historialVentas = document.getElementById("historialVentas")
let inventario = document.getElementById("inventario")
let cerrarsesion = document.getElementById("cerrarsesion")


registrotienda.addEventListener("click", (e)=>{
    location.href="/Cliente/Vistas/VentasTienda.html"
})

registroAutolavado.addEventListener("click", (e)=>{
    location.href="/Cliente/Vistas/VentasAutolavado.html"
})

citas.addEventListener("click", (e)=>{
    location.href="/Cliente/Vistas/cita.html"
})

historialVentas.addEventListener("click", (e)=>{
    location.href="/Cliente/Vistas/historial.html"
})

inventario.addEventListener("click", (e)=>{
    location.href="/Cliente/Vistas/Inventario.html"
})

precios.addEventListener("click", (e)=>{
    location.href="/Cliente/Vistas/preciosAutos.html"
})

cerrarsesion.addEventListener("click", (e)=>{
    location.href="/Cliente/index.html"
})