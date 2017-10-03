var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var specialProcessingSchema = new Schema({
  student: String,
  armedForces: String,
  blind: Boolean,
  disabled: Boolean,
  death: String,
  specialMilitary: String,
  deploymentDate: String
});

var SpecialProcessing = mongoose.model('SpecialProcessing', specialProcessingSchema);
module.exports = SpecialProcessing;
