var ObjectId = require('mongodb').ObjectID;


this.parseQuery = function(query) {
  var json = {};
  if (query.id) json._id = ObjectId(query.id);
  else if (query._id) json._id = ObjectId(query._id);

  if (query.firstName) json.firstName = query.firstName;
  if (query.lastName) json.lastName = query.lastName;
  if (query.email) json.email = query.email;
  return json;
};
