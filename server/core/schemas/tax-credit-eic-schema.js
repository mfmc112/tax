var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taxCreditEICSchema = new Schema({
  question1Yes: Boolean,
  question1No: Boolean,
  question2Yes: Boolean,
  question2No: Boolean,
  question3Yes: Boolean,
  question3No: Boolean,
  question4Yes: Boolean,
  question4No: Boolean,
  question5Yes: Boolean,
  question5No: Boolean,
  question6Yes: Boolean,
  question6No: Boolean,
  question7Yes: Boolean,
  question7No: Boolean,
  question8Yes: Boolean,
  question8No: Boolean
});

var TaxCreditEIC = mongoose.model('TaxCreditEIC', taxCreditEICSchema);
module.exports = TaxCreditEIC;
