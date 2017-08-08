var mongoose = require('mongoose');

var notificationSchema = mongoose.Schema({
  message: String,
  resolutionLink: String //potential vulnerability
});

module.exports = mongoose.model('Notifications', notificationSchema);