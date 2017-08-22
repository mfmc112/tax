var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var businessCodesSchema = new Schema({
  name: String,
  primary: [ { name: String, secondary: [{ code: Number, name: String }] } ]
});

var BusinessCode = mongoose.model('BusinessCode', businessCodesSchema);
module.exports = BusinessCode;
