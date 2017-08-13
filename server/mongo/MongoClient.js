var MongoClient = require('mongodb').MongoClient;

var url = process.env.MONGODB_URI; //'mongodb://localhost:27017/heroku_f7693k00';
this.db = null;
var self = this;
MongoClient.connect(url, function(err,database) {
    if(err) { console.error(err) }
    self.db = database // once connected, assign the connection to the global variable
    console.log("Connected correctly to server.");
});
