// http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/
var ObjectId = require('mongodb').ObjectID;

var client = require('./MongoClient');
var assert = require('assert');
var pluralize = require('pluralize')

var documentName = "client";
var documentPlural = pluralize(documentName);

var enrichGetResponse = function(response) {
  var totalCount = 0;
  var enriched = {};
  enriched.totalCount = totalCount;
  enriched[documentPlural] = [];
  if (!response) return enriched;

  enriched.totalCount = response.length;
  enriched[documentPlural] = response;
  return enriched;
}

var enrichPutResponse = function(response) {
  if (!response || !response.value) return {};
  var enriched = response.value;
  return enriched;
}

var enrichPostResponse = function(response) {
  if (!response || !response.ops || !response.ops[0]) return {};
  var enriched = response.ops[0];
  return enriched;
}

this.find = function(query, callback) {
  if (!query) query = {};
  var collection = client.db.collection(documentName);
  collection.find(query).sort( { firstName: 1 } ).toArray(function(err, response) {
    var enriched = enrichGetResponse(response);
    callback( enriched, err );
  });
}

/**
 * Insert single records
 */
this.insert = function(data, callback) {
  var collection = client.db.collection(documentName);
  collection.insertOne(data, function(err, response) {
    var enriched = enrichPostResponse(response);
    callback(enriched, err);
  });
}

/**
* Update a single record. It will update the first record found.
*/
this.update = function(condition, set, callback) {
  if (!condition || condition === {}) {
    callback("condition not set");
    return;
  }
  var collection = client.db.collection(documentName);
  collection.findOneAndUpdate(condition, set, { new: false }, function(err, response) {
    var enriched = enrichPutResponse(response);
    callback(enriched, err);
  });
}

var insertOrUpdate = function(set, where, callback) {
  if (!where || where === "") {
    callback("Cannot update all records");
    return;
  }
  var collection = this.client.db.collection(documentName);
  collection.updateMany(where, {'upsert': true}
    , { $set: set }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    callback(result);
  });
}

var updateFirst = function(set, where, callback) {
  if (!where || where === "") {
    callback("Please Specify a condition");
    return;
  }
  var collection = this.client.db.collection(documentName);
  collection.updateOne(where, {'upsert': true}
    , { $set: set }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    callback(result);
  });
}

this.removeById = function(id, callback) {
  var collection = client.db.collection(documentName);
  collection.deleteOne({ _id : ObjectId(id) }, function(err, result) {
    console.log("Removed the document of _id=" + id);
    callback(result, err);
  });
}

this.removeAll = function(id, callback) {
  var collection = client.db.collection(documentName);
  collection.deleteOne({}, {"justOne": false});
}
