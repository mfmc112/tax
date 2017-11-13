var MailingAddress = require('./mailing-address-schema');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var form1099GSchema = new Schema({
  form1099gFor: String,
  ssn: String,
  name: String,
  accountNumber: String,
  sameAddressAsHome: Boolean,
  alteredOrHandwritten: Boolean,
  address: { type: MailingAddress.schema },
  payerEin: String,
  payerName: String,
  payerCareOf: String,
  payerAddress: { type: MailingAddress.schema },
  payerPhone: String,
  corrected: Boolean,
  field1: Number,
  field2: String,
  field2State: String,
  field3: String,
  field4: Number,
  field10a: String,
  field10b: String,
  field11: String
});

var Form1099G = mongoose.model('Form1099G', form1099GSchema);
module.exports = Form1099G;
