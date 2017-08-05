var Apartment = require('../models/apartment');
let ObjectID = require('mongodb').ObjectID;

var ApartmentController = {
  getApartments: (req, res, next) => {
    let organizationId = req.params.organizationId;

    Apartment.find({ _organization: organizationId }, (err, apartments) => {
      if (!err) {
        res.status(200).send(apartments);
      } else {
        res.status(550).send(err);
      }
    });
  },
  createApartment: (req, res, next) => {
    let organizationId = req.body.organizationId;
    let number = req.body.number;

    let apartment = new Apartment({
      _organization: new ObjectId(organizationId),
      number: number
    });
  }
}

module.exports = ApartmentController;