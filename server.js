var TwitterPackage = require('twitter');

var secret = {
 consumer_key: 'ZzLaC9QhafaSbS2Q3KFk2EnQk',
 consumer_secret: 'N4fV1oUtcasMEITKxn9wyRIiag1aD818OElmShYNjN2p7ge2Tz',
 access_token_key: '588032771-JER2m2iEf1zwPCrN57FsswlyBk4bvnjLCTvJp6bU',
 access_token_secret: 'bkIbetH7tdZSF1IVKQYpAlPbN5guO46z4H3ZRGDv6XuWy'
};

var Twitter = new TwitterPackage(secret);

// Twitter.post('statuses/update', {status: 'This is a sample automated Tweet'}, function(error, tweet, response) {
// 	if(error){
// 	  console.log(error.body);
// 	} // Tweet body.
// 	console.log(response); // Raw response object.
// });

// Twitter.get('favorites/list', function(error, tweet, response) {
// 	if(error) {
// 		console.log("error");
// 	}
// 	// console.log(tweet);
// 	for(var data in tweet) {
// 		console.log(tweet[data].text);
// 		console.log(tweet[data].user.screen_name);
// 	}
// });

// Twitter.get('trends/closest', {lat: '23.353353', long: '45.997038'}, function(error, tweet, response) {
// 	if(error) console.log('error');
// 	console.log(tweet);
// });

Twitter.get('statuses/user_timeline', {screen_name: 'JavaScriptDaily'}, function(error, tweet, response) {
	if(error) console.log(error);
	var count = 0;
	//console.log(tweet);
	for(var data in tweet) {
		console.log(tweet[data].text);
		console.log(count++);
		console.log('---------------------------------');
	}
});