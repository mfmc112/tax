var MailingAddress = require('./mailing-address-schema');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var w2FormSchema = new Schema({
  employeeAddress: { type: MailingAddress.schema },
  employerAddress: { type: MailingAddress.schema },
  w2For: String,
  employeeName: String,
  ssn: String,
  ssnDoesntMatch: Boolean,
  payerAddressShown: Boolean,
  sameAddressAsHome: Boolean,
  alteredOrHandwritten: Boolean,
  corrected: Boolean,
  securityInfo: String,
  ein: String,
  employerName: String,
  employerNameControl: String,
  autoCalculate3and6: Boolean,
  field1: Number,
  field2: Number,
  field3: Number,
  field4: Number,
  field5: Number,
  field6: Number,
  field7: Number,
  field8: Number,
  field9: Number,
  field10: Number,
  field11: Number,
  field12a1: String,
  field12a2: Number,
  field12b1: String,
  field12b2: Number,
  field12c1: String,
  field12c2: Number,
  field12d1: String,
  field12d2: Number,
  field13Statutory: Boolean,
  field13Retirement: Boolean,
  field13SickPay: Boolean,
  field14: String,
  field16: Number,
  field17: Number,
  field18: Number,
  field19: Number,
  field20: String,
  state: String,
  esin: String
});

var W2Form = mongoose.model('W2Form', w2FormSchema);
module.exports = W2Form;
