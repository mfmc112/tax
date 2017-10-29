var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var form1040Schema = new Schema({
  box6a: Boolean,
  box6b: Boolean,
  box6ab: Number
});

var Form1040 = mongoose.model('Form1040', form1040Schema);
module.exports = Form1040;
