'use strict';

var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var passport = require('passport');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('apiBase', '/api/v0.0.1');

app.use(bodyparser.json());
app.use(express.static(__dirname + '/client'));
app.use(passport.initialize());

// require('./lib/passport')(passport);

// require('./routes/put something here')(app, passport);
// require('./routes/userRoutes')(app, passport);
// mongoose.connect('mongodb:/localhost/go-outside');

var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Server runnning on ' + app.get('port'));
});
