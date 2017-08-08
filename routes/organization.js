var express = require('express');
var router = express.Router();
var OrganizationController = require('../controllers/organization');
var ApartmentController = require('../controllers/apartment');

let corsSolution = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
}

router.options('/', corsSolution, (req, res, next) => {
  next();
});

router.options('/:id', corsSolution, (req, res, next) => {
  next();
});

router.options('/:organizationId/apartments', corsSolution, (req, res, next) => {
  next();
});

router.get('/', corsSolution, OrganizationController.getOrganizations);

router.get('/search', corsSolution, OrganizationController.getOrganizationsByName);

router.get('/:id', corsSolution, OrganizationController.getOrganizationsById);

router.get('/:id/payments', corsSolution, OrganizationController.getPayments);

router.get('/:organizationId/apartments', corsSolution, ApartmentController.getApartments);

router.post('/', corsSolution, OrganizationController.createPayment);

router.post('/:organizationId/apartments', corsSolution, ApartmentController.createApartment);

router.delete('/:id', corsSolution, OrganizationController.delete);

module.exports = router;