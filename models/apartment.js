var mongoose = require('mongoose');

var apartmentSchema = mongoose.Schema({
  _organization: {ref: 'Organization', type: mongoose.Schema.Types.ObjectId },
  number: { type: String, unique: true },
  _users: [{ ref: 'User', type: mongoose.Schema.Types.ObjectId}]
  //other details
  //Condition: ETC, ETC,
  //Inspection
  //_user: [{ref: 'User'}]
  //status: "vacant" //
});


module.exports =  mongoose.model("Apartment", apartmentSchema);