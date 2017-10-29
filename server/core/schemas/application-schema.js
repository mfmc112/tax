var mongoose = require('mongoose');
var Client = require('./client-schema');
var User = require('./user-schema');
var W2Form = require('./w2-form-schema');
var ClientInformation = require('./client-information-schema');
var Dependent = require('./dependent-schema');
var Form1040 = require('./form-1040-schema');

var Schema = mongoose.Schema;

var applicationSchema = new Schema({
  year: Number,
  status: String,
  estimate: Number,
  currentAgi: Number,
  preparer: { type: Schema.Types.ObjectId, ref: 'User' },
  client: { type: Schema.Types.ObjectId, ref: 'Client' },
  clientInformation: { type: ClientInformation.schema },
  dependents: [{ type: Dependent.schema}],
  w2Forms: [{ type: W2Form.schema}],
  form1040: { type: Form1040.schema },
  lastUpdated: Date
});

var Application = mongoose.model('Application', applicationSchema);
module.exports = Application;
