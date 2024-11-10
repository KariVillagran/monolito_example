const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');

// Ruta para obtener datos, personalizando la respuesta según el cliente
router.get('/', dataController.getData);

module.exports = router;