const express = require('express');
const router = express.Router();
const controller = require('../Controladores/lajoyaMain.controller')

router.get('/historial', controller.getHistorial);
router.get('/historial/:id', controller.getVenta);
router.get('/eliminar/:id', controller.eliminar);
router.get('/eliminarAL/:id', controller.eliminarAL);
router.get('/eliminarTi/:id', controller.eliminarTi);

module.exports = router;