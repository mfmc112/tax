var express = require('express');
var server = express();
var bodyParser = require('body-parser');

var db = require('./server/core/mgsDB');
var User = require('./server/core/schemas/user-schema.js');
var Client = require('./server/core/schemas/client-schema.js');
var ResponseDecorator = require('./server/core/response-decorator');

var port = process.env.PORT || 5000
server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vdn.api+json'}));
server.listen(port);
console.log("Tax Smart is up and running");

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

// The APIs need to be loaded after the server uses the body parser and the headers
require('./server/api/clients.api')(server);
require('./server/api/users.api')(server);
require('./server/api/personal-info.api')(server);
require('./server/api/application.api')(server);

//application
server.get('*', function(req,res) {
  res.sendfile('./dist/index.html');
});
