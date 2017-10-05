var ObjectId = require('mongodb').ObjectID;
var mongoose = require('mongoose');

var url = process.env.MONGODB_URI; //'mongodb://localhost:27017/heroku_f7693k00';
mongoose.connect(url);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("DB connected successfully");
});
