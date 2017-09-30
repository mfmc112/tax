var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var basicInfoSchema = new Schema({
  firstName: String,
  initial: String,
  lastName: String,
  suffix: String,
  ssn: String,
  dateOfBirth: Date,
  age: Number,
  occupation: String,
  phone : {
    mobile: String,
    evening: String,
    other: String,
    type: String
  }
});

var BasicInformation = mongoose.model('BasicInformation', basicInfoSchema);
module.exports = BasicInformation;
