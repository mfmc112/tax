var pluralize = require('pluralize');

var ResponseDecorator = function() {
  return {
    enrich: function(response, documentName) {
      var documentPlural = pluralize(documentName);

      var totalCount = 0;
      var enriched = {};
      enriched.totalCount = totalCount;
      enriched[documentPlural] = [];
      if (!response) return enriched;

      enriched.totalCount = response.length;
      enriched[documentPlural] = response;
      return enriched;
    },
    enrichPut: function(response, req) {
      var enriched = {};
      if (response.nModified > 0) {
        enriched = req.body;
        enriched._id = req.params.id;
      }
      return enriched;
    },
    enrichDelete: function(response, id) {
      var enriched = {};
      if (response.result.n > 0) {
        enriched._id = id;
      }
      return enriched;
    }
  };
}
module.exports = ResponseDecorator;
