var express = require('express');
var router = express.Router();
var OrganizationController = require('../controllers/organization');
let corsSolution = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
}

router.get('/', corsSolution ,OrganizationController.getOrganizations);

router.get('/:id', corsSolution, OrganizationController.getOrganizationsById);

router.get('/:id/payments', corsSolution, OrganizationController.getPayments);

router.post('/', corsSolution, OrganizationController.createPayment);

router.delete('/:id', corsSolution, OrganizationController.delete);

module.exports = router;