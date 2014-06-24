'use strict';

var express = require('express');
var https = require('https');
// var http = require('http');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var passport = require('passport');
// var flash = require('connect-flash');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');
var fs = require('fs');

//var configDB = require('./config/database.js');

//mongoose.connect(configDB.url);

var app = express();

var jwtauth = require('./config/auth')(app);

app.use(bodyparser.json());
app.use(express.static(__dirname + '/client'));
app.use(passport.initialize());

app.set('jwtTokenSecret', process.env.JWT_SECRET || 'takeahiketakeahiketakeahike');
require('./config/passport')(passport);
require('./routes/routes')(app, passport);


var options = {
  key: fs.readFileSync('config/server.key'),
  cert: fs.readFileSync('config/server.crt')
};

mongoose.connect('mongodb://localhost/go-outside');

var server = https.createServer(options, app);
server.listen(process.env.PORT || 3000, function() {
  console.log('server running on port: ' + process.env.PORT || 3000);
});

// app.set('port', process.env.PORT || 3000);
// app.set('apiBase', '/api/v0.0.1');

// app.use(logger('dev'));
// app.use(cookieParser());

// app.set('view engine', 'hbs');

// //app.use(session({secret: 'gohikegohikegohike'})); // we can use secret key here
// app.use(passport.session());
// app.use(flash());

// require('./routes/routes.js')(app, passport);
// require('./config/passport')(passport);

// var server = http.createServer(app);
// server.listen(app.get('port'), function() {
//   console.log('Server runnning on ' + app.get('port'));
//});
