console.log('This is a bot');

var Twit = require('twit');

//https://github.com/ttezel/twit
var T = new Twit({
	consumer_key: '2rfLTGpR4P5IyxLqa6BGdJAcg',
	consumer_secret: 'rWytvqSFoa4jIefC7ZGmAemikfP50PuXxMfxcIipyk4ZWmgSjr',
	access_token: '3158028681-PvD0TeqVzceZpp6TwN5Zee0D4m8VWogEWP8DVRj',
	access_token_secret: 'NfIsKf5nXnzqvtHFKUIlBYZIOsqo9JJT3hkA6duyA1oci',
});

var params = {
	q: 'rainbow',
	count: 2
}

T.get('search/tweets', params, gotData);

// to get the raw data and tweet info
// https://dev.twitter.com/rest/reference/get/search/tweets
function gotData(errr, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
}
