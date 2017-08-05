var express = require('express');
var router = express.Router();
var apartmentController = require('../controllers/apartment');

let corsSolution = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
}

router.get('/:organizationId', corsSolution, apartmentController.getApartments);

router.post('/', corsSolution, apartmentController.createApartment);

module.exports = router;