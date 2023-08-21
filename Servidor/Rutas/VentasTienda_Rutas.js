const express = require('express');
const Controller = require('../Controladores/VentasTienda_Controlador'); //Cambiar Ruta al Controlador correspondiente
const VentasTienda_Rutas = express.Router();

//Importación del Controlador
const objController = new Controller()

// === EndPoints ===
VentasTienda_Rutas.post('/agregando_ventaTienda', objController.agregar_ventaTienda)
VentasTienda_Rutas.get('/consultando_ventaTienda/:id_ventaTienda', objController.consultar_ventaTienda)
VentasTienda_Rutas.get('/consultar_ventaTienda', objController.consultar_ventaTienda)
VentasTienda_Rutas.put('/modificando_ventaTienda', objController.modificar_ventaTienda)
VentasTienda_Rutas.delete('/eliminando_ventaTienda/:id_ventaTienda', objController.eliminar_ventaTienda)

//Agregar más rutas....

// === Fin Endpoints ===

module.exports = VentasTienda_Rutas;