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

  // 'facebookAuth' : {
  //   'clientID'    : '861620270534652', // your App ID
  //   'clientSecret'  : '769b29c1317d5e7e9dc6af4494e69d03', // your App Secret
  //   'callbackURL'   : 'http://localhost:3000/auth/facebook/callback' //to be determined
  // },

  // 'twitterAuth' : {
  //   'consumerKey'     : 'k8LoXMnLanGGKxzRinC6wdKu7',
  //   'consumerSecret'  : 'cnmeh9U3aEDcMmZppKf2f5C9GFGKaGSAGA2iu2NoJsxB5jby7d',
  //   'callbackURL'     : 'http://localhost:8080/auth/twitter/callback'
  // }
};