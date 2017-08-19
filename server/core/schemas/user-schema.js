var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  name:   String,
  email:  String,
  password: String
});

userSchema.methods.logUser = function(cd) {
  return User.find({ name: this.name, password: this.password }, cd);
};

userSchema.methods.findById = function(id, cd) {
  return User.find(ObjectId(id), cd);
};

var User = mongoose.model('User', userSchema);
module.exports = User;
