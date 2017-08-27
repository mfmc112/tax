var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mailingAddressSchema = new Schema({
  careFirstName: String,
  careLastName: String,
  home1: String,
  home2: String,
  zip: Number,
  city: String,
  state: String,
  email: String,
});

var MailingAddress = mongoose.model('MailingAddress', mailingAddressSchema);
module.exports = MailingAddress;
