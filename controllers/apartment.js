var Apartment = require('../models/apartment');
let ObjectId = require('mongodb').ObjectID;

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
    let organizationId = req.params.organizationId;
    let number = req.body.number;

    let apartment = new Apartment({
      _organization: new ObjectId(organizationId),
      number: number
    });

    apartment.save(err => {
      if (!err) {
        res.status(200).send(apartment);
      }else{
        res.status(400).send(err);
      }
    });
  }
}

module.exports = ApartmentController;