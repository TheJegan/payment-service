var Organization = require('../models/organization');
var Payment = require('../models/payment');
var q = require('q');

var OrganizationController = {
  getOrganizations: function (req, res, next) {
    Organization.find({}, (err, orgs) => {
      if (!err) {
        res.status(200).send(orgs);
      } else {
        res.status(400).send(err);
      }
    });
  },
  getOrganizationsById: function (req, res, next) {
    Organization.findOne({ _id: req.params.id }, (err, orgs) => {
      if (!err) {
        res.status(200).send(orgs);
      } else {
        res.status(400).send(err);
      }
    });
  },
  getOrganizationsByName: function (req, res, next) {
    let name = req.query.name;

    Organization.findOne({ name: {$regex: name, $options: "i"} }, (err, org) => {
      if (!err) {
        res.status(200).send(org);
      } else {
        res.status(400).send(err);
      }
    });
  },
  getPayments: function (req, res, next) {
    Payment.find({ _property: req.params.id }, (err, orgs) => {
      if (!err) {
        res.status(200).send(orgs);
      } else {
        res.status(400).send(err);
      }
    })
  },
  createPayment: function (req, res, next) {
    var org = new Organization({
      name: req.body.name,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    });

    org.save((err) => {
      if (!err) {
        res.status(201).send(org);
      } else {
        res.status(500).send(err);
      }
    });
  },
  delete: function (req, res, next) {
    Organization.delete('/:id', (err, organization)=>{
        if(!err){
            res.status(200).send(organization);
        }else{
            res.status(500).send(err);
        }
    });
  }
}

module.exports = OrganizationController