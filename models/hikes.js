/*var mongoose = require('mongoose');
var assert = require('assert');

exports.hikelist = function hikelist(hname,callback){

 var Hike = mongoose.model( 'Hike' );

 Hike.find({geometry:{$near:{$geometry:{type:'Point',coordinates:[-120.4348,47.2813]},$maxDistance:500}}}, function (err, hikes) {
  if(err){
   console.log(err);
  }else{
   console.log('Here da Hikes: ');
   console.dir(hikes);
   callback('',hikes);
   //assert.equal(hikes.length, 2);
  }
 });// end Hike.find
};// end exports.hikelist
*/

