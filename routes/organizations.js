var express = require('express');
var router = express.Router();
var Organization = require('../model/organization');

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

router.get('/', corsSolution, (req, res, next) =>{
    Organization.find({}, (err, orgs)=>{
        if(!err){
            res.status(200).send(orgs);
        }else{
            res.status(400).send(err);
        }
    });
});

router.get('/:id', corsSolution, (req, res, next)=>{
    Organization.find({_id: req.params.id}, (err, orgs)=>{
        if(!err){
            res.status(200).send(orgs);
        }else{
            res.status(400).send(err);
        }
    });
});

router.post('/', corsSolution, (req, res, next)=>{
    var org = new Organization({
        name: req.body.name,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    });

    org.save((err)=>{
        if(!err){
            res.status(201).send(org);
        } else {
          res.status(500).send(err);
        }
    });
});

router.delete('/:id', corsSolution, (req, res, next)=>{
    Organization.delete('/:id', (err, organization)=>{
        if(!err){
            res.status(200).send(organization);
        }else{
            res.status(500).send(err);
        }
    });
});

module.exports = router;