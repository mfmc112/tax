var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000

server.use(express.static(__dirname + '/dist'));
server.use(bodyParser.json());
server.use(bodyParser.json({type: 'application/vdn.api+json'}));

server.listen(port);
console.log("Tax Smart is up on port " + port);

//application
server.get('*', function(req,res) {
  res.sendfile('./dist/index.html');
});
