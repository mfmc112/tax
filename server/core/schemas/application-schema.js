var mongoose = require('mongoose');
var Client = require('./client-schema');
var User = require('./user-schema');
var Schema = mongoose.Schema;

var applicationSchema = new Schema({
  year: Number,
  status: String,
  estimate: Number,
  currentAgi: Number,
  preparer: { type: Schema.Types.ObjectId, ref: 'User' },
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
  clientInformation: String,
  lastUpdated: Date
});

var Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
