const express = require('express');
const router = express.Router();
const ControllerList = require('./../controllers/ControllerL');
const controlador = new ControllerList;

router.get('/', controlador.getList);
router.get('/:id', controlador.getTarefa);
router.post('/add', controlador.postTarefa);
router.delete('/delete/:id', controlador.deletarTarefa);
router.put('/:id', controlador.putTarefa);

module.exports = router;