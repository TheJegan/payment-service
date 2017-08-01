var express = require('express');
var router = express.Router();
var passport = require('passport');
var authController = require('../controllers/auth');

let corsSolution = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  next();
}

router.post('/', corsSolution, passport.authenticate('local', { failureRedirect: '/login' }), authController.login);

module.exports = router;