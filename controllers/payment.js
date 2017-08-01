let Payment = require('../models/payment');
let ObjectID = require('mongodb').ObjectID;

var PaymentController = {
  create: (req, res, next) => {
    var pay = new Payment({
      _user: new ObjectID(req.body._user),
      _property: new ObjectID(req.body._property),
      amount: req.body.amount
    });

    pay.save(err => {
      if (!err) {
        console.log(pay)
        res.status(200).send(pay);
      } else {
        res.status(500).send(err);
      }
    });
  },
  getById: (req, res, next) => {
    console.log('getting payments ' + req.params.id);
    Payment.findOne({ _id: req.params.id }, (err, payment) => {
      if (!err) {
        console.log(payment)
        res.status(200).send(payment)
      } else {
        console.log(err);
        res.status(500).send(err);
      }
    })
  },
  getAll: (req, res, next) => {
    console.log('getting payments')
    Payment.find({}, (err, payment) => {
      if (!err) {
        console.log('get payments');
        res.status(200).send(payment)
      } else {
        console.log(err);
        res.status(500).send(err);
      }
    })
  },
  delete: (req, res, next) => {
    Payment.delete({ _id: req.params.id }, (err, pay) => {
      if (!err) {
        res.status(200).send(pay)
      } else {
        console.log(err);
        res.status(500).send(err);
      }
    });
  }
}

module.exports = PaymentController;