var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
	userId: String,
	propertyId: String,
	amount: String
});


module.exports = paymentSchema;
