var mongoose = require('mongoose');
var Client = require('./client-schema');
var User = require('./user-schema');
var ClientInformation = require('./client-information-schema');
var Schema = mongoose.Schema;

var applicationSchema = new Schema({
  year: Number,
  status: String,
  estimate: Number,
  currentAgi: Number,
  preparer: { type: Schema.Types.ObjectId, ref: 'User' },
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
  clientInformation: { type: ClientInformation.schema },
  lastUpdated: Date
});

var Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
