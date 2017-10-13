var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var specialConditionSchema = new Schema({
  under24Yes: Boolean,
  under24No: Boolean,
  disabledYes: Boolean,
  disabledNo: Boolean,
  kidnappedYes: Boolean,
  kidnappedNo: Boolean,
  didntLiveYes: Boolean,
  didntLiveNo: Boolean
});

var SpecialCondition = mongoose.model('SpecialCondition', specialConditionSchema);
module.exports = SpecialCondition;
