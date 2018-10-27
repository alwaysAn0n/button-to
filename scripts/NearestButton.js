var geolib = require('geolib');

function NearestButton(userLocation, locations) {
	var found = geolib.findNearest(userLocation, locations, 1)
//	console.log(found);
	if(found['distance']<1000) {
		return [found];
	} else return [];
}

module.exports = NearestButton;
