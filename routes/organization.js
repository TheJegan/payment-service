var express = require('express');
var router = express.Router();
var OrganizationController = require('../controllers/organization');

router.get('/', OrganizationController.getOrganizations);

router.get('/:id', OrganizationController.getOrganizationsById);

router.get('/:id/payments', OrganizationController.getPayments);

router.post('/', OrganizationController.createPayment);

router.delete('/:id', OrganizationController.delete);

module.exports = router;