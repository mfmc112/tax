var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BasicInformation = require('./basic-info-schema');
var TaxCreditEIC = require('./tax-credit-eic-schema');
var SpecialCondition = require('./special-condition-schema');

var dependentSchema = new Schema({
  basicInfo: { type: BasicInformation.schema},
  relationship: String,
  monthsInHome: Number,
  identityProtectionPin: Number,
  ctc: Boolean,
  code: Number,
  eicCode: String,
  taxCreditEIC: { type: TaxCreditEIC.schema},
  relationshipOtherPerson: String,
  specialCondition: { type: SpecialCondition.schema},
  dateOfDeath: Date
});

var Dependent = mongoose.model('Dependent', dependentSchema);
module.exports = Dependent;
