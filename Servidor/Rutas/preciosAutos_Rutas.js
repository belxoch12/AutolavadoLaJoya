const express = require('express');
const Controller = require('../Controladores/preciosAutos_Controlador'); //Cambiar Ruta al Controlador correspondiente
const Precios_Rutas = express.Router();

//Importación del Controlador
const objController = new Controller()

// === EndPoints ===

Precios_Rutas.post('/agregando_precio', objController.agregar_precio)
Precios_Rutas.get('/consultando_precio/:idAuto', objController.consultar_precio)
Precios_Rutas.get('/consultando_precios', objController.consultar_precios)
Precios_Rutas.put('/modificando_precio', objController.modificar_precio)
Precios_Rutas.delete('/eliminando_precio/:idAuto', objController.eliminar_precio)

//Agregar más rutas....

// === Fin Endpoints ===

module.exports = Precios_Rutas;