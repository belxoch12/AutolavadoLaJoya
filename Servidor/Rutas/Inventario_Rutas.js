const express = require('express');
const Controller = require('../Controladores/Inventario_Controlador'); //Cambiar Ruta al Controlador correspondiente
const Inventario_Rutas = express.Router();

//Importación del Controlador
const objController = new Controller()

// === EndPoints ===

Inventario_Rutas.post('/agregando_producto', objController.agregar_producto)
Inventario_Rutas.get('/consultando_producto/:id_inventario', objController.consultar_producto)
Inventario_Rutas.get('/consultando_productos', objController.consultar_productos)
Inventario_Rutas.put('/modificando_producto', objController.modificar_producto)
Inventario_Rutas.delete('/eliminando_producto/:id_inventario', objController.eliminar_producto)

//Agregar más rutas....

// === Fin Endpoints ===

module.exports = Inventario_Rutas;