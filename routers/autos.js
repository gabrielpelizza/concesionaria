const express = require('express');
const router = express.Router();
const autosController = require('../controllers/autosController.js');

router.get('/', autosController.autos);
router.get('/:id', autosController.autoMarca);


module.exports = router;
