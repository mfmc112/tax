var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var filingInfoSchema = new Schema({
  taxpayerDonateToPresidentialCampain: Number,
  spouseDonateToPresidentialCampain: Number
});

var FilingInfo = mongoose.model('FilingInfo', filingInfoSchema);
module.exports = FilingInfo;
