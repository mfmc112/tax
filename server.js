var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectID;

var mongo = require('./server/mongo/MongoCore');
var parser = require('./server/mongo/SafeParser');

var url  = process.env.MONGODB_URI; //'mongodb://localhost:27017/heroku_f7693k00';
var port = process.env.PORT || 5000

server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vdn.api+json'}));

server.listen(port);
console.log("Tax Smart is up and running");

var clientsAPIName = 'clients';
var addHeaderCORS = function(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
}

// Add headers
server.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

/**
 * Get by filter. Currently it can be ID, firstName, lastName and email
 */
server.get('/api/' + clientsAPIName, function(req, res) {
  var condition = parser.parseQuery(req.query);
  mongo.find(condition, function(response, error) {
    if (!error) {
      //TODO: change this accordingly to PROD or dev environment
      addHeaderCORS(res);
      res.send(response);
    } else {
      console.log(error);
      //TODO: change this accordingly to PROD or dev environment
      addHeaderCORS(res);
      res.status(500).json("Error executing search");
    }
  });
});

/**
 * Get by Id (_id)
 */
server.get('/api/' + clientsAPIName + '/:id', function(req, res) {
  console.log('executing GET ' + req.params.id);
  mongo.find({"_id" : ObjectId(req.params.id)},  function(response, error) {
    if (!error) {
      //TODO: change this accordingly to PROD or dev environment
      addHeaderCORS(res);
      res.send(response);
    } else {
      console.log(error);
      //TODO: change this accordingly to PROD or dev environment
      addHeaderCORS(res);
      res.status(500).json("Error executing search");
    }
  });
});

/**
 * Create a new client if it already do not exists
 */
server.post('/api/' + clientsAPIName, function(req,res) {
  console.log('executing POST ' + req.body.firstName);
  mongo.find({"firstName": req.body.firstName, "lastName": req.body.lastName}, function(response) {
    console.log(response);
    if (!response || response.totalCount == 0) {
      // If client is not already registered
      mongo.insert(req.body, function(response, error) {
        //TODO: change this accordingly to PROD or dev environment
        addHeaderCORS(res);
        if (!error) res.status(200).send(response);
        else res.status(500).send(error);
     });
   } else {
     //TODO: change this accordingly to PROD or dev environment
     addHeaderCORS(res);
     res.status(500).json("A client with same First and Last Name already exists on the system");
   }
  });

});

/**
 * Update implemented to return the error
 */
server.put('/api/' + clientsAPIName, function(req,res) {
  //TODO: change this accordingly to PROD or dev environment
  addHeaderCORS(res);
  res.status(500).json("This is an illegal update. It requires an :id");
});

/**
 * Update an existing client
 */
server.put('/api/' + clientsAPIName + '/:id', function(req,res) {
  console.log('executing PUT' + req.body.firstName);
  mongo.update({"_id" : ObjectId(req.params.id)}, req.body, function(response, error) {
    //TODO: change this accordingly to PROD or dev environment
    addHeaderCORS(res);
    if (!error) res.status(200).send(response);
    else res.status(500).send(error);
  });
});

/**
 * Update an existing client
 */
server.delete('/api/' + clientsAPIName + '/:id', function(req,res) {
  mongo.removeById(req.params.id, function(response, error) {
    //TODO: change this accordingly to PROD or dev environment
    addHeaderCORS(res);
    if (!error) res.status(200).send(response);
    else res.status(500).send(error);
  });
});

//application
server.get('*', function(req,res) {
  res.sendfile('./dist/index.html');
});
