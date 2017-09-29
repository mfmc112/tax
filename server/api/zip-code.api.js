// var http = require('http');
var request = require('request');
var BaseApi = require('../core/base-api');
var ResponseDecorator = require('../core/response-decorator');


var ZipCodeApi = function(server) {

  var config = {
    endpoint: '/v1/zipcode',
    doc: 'zipcode'
  };

  server.get(BaseApi.getEndPoint(config.endpoint, ':zipcode'), function(req, res) {

    request('http://maps.googleapis.com/maps/api/geocode/json?address=' + req.params.zipcode, function(error, resp, body){
      if (body.substring(0,1) === "<") res.status(500).json("Error looking up zipcode");
      else {
        if (!error && resp.statusCode == 200 && body && JSON.parse(body).results[0] && JSON.parse(body).results[0].address_components[1] && JSON.parse(body).results[0].address_components[3] ) {
          var response = {
            "city": JSON.parse(body).results[0].address_components[1].long_name,
            "state": JSON.parse(body).results[0].address_components[3].short_name
          }
          res.send(response);
        } else {
          res.status(500).json("Error looking up zipcode");
        }
      }
    });
  });

  BaseApi.logRegistered(config.endpoint, ':zipcode');
};

module.exports = ZipCodeApi;
