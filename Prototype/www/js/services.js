angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('MoodLogService', [function(){

	//call this service to update the logs we have

	//moodData contains MoodLogEntries, which are created by using the CreateMoodLogEntryService
	// var moodData = [];

	//get the full list of logs, in order of their creation
	this.getMoodData = function(){
		var retrievedObject = localStorage.getItem('moodData');
		if(retrievedObject === null){
			var empty = [];
			localStorage.setItem('moodData', JSON.stringify(empty));
			retrievedObject = localStorage.getItem('moodData');
		}
		console.log("hey")
		return JSON.parse(retrievedObject);
	}

	//add new log to the data
	this.addMoodData = function(mood){
		var retrievedObject = localStorage.getItem('moodData');
		if(retrievedObject === null){
			var empty = [];
			localStorage.setItem('moodData', JSON.stringify(empty));
			retrievedObject = localStorage.getItem('moodData');
		}
		var moodDataTemp = JSON.parse(retrievedObject);
		moodDataTemp.push(mood);
		localStorage.setItem('moodData', JSON.stringify(moodDataTemp));
	}



}])

.service('CreateMoodLogEntryService', [function(){

	//a mood log entry
	//todo: time of creation...etc.
	class MoodLogEntry{
		constructor(mood, range, trigger, beliefs, behavior, comments){
			this.mood = mood;
			this.range = range;
			this.trigger = trigger;
			this.beliefs = beliefs;
			this.behavior = behavior;
			this.comments = comments;
			// this.timestamp = //time function here
		}
	}

	//returns a new instance of MoodLogEntry with given params
	this.createMoodLogEntry = function(mood, range, trigger, beliefs, behavior, comments){
		return new MoodLogEntry(mood, range, trigger, beliefs, behavior, comments);
	}

}])



;
