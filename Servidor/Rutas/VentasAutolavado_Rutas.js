const express = require('express');
const Controller = require('../Controladores/VentasAutolavado_Controlador'); //Cambiar Ruta al Controlador correspondiente
const VentasAutolavado_Rutas = express.Router();

//Importación del Controlador
const objController = new Controller()

// === EndPoints ===
VentasAutolavado_Rutas.post('/agregando_ventaAutolavado', objController.agregar_ventaAutolavado)
VentasAutolavado_Rutas.get('/consultando_ventaAutolavado/:id_ventasAutolavado', objController.consultar_ventaAutolavado)
VentasAutolavado_Rutas.get('/consultar_ventasAutolavados', objController.consultar_ventasAutolavados)
VentasAutolavado_Rutas.put('/modificando_ventaAutolavado', objController.modificar_ventaAutolavado)
VentasAutolavado_Rutas.delete('/eliminando_ventaAutolavado/:id_ventasAutolavado', objController.eliminar_ventaAutolavado)

//Agregar más rutas....

// === Fin Endpoints ===

module.exports = VentasAutolavado_Rutas;