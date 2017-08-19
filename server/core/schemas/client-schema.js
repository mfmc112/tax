var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var clientSchema = new Schema({
  firstName:   String,
  middleName:  String,
  lastName: String,
  ssn: String,
  itin: String
});

// clientSchema.methods.findById = function(id, cd) {
//   return Client.find(ObjectId(id), cd);
// };

var Client = mongoose.model('Client', clientSchema);
module.exports = Client;
