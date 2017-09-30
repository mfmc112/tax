var mongoose = require('mongoose');
var PersonalInformation = require('./personal-info-schema');
var FilingInformation = require('./filing-info-schema');
var Schema = mongoose.Schema;

var clientInformationSchema = new Schema({
  personalInformation: { type: PersonalInformation.schema },
  filingInformation: { type: FilingInformation.schema },
  lastUpdated: Date
});

var ClientInformation = mongoose.model('ClientInformation', clientInformationSchema);
module.exports = ClientInformation;
