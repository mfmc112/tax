var ResponseDecorator = require('../core/response-decorator');
var Client = require('../core/schemas/client-schema.js');
var ObjectId = require('mongodb').ObjectID;

var ClientApi = function(server) {

  var parseQuery = function(query) {
    var json = {};
    if (query.id) json._id = ObjectId(query.id);
    else if (query._id) json._id = ObjectId(query._id);

    if (query.firstName) json.firstName = query.firstName;
    if (query.lastName) json.lastName = query.lastName;
    if (query.email) json.email = query.email;
    return json;
  };

  /**
   * Get by filter. Currently it can be ID, firstName, lastName and email
   */
  server.get('/api/clients', function(req, res) {
    var condition = parseQuery(req.query);
    var client = new Client(condition);
    Client.find(condition, function(error, response) {
      //TODO: change this accordingly to PROD or dev environment
      // addHeaderCORS(res);
      if (!error) res.send(new ResponseDecorator().enrich(response, "clients"));
      else res.status(500).json("Error executing search");
    });

  });

  /**
   * Get by Id (_id)
   */
  server.get('/api/clients/:id', function(req, res) {
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
  server.post('/api/clients', function(req,res) {
    console.log('executing POST ' + req.body.firstName + " " + req.body.lastName);
    Client.find({"firstName": req.body.firstName, "lastName": req.body.lastName}, function(error, response) {
      //TODO: change this accordingly to PROD or dev environment
      // addHeaderCORS(res);
      if (!response || response.length === 0) {
        var client = new Client(req.body);
        Client.create(client, function(err, response){
          if (!error) res.status(200).send(response);
          else res.status(500).send(error);
        });
      } else {
        res.status(500).json("A client with same First and Last Name already exists on the system");
      }
    });
  });

  /**
   * Update implemented to return the error
   */
  server.put('/api/clients', function(req,res) {
    //TODO: change this accordingly to PROD or dev environment
    // addHeaderCORS(res);
    res.status(500).json("This is an illegal update. It requires an :id");
  });

  /**
   * Update an existing client
   */
  server.put('/api/clients/:id', function(req,res) {
    console.log('executing PUT ' + req.body.firstName);
    Client.update({_id: ObjectId(req.params.id)}, req.body, function(error, response) {
      // addHeaderCORS(res);
      if (!error) res.send(new ResponseDecorator().enrichPut(response, req));
      else res.status(500).send(error);
    });
  });

  /**
   * Update an existing client
   */
  server.delete('/api/clients/:id', function(req,res) {
    console.log('executing DELETE ' + req.params.id);
    Client.remove({_id: ObjectId(req.params.id)}, function(error, response) {
      //TODO: change this accordingly to PROD or dev environment
      // addHeaderCORS(res);
      if (!error) {
        var enriched = new ResponseDecorator().enrichDelete(response, req.params.id)
        if (enriched._id) res.status(200).send(enriched);
        else res.status(500).send("Record not found");
      }
      else res.status(500).send(error);
    });
  });


};

module.exports = ClientApi;
