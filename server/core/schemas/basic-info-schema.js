var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var basicInfoSchema = new Schema({
  firstName: String,
  initial: String,
  lastName: String,
  sufix: String,
  ssn: String,
  dateOfBirth: Date,
  age: Number,
  occupation: String,
  phone : {
    mobile: Number,
    evening: Number,
    other: Number
  }
});

var BasicInformation = mongoose.model('BasicInformation', basicInfoSchema);
module.exports = BasicInformation;
