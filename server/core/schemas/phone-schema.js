var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phoneSchema = new Schema({
  mobile: String,
  evening: String,
  other: String,
  type: String
});

var Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
