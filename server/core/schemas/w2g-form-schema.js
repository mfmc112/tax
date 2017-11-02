var MailingAddress = require('./mailing-address-schema');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var w2GFormSchema = new Schema({
  w2gFor: String,
  ssn: String,
  name: String,
  isIdEin: Boolean,
  sameAddressAsHome: Boolean,
  address: { type: MailingAddress.schema },
  alteredOrHandwritten: Boolean,
  payerEin: String,
  payerName: String,
  payerCareOfName: String,
  payerAddress: { type: MailingAddress.schema },
  corrected: Boolean,
  field1: Number,
  field2: String,
  field3: String,
  field4: Number,
  field5: String,
  field6: String,
  field7: Number,
  field8: String,
  field9: String,
  field10: String,
  field11: String,
  field12: String,
  field13: String,
  field14: Number,
  field15: Number,
  field16: Number,
  field17: Number,
  field18: String
});

var W2GForm = mongoose.model('W2GForm', w2GFormSchema);
module.exports = W2GForm;
