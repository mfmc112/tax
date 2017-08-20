var ObjectId = require('mongodb').ObjectID;

var BaseApi = function(api) {
  return {
    getBaseURI: function() {
      return '/api';
    },
    objectID: function(id) {
      return ObjectId(id);
    },
    logRegistered(endpoint, param) {
      console.log("API - Registered-> " + this.getEndPoint(endpoint, param));
    },
    getEndPoint: function(endpoint, param) {
      var ep = this.getBaseURI() + endpoint;
      if (param) ep += '/' + param;
      return ep;
    }
  };
}();

module.exports = BaseApi;
