var express = require('express');
var router = express.Router();
var User = require('../model/user');

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

/* GET users listing. */
router.get('/', corsSolution, function(req, res, next) {
  console.log('getting users')
  User.find({}, (err, user)=>{
    if(!err){
      console.log('users found');
      res.status(200).send(user);
    }else{
      res.status(500).send(err);
    }
  })
});

router.get('/:id', corsSolution, function(req, res, next){
  console.log('getting users');
  User.find({_id: req.params.id}, (err, user)=>{
    if(!err){
      console.log('getting users');
      res.status(200).send(user);
    }else{
      console.log(err);
      res.status(500).send(err);
    }
  });
});

router.post('/', corsSolution, function(req, res, next){
  console.log('create user');

  var user = new User({
    name: req.body.name,
    address: req.body.address
  });

  user.save( err=>{
    if(!err){
      console.log('Save user');
      res.status(200).send(user);
    }else{
      console.log(err);
    }
  })
});

router.delete('/:id', corsSolution, function(req, res, next){
  console.log('deleting user user');
  var id = req.params.id;

  User.delete({_id: id}, function (err, user) {
    if(!err){
      console.log('Save user');
      res.status(200).send(user);
    }else{
      res.status(500).send(err);
    }
  });
})

module.exports = router;
