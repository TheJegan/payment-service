var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var PaymentController = require('../controllers/payment');

router.get('/', PaymentController.getAll);

router.get('/:id', PaymentController.getById);

router.post('/', PaymentController.create);

router.delete('/:id', corsSolution, PaymentController.delete);

module.exports = router;
