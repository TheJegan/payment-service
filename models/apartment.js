var mongoose = require('mongoose');

var apartmentSchema = mongoose.Schema({
  _organization: {ref: 'Organization', type: mongoose.Schema.Types.ObjectId },
  number: String
  //other details
  //Condition: ETC, ETC,
  //Inspection
  //_user: [{ref: 'User'}]
  //status: "vacant" //
});


module.exports = apartmentSchema;