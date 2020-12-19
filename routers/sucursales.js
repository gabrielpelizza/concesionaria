const express = require('express');
const router = express.Router();
const sucursalesController = require('../controllers/sucursalesController.js');

router.get('/', sucursalesController.sucursales);
router.get('/:id', sucursalesController.sucursal);

module.exports = router;