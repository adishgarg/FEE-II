const request = require('request');

const options = {
  method: 'GET',
  url: 'https://google-map-places.p.rapidapi.com/maps/api/geocode/json',
  qs: {
    address: 'Chitkara+University',
    language: 'en',
    region: 'en',
    result_type: 'administrative_area_level_1',
    location_type: 'APPROXIMATE'
  },
  headers: {
    'x-rapidapi-key': '0b45f93ecamshbd994d1e672d4fap14a698jsnef9c169c8316',
    'x-rapidapi-host': 'google-map-places.p.rapidapi.com'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});