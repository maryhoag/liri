//require request
var request = require('request');
var twitterKeys = require('/keys.js');
//var http = require('http'); I don't think we need this. Overly complicated for the task

//gather info

var userInput = process.argv;
var task = userInput[2];
var question = userInput[3];

//leverage code from last repo for multi-word question
if(process.argv.length >= 4) {
	for(i = 4; i < process.argv.length; i++) {
		task += '+' + userInput[i];
	}
}

console.log(task);




//switch leverage example code from Sean

//functions

//my-tweets last 20 tweets
var tweets = function() {
	
	var twitterUrl = 'https://api.twitter.com/1.1/search/tweets.json?q=' + task + '&result_type=recent&count=20';
	console.log(twitterUrl);

};


//spotify-this-song artist, song name, preview link, album name, song name
//default: what's my age again 
var song = function() {
	//and what is the callback uri???? 
	
	var songUrl = 'https://api.spotify.com/v1/search!query=' + task + '&type=track';
	console.log(songUrl);

};


//movie-this title, year, rating, country, language,  plot, actors, rotten tomaotes rating, RT url
//default Mr Nobody
var movie = function() {

	//API url
	var queryUrl = 'http://www.omdbapi.com/?t=' + task +'&y=&plot=short&r=json';

	// This line is just to help us debug against the actual URL.  
	console.log(queryUrl)

	//default Mr Nobody or Cyrano

};



//do-what-it-says use random.txt for request
var says = function() {
	var rickroll = //API request
};


//log.txt append request and output
