const express = require('express');
const Controller = require('../Controladores/Usuario_Controller'); //Cambiar Ruta al Controlador correspondiente
const Usuario_Rutas = express.Router();

//Importación del Controlador
const objController = new Controller()

// === EndPoints ===

Usuario_Rutas.post('/agregando-usuario', objController.agregar_usuario)
Usuario_Rutas.get('/consultando-usuario/:id_usuario', objController.consultar_usuario)
Usuario_Rutas.put('/modificando-usuario', objController.modificar_usuario)
Usuario_Rutas.delete('/eliminando-usuario/:id_usuario', objController.eliminar_usuario)


//Agregar más rutas....

// === Fin Endpoints ===

module.exports = Usuario_Rutas;

