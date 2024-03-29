var BaseApi = require('../core/base-api');
var ResponseDecorator = require('../core/response-decorator');
var Application = require('../core/schemas/application-schema.js');
var Client = require('../core/schemas/client-schema');
var User = require('../core/schemas/user-schema');


var ApplicationApi = function(server) {

  var config = {
    endpoint: '/v1/applications',
    doc: 'applications'
  };

  var parseQuery = function(query) {
    var json = {};
    if (query.id) json._id = BaseApi.objectID(query.id);
    else if (query._id) json._id = BaseApi.objectID(query._id);

    if (query.year) json.year = query.year;
    if (query.clientId) json.firstName = query.clientId;
    if (query.clientInformationId) json.clientInformationId = query.clientInformationId;
    return json;
  };

  /**
   * GetApplication by filter and populate the client
   */
  server.get(BaseApi.getEndPoint(config.endpoint), function(req, res) {
    var condition = parseQuery(req.query);
    Application.find(condition).
    populate('client').
    populate('preparer').
    populate('w2Forms').
    exec(function(error, response) {
      if (!error) res.send(new ResponseDecorator().enrich(response, config.doc));
      else res.status(500).json("Error executing search");
    });
  });

  /**
   * Get by application Id (_id)
   */
  server.get(BaseApi.getEndPoint(config.endpoint, ':id'), function(req, res) {
    console.log('executing GET by id: ' + req.params.id);
    Application.findById(req.params.id).
    populate('client').
    populate('preparer').
    populate('w2Forms').
    exec(function(error, response) {
      if (!error) res.send(response);
      else res.status(500).json("Error executing search");
    });
  });

  /**
   * Create a new client if it already do not exists
   */
  server.post(BaseApi.getEndPoint(config.endpoint), function(req,res) {
    if (!req.body.client) res.status(500).send("invalida client");
    if (!req.body.preparer) res.status(500).send("invalida preparer");

    console.log('executing application POST for client' + req.body.client + ', year of : ' + req.body.year);
    Application.find({"client": BaseApi.objectID(req.body.client), "year": req.body.year}, function(error, response) {
      if (!error) {
        if (!response || response.length === 0) {
          var application = new Application(req.body);
          Application.create(application, function(err, response){
            if (!err) res.status(200).send(response);
            else res.status(500).send(err);
          });
        } else {
          res.status(409).json("An applications for the same client for the same year already exists");
        }
      } else {
        res.status(500).json("Error finding application before saving. " + error);
      }
    });
  });

  /**
   * Update implemented to return the error
   */
  server.put(BaseApi.getEndPoint(config.endpoint), function(req,res) {
    res.status(500).json("This is an illegal update. It requires an :id");
  });

  /**
   * Update an existing client
   */
  server.put(BaseApi.getEndPoint(config.endpoint, ':id'), function(req,res) {
    if (!req.body.client) res.status(500).send("invalid client");
    if (!req.body.preparer) res.status(500).send("invalid preparer");

    console.log('executing application PUT for client ' + req.body.client.firstName + ', year of : ' + req.body.year);
    var application = new Application(req.body);
    Application.update({_id: BaseApi.objectID(req.params.id)}, application, function(error, response) {
      if (!error) res.send(new ResponseDecorator().enrichPut(response, req));
      else res.status(500).send(error);
    });
  });

  /**
   * Update an existing client
   */
  server.delete(BaseApi.getEndPoint(config.endpoint, ':id'), function(req,res) {
    console.log('executing application DELETE ' + req.params.id);
    Application.remove({_id: BaseApi.objectID(req.params.id)}, function(error, response) {
      if (!error) {
        var enriched = new ResponseDecorator().enrichDelete(response, req.params.id)
        if (enriched._id) res.status(200).send(enriched);
        else res.status(500).send("Record not found");
      }
      else res.status(500).send(error);
    });
  });

  BaseApi.logRegistered(config.endpoint);
  BaseApi.logRegistered(config.endpoint, ':id');
};

module.exports = ApplicationApi;
