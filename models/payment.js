var mongoose = require('mongoose');

var paymentSchema = mongoose.Schema({
	_user: {ref: 'User', type: mongoose.Schema.Types.ObjectId},
	_property: {ref: 'Organization', type: mongoose.Schema.Types.ObjectId},
  amount: String,
  status: { type: String, default: "pending" },
  createdDate: {type: Date, default: Date.now}
});


module.exports = mongoose.model('Payment', paymentSchema);
