//require request
var request = require('request');
var twitterKeys = require('/keys.js');
var fs = require('fs');
//var http = require('http'); I don't think we need this. Overly complicated for the task

//gather info

var userInput = process.argv;
var task = userInput[2];
var question = userInput[3];

//leverage code from last repo for multi-word question
if(process.argv.length >= 4) {
	for(i = 4; i < process.argv.length; i++) {
		question += '+' + userInput[i];
	}
}

console.log(question);


//functions
var log = function(string, string) {
	fs.appendFile('log.txt', question, text);
}

//my-tweets last 20 tweets
var tweets = function(string) {
	if(question == undefined) {
		question = nathanfillion;
	}
	
	var twitterUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=' + question + '&result_type=recent&count=20';
	console.log(twitterUrl);
	request(twitterUrl, function(error, response, body) {
		if(!error && response.statusCode == 200) {
			console.log('tweet');
			var text = JSON.parse(body);
			console.log(text);
			log(question, text);
		}
	})

};


//spotify-this-song artist, song name, preview link, album name, song name
//default: what's my age again 
var song = function(string) {
	//and what is the callback uri???? 
	if( question == undefined) {
		question = "what's my age again"
	}
	
	var songUrl = 'https://api.spotify.com/v1/search!query=' + question + '&type=track';
	console.log(songUrl);
	request(songUrl, function(error, reponse, body) {
		if (!error && response.statusCode == 200) {
			console.log('yay!');
			var songObject = JSON.parse(body);
			var text = 'artist: ' + songObject.artist + ' song name: ' + songObject.title + ' link: ' + songObject.link
			+ ' album: ' + songObject.album + ' song name: ' + songObject.title;
			console.log(text);
			log(question, text);
		}
	})

};


//movie-this title, year, rating, country, language,  plot, actors, rotten tomaotes rating, RT url
//default Mr Nobody
var movie = function(string) {
	if( question == undefined ) {
		question = 'cyrano de bergerac';
	}

	//API url
	var queryUrl = 'http://www.omdbapi.com/?t=' + question +'&y=&plot=short&r=json';

	// This line is just to help us debug against the actual URL.  
	console.log(queryUrl)
	request(queryUrl, function(error, response, body) {
		if (!error && response.statusCode == 200) {
			console.log('it works');
			var movieObject = JSON.parse(body);
			var text = 'title: ' + movieObject.Title + ' year: ' + movieObject.Year + ' rating: ' + movieObject.imdbRating + 
			' country: ' + movieObject.Country + ' language: ' + movieObject.Language + ' plot ' + movieObject.Plot + ' actors: ' +
			movieObject.Actors; // but how??? + ' Rotten Tomatoes Rating '
			console.log(text);
			log(question, text);
		}
	})

};



//do-what-it-says use random.txt for request
var says = function() {
	var rickroll = //API request
	fs.readFile('random.txt', 'utf8', function(err, data) {
		if (err) {
			console.log(err);
		}
		data = question;
		console.log('data');
		spotify-this-song(question);
	})
};


switch(task) {
	case 'movie-this':
		movie(question);
		break;
	case 'my-tweets':
		tweets(question);
		break;
	case 'spotify-this-song':
		song(question);
		break;
	case 'do-what-it-says':
		says();
		break;
	default:
		says();
}


//log.txt append request and output
