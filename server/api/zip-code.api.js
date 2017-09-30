// var http = require('http');
var request = require('request');
var BaseApi = require('../core/base-api');
var libxmljs = require("libxmljs");
var ResponseDecorator = require('../core/response-decorator');
var _ = require("lodash");

var ZipCodeApi = function(server) {

  var config = {
    endpoint: '/v1/zipcode',
    doc: 'zipcode'
  };

  server.put(BaseApi.getEndPoint(config.endpoint), function(req,res) {
    res.status(500).json("This is an illegal request. It requires an :zicode");
  });

  server.get(BaseApi.getEndPoint(config.endpoint, ':zipcode'), function(req, res) {
    if (req.params.zipcode.length > 5) {
      res.status(500).json("Invalid zipcode");
      return;
    }
    var url = 'http://production.shippingapis.com/ShippingAPI.dll?API=CityStateLookup&XML=<CityStateLookupRequest%20USERID="715KJMVI4726"><ZipCode ID= "0"><Zip5>' + req.params.zipcode + '</Zip5></ZipCode></CityStateLookupRequest>';

    request(url, function(error, respXml, body){
      if (!body || body.indexOf("Error") >= 0) {
        res.status(500).json("Error looking up zipcode");
        return;
      }
      var xmlDoc = libxmljs.parseXml(body);
      var city = xmlDoc.get('//City')
      var state = xmlDoc.get('//State')
      if (!city || !state){
        res.status(500).json("Error looking up zipcode");
        return;
      }
      var response = {
        "city": city.text(),
        "state": state.text()
      }
      res.send(response);
    });
  });

  BaseApi.logRegistered(config.endpoint, ':zipcode');
};

module.exports = ZipCodeApi;
