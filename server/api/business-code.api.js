var BaseApi = require('../core/base-api');
var ResponseDecorator = require('../core/response-decorator');
var BusinessCode = require('../core/schemas/business-code-schema');

var BusinessCodesApi = function(server) {

  var config = {
    endpoint: '/v1/business-codes',
    doc: 'business-codes'
  };

  var parseQuery = function(query) {
    var json = {};
    if (query.id) json._id = BaseApi.objectID(query.id);
    else if (query._id) json._id = BaseApi.ObjectID(query._id);

    if (query.name) json.name = query.name;
    if (query.email) json.email = query.email;
    if (query.password) json.password = query.password;
    return json;
  };

  /**
   * Get by filter. Currently it can be ID, name, email and password
   */
   server.get(BaseApi.getEndPoint(config.endpoint), function(req, res) {
     var condition = parseQuery(req.query);
     var businessCode = new BusinessCode(condition);
     BusinessCode.find(condition, function(error, response) {
       if (!error) res.send(new ResponseDecorator().enrich(response, config.doc));
       else res.status(500).json("Error executing search");
     });
  });

  server.get(BaseApi.getEndPoint(config.endpoint + "/load"), function(req, res) {
    var ImportBusinessCodes = require('../tools/import-business-codes')();
    ImportBusinessCodes.load();
    res.status(200).send("loaded");
 });

  /**
   * Create a new business code for 1040 form
   */
  server.post(BaseApi.getEndPoint(config.endpoint), function(req,res) {
    console.log('executing POST ' + req.body.name);
    var businessCode = new BusinessCode(req.body);

    BusinessCode.create(businessCode, function(err, response){
      if (!err) res.status(200).send(response);
      else res.status(500).send(err);
    });
  });

  server.delete(BaseApi.getEndPoint(config.endpoint), function(req, res) {
    BusinessCode.find({}).remove().exec();
    res.status(200).json("Everything deleted");
  });

  BaseApi.logRegistered(config.endpoint);
  BaseApi.logRegistered(config.endpoint, ':id');
};

module.exports = BusinessCodesApi;
