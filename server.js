var port = process.env.PORT || 5000;
var ACCESS_CONTROL_ORIGIN = process.env.ACCESS_CTR_ORIGIN;
if (!ACCESS_CONTROL_ORIGIN) {
  console.log('Error code 7109 -> Cannot start the server');
  return;
}

var express = require('express');
var server = express();
var bodyParser = require('body-parser');

var db = require('./server/core/mgsDB');
var ResponseDecorator = require('./server/core/response-decorator');

server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vdn.api+json'}));
server.listen(port, function () {
  console.log("Tax Smart is up and running");
});



// Add headers
server.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', ACCESS_CONTROL_ORIGIN);
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.setHeader('X-Content-Type-Options', 'nosniff');

    // Block some of the cross site script. If identified it will block the page to load
    res.setHeader('X-XSS-Protection','1; mode=block');

    // Prevent clickjacking when hacker add a frame into the app
    res.setHeader('X-Frame-Options', 'deny')
    res.setHeader('Content-Security-Policy', 'frame-ancestors \'none\'');

    // Remove the X-Powered-By header.
    res.removeHeader("X-Powered-By");

    // Pass to next layer of middleware
    next();
});

// The APIs need to be loaded after the server uses the body parser and the headers
require('./server/api/clients.api')(server);
require('./server/api/users.api')(server);
require('./server/api/personal-info.api')(server);
require('./server/api/application.api')(server);
require('./server/api/business-code.api')(server);
require('./server/api/zip-code.api')(server);

//application
server.get('*', function(req,res) {
  res.sendfile('./dist/index.html');
});
