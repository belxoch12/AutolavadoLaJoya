const express = require('express');
const Controller = require('../Controladores/Citas_Controlador'); //Cambiar Ruta al Controlador correspondiente
const Citas_Rutas = express.Router();

//Importación del Controlador
const objController = new Controller()

// === EndPoints ===

Citas_Rutas.post('/agregando_cita', objController.agregar_cita)
Citas_Rutas.get('/consultando_cita/:id_cita', objController.consultar_cita)
Citas_Rutas.get('/consultando_citas', objController.consultar_citas)
Citas_Rutas.put('/modificando_cita', objController.modificar_cita)
Citas_Rutas.delete('/eliminando_cita/:id_cita', objController.eliminar_cita)

module.exports = Citas_Rutas;

