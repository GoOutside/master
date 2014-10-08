// config/auth.js

// expose our config directly to our application using module.exports
var User = require('../models/User');
var jwt = require('jwt-simple');

module.exports = function(app) {
  var jwtauth = {};

  jwtauth.auth = function(req, res, next) {
    var token = (req.body && req.body.jwt_token) || req.headers.jwt;

    if(!token) {
      return res.send(401, {'msg': 'no token specified'});
    }
    var decoded = jwt.decode(taken, app.get('jwtTokenSecret'));
    User.findOne({'_id': decided.iss}, function(err, user) {
      if(err) {
        return res.send(500, err);
      }
      if(!user) {
        return res.send(401); ///let's add a message to this later
      }
      req.user = user;
      return next();
    });
  };

};
