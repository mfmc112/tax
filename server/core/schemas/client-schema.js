var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clientSchema = new Schema({
  firstName:   String,
  middleName:  String,
  lastName: String,
  ssn: String,
  itin: String
});

var Client = mongoose.model('Client', clientSchema);
module.exports = Client;
