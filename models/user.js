var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  displayName: String,
  username: String,
  password: String,
  createdDate: Date,
  lastloginDate: Date,
  role: { type: String, default: "normal" }, //admin
  notes: String,
  saltValue: "",
  isSuspended: { type: Boolean, default: false },
  _apartment: { ref: 'Apartment', type: mongoose.Schema.Types.ObjectId }
});

module.exports = mongoose.model('User', userSchema);