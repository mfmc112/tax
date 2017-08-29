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
  field10: Number
});

var W2Form = mongoose.model('W2Form', w2FormSchema);
module.exports = W2Form;
