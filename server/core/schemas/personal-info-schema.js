var BasicInformation = require('./basic-info-schema');
var MailingAddress = require('./mailing-address-schema');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var personalInfoSchema = new Schema({
  taxPayer: { type: BasicInformation.schema },
  spouse: { type: BasicInformation.schema },
  mailingAddress: { type: MailingAddress.schema }
});

var PersonalInformation = mongoose.model('PersonalInformation', personalInfoSchema);
module.exports = PersonalInformation;
