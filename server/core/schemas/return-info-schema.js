var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var returnInfoSchema = new Schema({
  filedFederal: Boolean,
  filedState: Boolean,
  filingMethod: String,
  disbursementMethod: String
});

var ReturnInfo = mongoose.model('ReturnInfo', returnInfoSchema);
module.exports = ReturnInfo;
