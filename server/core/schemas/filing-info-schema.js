var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SpecialProcessing = require('./special-processing-schema');
var ReturnInfo = require('./return-info-schema');
var PinAuth = require('./pin-auth-schema');

var filingInformationSchema = new Schema({
  status: String,
  claimAnother: Boolean,
  filingJointlyButSpouseInAnotherPersons: Boolean,
  headClaimNonResidentialAlienSpouse: Boolean,
  disasterDesignation: String,
  payerSpecialProcessing: { type: SpecialProcessing.schema },
  spouseSpecialProcessing: { type: SpecialProcessing.schema },
  payerDonate: Boolean,
  spouseDonate: Boolean,
  eroPin: String,
  isPratictionerPin: Boolean,
  formsWithPin: [String],
  thirdPartyDesignee: Boolean,
  clientAquired: String,
  returnInfo: { type: ReturnInfo.schema },
  taxPayerPinsAuth: { type: PinAuth.schema },
  spousePinAuth: { type: PinAuth.schema }
});

var FilingInformation = mongoose.model('FilingInformation', filingInformationSchema);
module.exports = FilingInformation;
