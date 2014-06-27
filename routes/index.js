/*
 * GET home page.
 */

var hikedata = require('../models/hikes');

var dbData = require('../models/db');


exports.collection = function(req, res) {
 res.setHeader('Content-Type', 'application/json');
 hikedata.find({}, function(err, hikes) {
  if(err) {
    res.send(500, {"error": err});
    return false;
  }
  res.send(hikes);
 });
};

exports.index = function(req, res) {
 var strGroup = 'Feature';
 hikedata.hikelist(strGroup,function(err,hikelist) {
   res.render('index', {
    title: 'NEW TITLE NOW SON',
    hikes: hikelist
   });
 });
};

exports.collection2 = function(req, res) {
 res.setHeader('Content-Type', 'application/json');
 dbData.find({}, function(err, hikes) {
  if(err) {
    res.send(500, {"error": err});
    return false;
  }
  res.send(hikes);
 });
};

exports.findById = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  dbData.findOne({"_id" : req.params.id}, function(err, hike) {
    if(err) {
      res.send(500, {error: err});
      return false;
    }
    res.send(hike);
  });
};

exports.findByLocation = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var latitude = +req.query.paramTwo;
  var longitude = +req.query.paramOne;
  console.log(latitude);
  console.log(longitude);
  console.log(typeof longitude);
  console.log(typeof latitude);
  dbData.find({geometry:{$near:{$geometry:{type:'Point',coordinates:[ latitude, longitude ]},$maxDistance:16093.4}}}, function (err, hikes) {
  //dbData.find({geometry:{$near:{$geometry:{type:'Point',coordinates:[ -122.3360, 47.6233 ]},$maxDistance:5000}}}, function (err, hikes) {
  //dbData.find({"_id" : req.params.id}, function(err, hike) {

    if(err) {
      res.send(500, {error: err});
      return false;
    }
    res.send(hikes);
    console.log("HIIIKES:");
    console.log(hikes);
  });
};

exports.findClient = function(req, res) {

  function find(err, client) {
    if(err) {
      res.send(500, {error: err});
      return false;
    }
    res.send(client);
  };
};
