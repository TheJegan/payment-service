var mongoose = require('mongoose');


var organizationSchema = mongoose.Schema({
      name: String,
      address: String,
      city: String,
      state: String,
      zip: String
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