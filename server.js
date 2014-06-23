'use strict';

var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

//var configDB = require('./config/database.js');

//mongoose.connect(configDB.url);

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('apiBase', '/api/v0.0.1');

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyparser.json());

app.set('view engine', 'hbs');

//app.use(session({secret: 'gohikegohikegohike'})); // we can use secret key here
app.use(express.static(__dirname + '/client'));
//app.use(passport.initialize());
//app.use(passport.session());
//app.use(flash());

//require('./routes/routes.js')(app, passport);
//require('./config/passport')(passport);

var server = http.createServer(app);
server.listen(app.get('port'), function() {
  console.log('Server runnning on ' + app.get('port'));
});
