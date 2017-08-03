var mongoose = require('mongoose');



var apartmentSchema = mongoose.Schema({
  number: String
  //other details
  //Condition: ETC, ETC,
  //Inspection
  //_user: [{ref: 'User'}]
  //status: "vacant" //
});


module.exports = apartmentSchema;