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
console.log("Tax Smart is up");

/**
 * Get by filter. Currently it can be ID, firstName, lastName and email
 */
server.get('/client', function(req, res) {
  var condition = parser.parseQuery(req.query);
  mongo.find(condition, function(response, error) {
    if (!error) {
      res.send(response);
    } else {
      console.log(error);
      res.status(500).json("Error executing search");
    }
  });
});

/**
 * Get by Id (_id)
 */
server.get('/client/:id', function(req, res) {
  mongo.find({"_id" : ObjectId(req.params.id)},  function(response, error) {
    if (!error) {
      res.send(response);
    } else {
      console.log(error);
      res.status(500).json("Error executing search");
    }
  });
});

/**
 * Create a new client if it already do not exists
 */
server.post('/client', function(req,res) {
  mongo.find({"firstName": req.body.firstName, "lastName": req.body.lastName}, function(response) {
    if (response.length == 0) {
      // If client is not already registered
      mongo.insert(req.body, function(response) {
       res.send(response);
     });
   } else {
     // If client is already registered
     res.status(500).json("A client with same First and Last Name already exists on the system");
   }
  });

});

/**
 * Update implemented to return the error
 */
server.put('/client', function(req,res) {
  res.status(500).json("This is an illegal update. It requires an :id");
});

/**
 * Update an existing client
 */
server.put('/client/:id', function(req,res) {
  // mongo.removeAll(function(response) {
  //   console.log('update client ' + response.firstName);
  //   res.send(response);
  // });
  mongo.update({"_id" : ObjectId(req.params.id)}, req.body, function(response) {
    res.send(response);
  });
});

/**
 * Update an existing client
 */
server.delete('/client/:id', function(req,res) {
  mongo.removeById(req.params.id, function(response) {
    res.send(response);
  });
});

//application
server.get('*', function(req,res) {
  res.sendfile('./dist/index.html');
});

function testConnected() {
  var kristy = {"firstName": "Kristy", "lastName": "Campbell", "middleName":"L", "ssn": "111-111-1111", "itin": "1111111111"};
  var val = {"firstName": "Val", "lastName": "Osipenki", "middleName":"V", "ssn": "2222-2222-2222", "itin": "2222222222"};
  // mongo.find({firstName: 'Kristy'}, function(result){
  //   console.log(result);
  // });
  // mongo.insert({
  //   firstName: 'Kristy',
  //   lastName: 'Campbell',
  //   middleName:'L',
  //   ssn: '111-111-1111',
  //   itin: '1111111111'}, function(res) {
  //     console.log('inserterd one client');
  //     console.log(res);
  //   });

  // mongo.insertArray([val, val], function(res) {
  //     console.log('inserterd one client');
  //     console.log(res);
  //   });

}
setTimeout(testConnected, 1000);
