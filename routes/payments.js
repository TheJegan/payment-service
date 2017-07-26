var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var Payment = require('../model/payment');

let corsSolution = (req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype,origin, content-type, accept, authorization'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
}

router.options('/', corsSolution, (req, res, next) => {
  next();
});

router.options('/:id', corsSolution, (req, res, next) => {
  next();
});

router.get('/', corsSolution, (req, res, next) => {
  console.log('getting payments')
	Payment.find({}, (err, payment)=>{
    if(!err){
      console.log('get payments');
      res.status(200).send(payment)
    }else{
      console.log(err);
      res.status(500).send(err);
    }
  });
});

router.get('/:id', corsSolution, (req, res, next) => {
    console.log('getting payments ' + req.params.id);
  	Payment.find({_id: req.params.id}, (err, payment)=>{
    if(!err){
      console.log(payment)
      res.status(200).send(payment)
    }else{
      console.log(err);
      res.status(500).send(err);
    }
  })
});

router.post('/', corsSolution, (req, res, next) => {
  var pay = new Payment({
    userId: req.body.userId,
    propertyId: req.body.propertyId,
    amount: req.body.amount
  });

  pay.save( err =>{
    if(!err){
      console.log(pay)
      res.status(200).send(pay);
    }
  });
  
});

router.delete('/:id', corsSolution, (req, res, next)=>{
    Payment.delete({_id: req.params.id}, (err, pay)=>{
      if(!err){
        res.status(200).send(pay)
      }else{
        console.log(err);
        res.status(500).send(err);
      }
    });
});

module.exports = router;
