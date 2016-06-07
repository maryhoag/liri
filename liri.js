//require request
var request = require('request');
var twitterKeys = require('/keys.js');

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


//spotify-this-song artist, song name, preview link, album name, song name
//default: what's my age again 


//movie-this title, year, rating, country, language,  plot, actors, rotten tomaotes rating, RT url
//default Mr Nobody



//do-what-it-says use random.txt for request


//log.txt append request and output
