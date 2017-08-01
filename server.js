var express = require('express');
var server = express();
var bodyParser = require('body-parser');

server.use(express.static(__dirname + '/project'));
server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vdn.api+json'}));

server.listen();
console.log("Tax Smart is up");

//application
server.get('*', function(req,res) {
  res.sendfile('./project/index.html');
});
