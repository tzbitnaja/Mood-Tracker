angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {

})
   
.controller('logMoodCtrl', ['$scope', 'MoodLogService','CreateMoodLogEntryService', function($scope, MoodLogService,CreateMoodLogEntryService) {

	$scope.mood ='';
	$scope.range = '';
	$scope.trigger ='';
	$scope.beliefs ='';
	$scope.behavior ='';
	$scope.comments ='';

	//when submit button clicked (in logMood.html there's a reference to this method)
	$scope.submitLog = function(){ 
		MoodLogService.addMoodData(CreateMoodLogEntryService.createMoodLogEntry(this.mood, this.range, this.trigger, this.beliefs, this.behavior, this.comments));
		console.log("Submit(). here's the data in our MoodLog:");
		console.log(MoodLogService.getMoodData());
	};
}])
   
.controller('moodLogCtrl', ['$scope', 'MoodLogService', function($scope, MoodLogService) {
	//display the mood in moodLog.html
	$scope.entries = MoodLogService.getMoodData();

}])
      
.controller('trackProgressCtrl', function($scope) {

})
 