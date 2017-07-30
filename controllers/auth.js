var passport = require('passport');
var express = require('express');
var jwt = require('jsonwebtoken');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var env = require('../config');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  session: false,
  passReqToCallback: true,
},
  function (req, username, password, done) {

    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }

      let payload = {
        userId: user._id
      }
      let token = jwt.sign(payload, env.AUTH_TOKEN_SECRET, { expiresIn: '4h' });

      let auth = {
        token: token,
        // profileId: user._id,
        displayName: user.displayName
      };

      // client.set(user._id.toString(), JSON.stringify(user));

      return done(null, auth);
    });
  }
));


var authController = {
  login: (req, res, next) => {
    res.status(200).send(req.user); //passport.done assigns to user object
  },
}


module.exports = authController;