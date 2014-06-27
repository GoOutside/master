var mongoose = require('mongoose');

var hikeSchema = new mongoose.Schema({
	type: String,
	geometry: {
    type: mongoose.Schema.Types.Mixed,
    coordinates: { type: mongoose.Schema.Types.Mixed, index: true}
	},
	properties: {
		rating: [String],
		length: String,
		kml: String,
		features: String,
		name: String,
		lat: Number,
		lng: Number,
		elevGain: Number,
		id: String,
		elevMax: Number
	}
});

//mongoose.model('Hike', hikeSchema, 'hikes6');
module.exports = mongoose.model('Hike', hikeSchema, 'hikes6');
/*
hikeSchema.methods.rateHike = function(userRating) {
	this.properties.rating.push(userRating);
} 
*/

/*
mongoose.connect( 'mongodb://localhost/test', function (err, db) {
  if(err) return console.dir(err)
  //var collection = db.collection('hikes6');
  hikes6.collection.ensureIndex( { geometry : "2dsphere" }, function(err, result) {
    if(err) return console.dir(err);
  });
});*/
