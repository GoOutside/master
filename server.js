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


console.log("one");
//Luke
var db = require('./models/db');
console.log(5);
var routes = require('./routes/routes');
console.log(6);
var index = require('./routes/index');

//var morgan  = require('morgan')

//var errorhandler = require('errorhandler');
//var expressHbs = require('express3-handlebars');
console.log("2");
//var configDB = require('./config/database.js');

//mongoose.connect(configDB.url);

var app = express();

var jwtauth = require('./config/auth')(app);

app.use(bodyparser.json());
app.use(express.static(__dirname + '/client'));
app.use(passport.initialize());
console.log('2.5');
//Luke
// app.engine('html', expressHbs({extname:'html', defaultLayout:'index.html'}));
// app.set('view engine', 'html');
//app.use(morgan());

//app.use(errorhandler());

console.log("3");

app.set('jwtTokenSecret', process.env.JWT_SECRET || 'takeahiketakeahiketakeahike');
require('./config/passport')(passport);
require('./routes/routes')(app, passport);

//Luke
//app.get('/', routes.index);

app.get('/api/v1/notes', index.collection);
app.get('/api/v1/notes2', index.index);

app.get('/api/v1/notes4', index.collection2);
app.get('/api/v1/note/:id', index.findById);
app.get('/api/v1/notes5', index.findByLocation);
//app.get('/api/v1/client.js', index.findClient);


var options = {
  key: fs.readFileSync('config/server.key'),
  cert: fs.readFileSync('config/server.crt')
};

mongoose.connect('mongodb://localhost/go-outside');

var server = https.createServer(options, app);
server.listen(3000, function() {
  //console.log('server running on port: ' + process.env.PORT || 3000);
  //console.log(process.env.PORT);
  console.log("3000!!");
});
