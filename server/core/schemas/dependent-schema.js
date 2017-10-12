var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BasicInformation = require('./basic-info-schema');
var TaxCreditEIC = require('./tax-credit-eic-schema');

var dependentSchema = new Schema({
  basicInfo: { type: BasicInformation.schema},
  relationship: String,
  monthsInHome: Number,
  identityProtectionPin: String,
  ctc: Boolean,
  code: Number,
  eicCode: Number,
  taxCreditEIC: { type: TaxCreditEIC.schema}
});

var Dependent = mongoose.model('Dependent', dependentSchema);
module.exports = Dependent;
