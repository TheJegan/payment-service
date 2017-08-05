var mongoose = require('mongoose');

var organizationSchema = mongoose.Schema({
  name: { type: String, unique: true },
  address: String,
  city: String,
  state: String,
  zip: String,
  createdDate: { type: Date, default: Date.now },
  _users: { ref: "User", type: mongoose.Schema.Types.ObjectId },
  _apartments: { ref: "Apartment", type: mongoose.Schema.Types.ObjectId }
});


module.exports = mongoose.model('Organization', organizationSchema);


/*
* house number
* predirectional (N, SE, etc)
* street
* suffix (AVE, BLVD, etc)
* postdirectional (SW, E, etc)
* unit (APT, STE, etc)
* apartment/suite number
*/