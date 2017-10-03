var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pinAuthSchema = new Schema({
  taxpayerDate: Date,
  taxpayerPin: String,
  taxpayerEfileSignatureAuth: String,
  taxpayerIPIN: Number,
  eroFirmName: String,
  spouseIPIN: Number
});

var PinAuth = mongoose.model('PinAuth', pinAuthSchema);
module.exports = PinAuth;
