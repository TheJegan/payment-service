var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var payment = require('../model/payment');

let corsSolution = (req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype,origin, content-type, accept, authorization'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
}

router.get('/', (req, res, next) => {
	res.send('payment');
});


router.options('/:id', corsSolution, (req, res, next) => {
  next();
});

router.get('/:id', corsSolution, (req, res, next) => {
  res.send({
    _id: 1,
    userId: 40,
    propertyId: 9,
    amount: 250
  });
});

router.post('/', (req, res, next) => {
	res.send(req.body);
});

module.exports = router;
