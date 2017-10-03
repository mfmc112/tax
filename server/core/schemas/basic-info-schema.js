var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Phone = require('./phone-schema');


var basicInfoSchema = new Schema({
  firstName: String,
  initial: String,
  lastName: String,
  suffix: String,
  ssn: String,
  dateOfBirth: String,
  age: Number,
  occupation: String,
  phone: { type: Phone.schema }
});

var BasicInformation = mongoose.model('BasicInformation', basicInfoSchema);
module.exports = BasicInformation;
