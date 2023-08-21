const express = require('express');
const Controller = require('../Controladores/InicioSesion_Controlador'); //Cambiar Ruta al Controlador correspondiente
const InicioSesion_Rutas = express.Router();

//Importación del Controlador
const objController = new Controller()

// === EndPoints ===

//InicioSesion_Rutas.post('/agregando-usuario', objController.agregar_usuario)
InicioSesion_Rutas.get('/iniciando-sesion/:usuario/:psw', objController.iniciar_sesion)
//nameRouter.put('/...', objController.fun1)
//nameRouter.delete('/...', objController.fun2)

//Agregar más rutas....

// === Fin Endpoints ===

module.exports = InicioSesion_Rutas;

