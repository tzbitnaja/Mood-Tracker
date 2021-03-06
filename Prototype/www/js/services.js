angular.module('app.services', [])

.factory('BlankFactory', [function () {

}])

.service('BlankService', [function () {

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

    //annotate mood
    this.annotateMoodLog = function(MoodLogEntry, annotation){
        var mood_data = localStorage.getItem('moodData');
        var mood_data_temp = JSON.parse(mood_data);
        var entry_index = -1;
        //find index of log entry
        for (var i=0;i<mood_data_temp.length;i++){
            if (mood_data_temp[i]['mood'] === MoodLogEntry['mood']
                && mood_data_temp[i]['range'] === MoodLogEntry['range']
                && mood_data_temp[i]['behavior'] === MoodLogEntry['behavior']
                && mood_data_temp[i]['trigger'] === MoodLogEntry['trigger']
                && mood_data_temp[i]['beliefs'] === MoodLogEntry['beliefs']
                && mood_data_temp[i]['comments'] === MoodLogEntry['comments']){

                entry_index = i;
                break;
            }
        }
        console.log(entry_index);
        
        // add annoation
        mood_data_temp[entry_index]['comments'] += " ,"+annotation;
        //save annotation to storage
        localStorage.setItem('moodData', JSON.stringify(mood_data_temp));

    }

}])

.factory('CreateMoodLogEntryService', [function(){
    // "use strict";

	//a mood log entry
	//todo: time of creation...etc.
	/*class MoodLogEntry{
		constructor(mood, range, trigger, beliefs, behavior, comments){
			this.mood = mood;
			this.range = range;
			this.trigger = trigger;
			this.beliefs = beliefs;
			this.behavior = behavior;
			this.comments = comments;
			// this.timestamp = //time function here
		}
	}*/

	//returns a new instance of MoodLogEntry with given params
	return {
        createMoodLogEntry : function(mood, range, trigger, beliefs, behavior, comments){
    		return {
                mood : mood,
                range : range,
                trigger : trigger,
                beliefs : beliefs,
                behavior : behavior,
                comments : comments
            };
    	}
    }

}])

    // (eventually) grabs the mood data from localStorage
    // for now, just returns some stock mood data
.factory('GetChartData', [function () {
    // some blahblahblah random generated data
    "use strict";
    var recs = [
    {
        mood: 'angry',
        degree: 10,
        notes: "",
        date: new Date(2016, 1, 2)
    },

    {
        mood: 'angry',
        degree: 10,
        notes: "",
        date: new Date(2016, 1, 2)
    },

    {
        mood: 'angry',
        degree: 10,
        notes: "",
        date: new Date(2016, 1, 2)
    },

    {
        mood: 'angry',
        degree: 8,
        notes: "",
        date: new Date(2016, 1, 4)
    },

   {
       mood: 'angry',
       degree: 8,
       notes: "",
       date: new Date(2016, 1, 4)
   },

   {
       mood: 'hungry',
       degree: 8,
       notes: "",
       date: new Date(2016, 1, 4)
   },

   {
       mood: 'happy',
       degree: 4,
       notes: "",
       date: new Date(2016, 1, 4)
   },

   {
       mood: 'angry',
       degree: 5,
       notes: "",
       date: new Date(2016, 1, 10)
   },

     {
         mood: 'angry',
         degree: 5,
         notes: "",
         date: new Date(2016, 1, 10)
     },

     {
         mood: 'happy',
         degree: 5,
         notes: "",
         date: new Date(2016, 1, 10)
     },

     {
         mood: 'sad',
         degree: 5,
         notes: "",
         date: new Date(2016, 1, 10)
     },

    {
        mood: 'sad',
        degree: 10,
        notes: "",
        date: new Date(2016, 1, 13)
    }
    ];

    // the data as an array, this is how the factory would
    // first get the data
    // var recs = [m1, m2, m3, m4];

    // the object that gets returned
    var chartData = {
        labels: [],
        series: [],
        data: []
    }

    // temporary arrays for getting the data into a usable form
    var dates = new Array(recs.length);
    var moods = new Array(recs.length);
    for (var i = 0; i < recs.length; i++) {
        dates[i] = recs[i].date;
        moods[i] = recs[i].mood;
    }

    // sorts the data, then copies over single instances of any duplicate
    // dates or moods
    // dates.sort();
    moods.sort();
    chartData.labels.push(dates[0]);
    chartData.series.push(moods[0]);
    for (var i = 1; i < dates.length; i++) {
        if (dates[i].getTime() != chartData.labels[chartData.labels.length - 1].getTime())
            chartData.labels.push(dates[i]);
        if (moods[i] != chartData.series[chartData.series.length - 1])
            chartData.series.push(moods[i]);
    }

    // populate the chart data with zeros.  this is here so that the data lines up with
    // the labels, even when a mood isn't experienced on a given day
    for (var i = 0; i < chartData.series.length; i++) {
        chartData.data.push([]);
        for (var j = 0; j < chartData.labels.length; j++) {
            chartData.data[i].push(0);
        }
    }
    // i iterates through mood records
    for (var i = 0; i < recs.length; i++) {
        // j iterates through dates
        for (var j = 0; j < chartData.labels.length; j++) {
            // if mood record i has a date that matches date j
            if (recs[i].date.getTime() == chartData.labels[j].getTime()) {
                // k iterates through mood names
                for (var k = 0; k < chartData.series.length; k++) {
                    // if mood record i has a mood that matches mood k
                    if (recs[i].mood == chartData.series[k]) {
                        chartData.data[k][j] += recs[i].degree;
                        break;
                    }
                }
                break;

            }
        }
    }

    // changes the date format to something more palatable
    for (var i = 0; i < chartData.labels.length; i++) {
        chartData.labels[i] = chartData.labels[i].getMonth() + 1 + "/" + chartData.labels[i].getDate() + "/" + chartData.labels[i].getFullYear();
    }
    return chartData;
}]);
