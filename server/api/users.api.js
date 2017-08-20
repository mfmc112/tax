var BaseApi = require('../core/base-api');
var ResponseDecorator = require('../core/response-decorator');
var User = require('../core/schemas/user-schema.js');

var UserApi = function(server) {

  var config = {
    endpoint: '/v1/users',
    doc: 'users'
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
    var user = new User(condition);
    User.find(condition, function(error, response) {
      if (!error) res.send(new ResponseDecorator().enrich(response, config.doc));
      else res.status(500).json("Error executing search");
    });

  });

  /**
   * Get by Id (_id)
   */
  server.get(BaseApi.getEndPoint(config.endpoint, ':id'), function(req, res) {
    console.log('executing GET by id: ' + req.params.id);
    User.findById(req.params.id,  function(error, response) {
      if (!error) res.send(response);
      else res.status(500).json("Error executing search");
    });
  });

  /**
   * Create a new user if it already do not exists
   */
  server.post(BaseApi.getEndPoint(config.endpoint), function(req,res) {
    console.log('executing POST ' + req.body.name + " " + req.body.email);
    User.find({"name": req.body.name, "email": req.body.email}, function(error, response) {
      if (!response || response.length === 0) {
        var user = new User(req.body);
        User.create(user, function(err, response){
          if (!err) res.status(200).send(response);
          else res.status(500).send(err);
        });
      } else {
        res.status(500).json("A user with same name and email already exists on the system");
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
   * Update an existing user
   */
  server.put(BaseApi.getEndPoint(config.endpoint, ':id'), function(req,res) {
    console.log('executing PUT ' + req.body.name);
    User.update({_id: BaseApi.objectID(req.params.id)}, req.body, function(error, response) {
      if (!error) res.send(new ResponseDecorator().enrichPut(response, req));
      else res.status(500).send(error);
    });
  });

  /**
   * Update an existing user
   */
  server.delete(BaseApi.getEndPoint(config.endpoint, ':id'), function(req,res) {
    console.log('executing DELETE ' + req.params.id);
    User.remove({_id: BaseApi.objectID(req.params.id)}, function(error, response) {
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

module.exports = UserApi;
