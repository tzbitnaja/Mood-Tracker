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
   
.controller('moodLogCtrl', ['$scope', 'MoodLogService','$ionicPopup', function($scope, MoodLogService, $ionicPopup) {
	//display the mood in moodLog.html
	$scope.entries = MoodLogService.getMoodData();
	//popup to add annotations to a mood log
	$scope.annotation = {};
	$scope.annotateLog = function(entry){ 
		//.annotateMoodLog(entry, "hey");
		console.log("annotateLog(), pressed");
		$ionicPopup.show({
	     template: '<input type="text" ng-model="annotation.text">', //input for annotation
	     title: 'Annotate Mood Log',
	     subTitle: 'Please enter your annotation.',
	     scope: $scope,
	     buttons: [
	       { text: 'Cancel' }, //cancel input
	       {
	         text: '<b>Save</b>', //save input (add annotation)
	         type: 'button-positive',
	         onTap: function() {
	           MoodLogService.annotateMoodLog(entry, $scope.annotation.text); //add the annotation
	           $scope.annotation.text = ""; //reset text input so it's clear for next annotation
	         }
	       },
	     ]
	   });
	}; //end popup
}])
      
.controller('trackProgressCtrl', function($scope) {

})
 