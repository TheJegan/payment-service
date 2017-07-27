var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
	userId: {ref: 'User', type: mongoose.Schema.Types.ObjectId},
	propertyId: {ref: 'Organization', type: mongoose.Schema.Types.ObjectId},
	amount: String
});


module.exports = mongoose.model('Payment', paymentSchema);
