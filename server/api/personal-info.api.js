var BaseApi = require('../core/base-api');
var ResponseDecorator = require('../core/response-decorator');
var PersonalInfo = require('../core/schemas/personal-info-schema');
var Application = require('../core/schemas/application-schema');
var ClientInformation = require('../core/schemas/client-information-schema');

var PersonalInfoApi = function(server) {
  var config = {
    endpoint: '/v1/personal-info',
    doc: 'personalInfo'
  };

  var parseQuery = function(query) {
    var json = {};
    if (query.id) json._id = BaseApi.objectID(query.id);
    else if (query._id) json._id = BaseApi.ObjectID(query._id);

    if (query.firstName) json.firstName = query.firstName;
    if (query.initial) json.initial = query.initial;
    if (query.lastName) json.lastName = query.lastName;
    if (query.sufix) json.suffix = query.suffix;
    if (query.ssn) json.ssn = query.ssn;
    if (query.dateOfBirth) json.dateOfBirth = query.dateOfBirth;
    if (query.age) json.age = query.age;
    if (query.occupation) json.ocuppation = query.occupation;
    if (query.phone) {
      json.phone = {};
      if (query.mobile) json.phone.mobile = query.phone.mobile;
      if (query.evening) json.phone.evening = query.phone.evening;
      if (query.other) json.phone.other = query.phone.other;
    }
    return json;
  };

  server.get(BaseApi.getEndPoint(config.endpoint), function(req, res) {
    var condition = parseQuery(req.query);
    var client = new PersonalInfo(condition);
    PersonalInfo.find(condition, function(error, response) {
      if (!error) res.send(new ResponseDecorator().enrich(response, config.doc));
      else res.status(500).json("Error executing search");
    });

  });

  /**
   * Get by Id (_id)
   */
  server.get(BaseApi.getEndPoint(config.endpoint, ':id'), function(req, res) {
    console.log('executing GET by id: ' + req.params.id);
    PersonalInfo.findById(req.params.id,  function(error, response) {
      if (!error) res.send(response);
      else res.status(500).json("Error executing search");
    });
  });

  /**
   * Create a new personalInfo if it already do not exists
   */
  server.post(BaseApi.getEndPoint(config.endpoint), function(req,res) {
    console.log('executing POST ' + req.body.firstName + " " + req.body.lastName);
    PersonalInfo.find({"firstName": req.body.firstName, "lastName": req.body.lastName}, function(error, response) {
      if (!response || response.length === 0) {
        var personalInfo = new PersonalInfo(req.body);
        PersonalInfo.create(personalInfo, function(err, response){
          if (!err) res.status(200).send(response);
          else res.status(500).send(err);
        });
      } else {
        res.status(500).json("A personal-info for this client already exists");
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
   * Update an existing personalInfo
   */
  server.put(BaseApi.getEndPoint(config.endpoint, ':id'), function(req,res) {
    console.log('executing PUT ' + req.body.firstName);
    var personalInfo = new PersonalInfo(req.body);
    Application.findById(req.params.id).
    populate('clientInformation').
    exec(function(error, response) {
      if (!error) {
        if (!response.clientInformation) response.clientInformation = new ClientInformation();
        response.clientInformation.save(function(error) {
          if (error) {
            console.log("Error saving clientInformation" + error);
            res.status(500).send("Error saving clientInformation" + error);
          }

          personalInfo.dependents = false;
          response.clientInformation.personalInformation = personalInfo;
          console.log(response.clientInformation);

          response.clientInformation.personalInformation.save(function(error) {
            if (error) {
              console.log("Error saving personalInformation" + error);
              res.status(500).send("Error saving personalInformation" + error);
            }
            res.send(new ResponseDecorator().enrichPut(response, req));
          });
        })
      }
      else res.status(500).json("Error executing search");
    });
  });

  /**
   * Update an existing personalInfo
   */
  server.delete(BaseApi.getEndPoint(config.endpoint, ':id'), function(req,res) {
    console.log('executing DELETE ' + req.params.id);
    PersonalInfo.remove({_id: BaseApi.objectID(req.params.id)}, function(error, response) {
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

module.exports = PersonalInfoApi;
