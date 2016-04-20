angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.service('MoodLogService', [function(){

	//call this service to update the logs we have

	//moodData contains MoodLogEntries, which are created by using the CreateMoodLogEntryService
	this.moodData = [];

	//get the full list of logs, in order of their creation
	this.getMoodData = function(){
		return this.moodData;
	}

	//add new log to the data
	this.addMoodData = function(mood){
		this.moodData.push(mood);
	}

	//annotate mood
	this.annotateMoodLog = function(MoodLogEntry, annotation){
		var entry_index = this.moodData.indexOf(MoodLogEntry);
		if (entry_index != -1){ //Valid index was found
			this.moodData[entry_index].comments += " [ANNOTATION]:"+annotation; //update comments (adding annotation)
		}
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
		}
	}

	//returns a new instance of MoodLogEntry with given params
	this.createMoodLogEntry = function(mood, range, trigger, beliefs, behavior, comments){
		return new MoodLogEntry(mood, range, trigger, beliefs, behavior, comments);
	}

}])



;

