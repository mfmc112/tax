var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personalInfoSchema = new Schema({
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

var PersonalInfo = mongoose.model('PersonalInfo', personalInfoSchema);
module.exports = PersonalInfo;
