var BaseApi = require('../core/base-api');
var ResponseDecorator = require('../core/response-decorator');
var Client = require('../core/schemas/client-schema.js');

var ClientApi = function(server) {

  var config = {
    endpoint: '/v1/clients',
    doc: 'clients'
  };

  var parseQuery = function(query) {
    var json = {};
    if (query.id) json._id = BaseApi.objectID(query.id);
    else if (query._id) json._id = BaseApi.objectID(query._id);

    if (query.firstName) json.firstName = query.firstName;
    if (query.lastName) json.lastName = query.lastName;
    if (query.email) json.email = query.email;
    return json;
  };

  /**
   * Get by filter. Currently it can be ID, firstName, lastName and email
   */
  server.get(BaseApi.getEndPoint(config.endpoint), function(req, res) {
    var condition = parseQuery(req.query);
    var client = new Client(condition);
    Client.find(condition, function(error, response) {
      if (!error) res.send(new ResponseDecorator().enrich(response, config.doc));
      else res.status(500).json("Error executing search");
    });

  });

  /**
   * Get by Id (_id)
   */
  server.get(BaseApi.getEndPoint(config.endpoint, ':id'), function(req, res) {
    console.log('executing GET by id: ' + req.params.id);
    Client.findById(req.params.id,  function(error, response) {
      //TODO: change this accordingly to PROD or dev environment
      // addHeaderCORS(res);
      if (!error) res.send(response);
      else res.status(500).json("Error executing search");
    });
  });

  /**
   * Create a new client if it already do not exists
   */
  server.post(BaseApi.getEndPoint(config.endpoint), function(req,res) {
    console.log('executing POST ' + req.body.firstName + " " + req.body.lastName);
    Client.find({"firstName": req.body.firstName, "lastName": req.body.lastName, "ssn": req.body.ssn}, function(error, response) {
      if (!response || response.length === 0) {
        var client = new Client(req.body);
        Client.create(client, function(err, response){
          if (!err) res.status(200).send(response);
          else res.status(500).send(err);
        });
      } else {
        res.status(500).json("A client with same First and Last Name and SSN is already on the system");
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
    console.log('executing PUT ' + req.body.firstName);
    Client.update({_id: BaseApi.objectID(req.params.id)}, req.body, function(error, response) {
      if (!error) res.send(new ResponseDecorator().enrichPut(response, req));
      else res.status(500).send(error);
    });
  });

  /**
   * Update an existing client
   */
  server.delete(BaseApi.getEndPoint(config.endpoint, ':id'), function(req,res) {
    console.log('executing DELETE ' + req.params.id);
    Client.remove({_id: BaseApi.objectID(req.params.id)}, function(error, response) {
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

module.exports = ClientApi;
