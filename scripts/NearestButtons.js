var geolib = require('geolib');

function NearestButtons(userLocation, locations, results, maxdist) {
	var i;
	var found = [];
	for (i = 0; i < results; i++) {
		f = geolib.findNearest(userLocation, locations, 1)
		if(f['distance']<maxdist) {
			found.push(f);
			locations.splice(f['key']);
		} else break;
	}
	return found;
}

module.exports = NearestButtons;
