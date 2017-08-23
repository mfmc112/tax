var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var filingInformationSchema = new Schema({
  taxpayerDonateToPresidentialCampain: Number,
  spouseDonateToPresidentialCampain: Number
});

var FilingInformation = mongoose.model('FilingInformation', filingInformationSchema);
module.exports = FilingInformation;
