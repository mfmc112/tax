// http://mongodb.github.io/node-mongodb-native/2.2/tutorials/crud/
var ObjectId = require('mongodb').ObjectID;

var client = require('./MongoClient');
var assert = require('assert');

this.documentName = "client";

this.find = function(query, callback) {
  if (!query) query = {};
  var collection = client.db.collection(this.documentName);
  collection.find(query).toArray(function(err, docs) {
    callback(docs, err);
  });
}

/**
 * Insert single records
 */
this.insert = function(data, callback) {
  var collection = client.db.collection(this.documentName);
  collection.insertOne(data, function(err, result) {
    assert.equal(err, null);
    assert.equal(null, err);
    assert.equal(1, result.insertedCount);
    callback(result.ops[0]);
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
  var collection = client.db.collection(this.documentName);
  collection.findOneAndUpdate(condition, set, { new: false }, function(err, result) {
    assert.equal(err, null);
    callback(result);
  });
}

var insertOrUpdate = function(set, where, callback) {
  if (!where || where === "") {
    callback("Cannot update all records");
    return;
  }
  var collection = this.client.db.collection(this.documentName);
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
  var collection = this.client.db.collection(this.documentName);
  collection.updateOne(where, {'upsert': true}
    , { $set: set }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    callback(result);
  });
}

this.removeById = function(id, callback) {
  var collection = client.db.collection(this.documentName);
  collection.deleteOne({ _id : ObjectId(id) }, function(err, result) {
    console.log("Removed the document of _id=" + id);
    callback(result);
  });
}

this.removeAll = function(id, callback) {
  var collection = client.db.collection(this.documentName);
  collection.deleteOne({}, {"justOne": false});
}
