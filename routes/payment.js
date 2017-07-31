var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var PaymentController = require('../controllers/payment');

let corsSolution = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
}

router.option('*', corsSolution, (req, res, next) => {
  next();
});

router.get('/', corsSolution, PaymentController.getAll);

router.get('/:id', corsSolution, PaymentController.getById);

router.post('/', corsSolution, PaymentController.create);

router.delete('/:id', corsSolution, PaymentController.delete);

module.exports = router;
