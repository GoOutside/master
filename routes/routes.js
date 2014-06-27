// // app/routes.js

'use strict';

var User = require('../models/User');

module.exports = function (app, passport) {
  app.post('/api/v0_0_1/users', function (req, res) {
    console.log('post route reached');

    User.findOne({'basic.email': req.body.email}, function (err, user){
      console.log('mongo responding');
      console.log(user);
      console.log(req.body.email);

      if(err) {
        return res.json(500, err);
      }
      if(user) {
        return res.json(409, {'msg': 'email in use'});
      }
      var newUser = new User();
      newUser.basic.email = req.body.email;
      newUser.basic.password = newUser.generateHash(req.body.password);

      newUser.save(function (err, resUser) {
        if(err) {
          return res.json(500, err);
        }
        return res.json({'jwt': resUser.createJWTToken(app)});
      });
    });
  });

  app.get('/api/v0_0_1/users',
    passport.authenticate('basic', {
      session: false,
      failureRedirect: '/#/login'
    }),
    function (req, res) {
      return res.json({'jwt': req.user.createJWTToken(app)});
  });

};




//   // =====================================
//   // HOME PAGE (with login links) ========
//   // =====================================
//   app.get('/', function(req, res) {
//     res.render('user-home.html'); // load the home view file
//   });

//   // =====================================
//   // LOGIN ===============================
//   // =====================================
//   // show the login form
//   app.get('/login', function(req, res) {

//     // render the page and pass in any flash data if it exists
//     res.render('index.html', { message: req.flash('loginMessage') });
//   });

//   // process the login form
//   // app.post('/login', do all our passport stuff here);

//   // process the login form
//   app.post('/login', passport.authenticate('local-login', {
//     successRedirect : '/profile', // redirect to the secure profile section
//     failureRedirect : '/login', // redirect back to the signup page if there is an error
//     failureFlash : true // allow flash messages
//   }));

//   // =====================================
//   // FACEBOOK ROUTES =====================
//   // =====================================
//   // route for facebook authentication and login
//   app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

//   // handle the callback after facebook has authenticated the user
//   app.get('/auth/facebook/callback',
//     passport.authenticate('facebook', {
//       successRedirect : '/profile',
//       failureRedirect : '/'
//     }));

//   // route for logging out
//   app.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
//   });

//   // =====================================
//   // TWITTER ROUTES ======================
//   // =====================================
//   // route for twitter authentication and login
//   app.get('/auth/twitter', passport.authenticate('twitter'));

//   // handle the callback after twitter has authenticated the user
//   app.get('/auth/twitter/callback',
//     passport.authenticate('twitter', {
//       successRedirect : '/profile',
//       failureRedirect : '/'
//     }
//     ));

//   // =====================================
//   // SIGNUP ==============================
//   // =====================================
//   // show the signup form
//   app.get('/signup', function(req, res) {

//     // render the page and pass in any flash data if it exists
//     res.render('index.html', { message: req.flash('signupMessage') });
//   });

//   // process the signup form
//   // app.post('/signup', do all our passport stuff here);
//   // process the signup form

//   app.post('/signup', passport.authenticate('local-signup', {
//   successRedirect : '/profile', // redirect to the secure profile section
//   failureRedirect : '/signup', // redirect back to the signup page if there is an error
//   failureFlash : true // allow flash messages
//   }));

//   // =====================================
//   // DETAILS VIEW SECTION =====================
//   // =====================================
//   // we will want this protected so you have to be logged in to visit
//   // we will use route middleware to verify this (the isLoggedIn function)
//   app.get('/details', isLoggedIn, function(req, res) {
//     res.render('activity-home', {
//       user : req.user // get the user out of session and pass to template
//     });
//   });

//   // =====================================
//   // LOGOUT ==============================
//   // =====================================
//   app.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
//   });
// };

  // // route middleware to make sure a user is logged in
  // function isLoggedIn(req, res, next) {

  //   // if user is authenticated in the session, carry on
  //   if (req.isAuthenticated()){
  //     return next();
  //   }
  //   // if they aren't redirect them to the home page
  //   res.redirect('/');
  // }
