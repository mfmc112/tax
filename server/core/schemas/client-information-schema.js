var mongoose = require('mongoose');
var PersonalInformation = require('./personal-info-schema');
var FilingInformation = require('./filing-info-schema');
var Schema = mongoose.Schema;

var clientInformationSchema = new Schema({
  personalInformation: { type: PersonalInformation.schema }, //type: Schema.Types.ObjectId, ref: 'PersonalInformation' },
  filingInformation: { type: FilingInformation.schema } //Schema.Types.ObjectId, ref: 'FilingInformation' }
});

var ClientInformation = mongoose.model('ClientInformation', clientInformationSchema);
module.exports = ClientInformation;
