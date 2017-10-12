var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taxCreditEICSchema = new Schema({
  question1a: Boolean,
  question1b: Boolean,
  question2a: Boolean,
  question3a: Boolean,
  question3b: Number,
  question3c: Boolean,
  question3d: Boolean,
  question4a: Boolean,
  question4b: Boolean
});

var TaxCreditEIC = mongoose.model('TaxCreditEIC', taxCreditEICSchema);
module.exports = TaxCreditEIC;
