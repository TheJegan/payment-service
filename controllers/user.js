var User = require('../models/user');

var UserController = {
  create: (req, res, next) => {
    console.log('create user');

    var user = new User({
      name: req.body.name,
      address: req.body.address
    });

    user.save(err => {
      if (!err) {
        console.log('Save user');
        res.status(200).send(user);
      } else {
        console.log(err);
      }
    })
  },

  getById: (req, res, next) => {
    console.log('getting users');
    User.find({ _id: req.params.id }, (err, user) => {
      if (!err) {
        console.log('getting users');
        res.status(200).send(user);
      } else {
        console.log(err);
        res.status(500).send(err);
      }
    });
  },

  getAll: (req, res, next) => {
    console.log('getting users')
    User.find({}, (err, user) => {
      if (!err) {
        console.log('users found');
        res.status(200).send(user);
      } else {
        res.status(500).send(err);
      }
    })
  },

  delete: (req, res, next) => {
    console.log('deleting user user');
    var id = req.params.id;

    User.delete({ _id: id }, function (err, user) {
      if (!err) {
        console.log('Save user');
        res.status(200).send(user);
      } else {
        res.status(500).send(err);
      }
    });
  }
};

module.exports = UserController;