angular.module('app.controllers', [])

.controller('homeCtrl', function($scope, $ionicPopup, $timeout) {

  $scope.showSettings = function() {
  	$scope.data = {}
  	var customPopup = $ionicPopup.show({
  		title: 'Settings',
  		template: 'setting stuff',
  		scope: $scope,
  		buttons: [
  			{ text: 'Cancel' },
  			{ 
  			  text: '<b>Save</b>',
  			  type: 'button-positive'
  			  //onTap
  			},
  		]
  	});
  	customPopup.then(function(res) {

  	})
  };

})

.controller('logMoodCtrl', ['$scope', '$ionicPopup', '$timeout', 'MoodLogService','CreateMoodLogEntryService', function($scope, $ionicPopup, $timeout, MoodLogService, CreateMoodLogEntryService) {
 
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

  $scope.showSettings = function() {
  	$scope.data = {}
  	var customPopup = $ionicPopup.show({
  		title: 'Settings',
  		template: 'Settings Stuff <br> Here\'s an input box:<input type="text" ng-model="data.settings">',
  		scope: $scope,
  		buttons: [
  			{ text: 'Cancel' },
  			{ 
  			  text: '<b>Save</b>',
  			  type: 'button-positive'
  			  //onTap
  			},
  		]
  	});
  	customPopup.then(function(res) {

  	})
  };

  $scope.showCreateNewMood = function() {
  	$scope.data = {}
  	var customPopup = $ionicPopup.show({
  		title: 'Create New Mood',
  		template: 'Enter new mood name<input type="text" ng-model="data.newMoodName">',
  		// positive or negative mood toggle thing
  		scope: $scope,
  		buttons: [
  			{ text: 'Cancel' },
  			{
  			  text: '<b>Add</b>',
  			  type: 'button-positive',
  			  //onTap: function(e)
  			},
  		]
  	});
  	customPopup.then(function(res) {
  		if(res) {
  			console.log('Name has been entered');

  		} else {
  			console.log('Name has not bee entered');
  		}
  	})
  };

  $scope.showSubmit = function() {
  	// should actually check if fields are valid first
  	var alertPopup = $ionicPopup.alert({
  		title: 'Submit',
  		template: 'Mood logged successfully!'
  	});
  	alertPopup.ten(function(res) {
  		console.log('Done');
  	});
  };

  $scope.showCancel = function() {
  	var confirmPopup = $ionicPopup.confirm({
  		title: 'Cancel',
  		template: 'Are you sure you wish to cancel?'
  	});
  	confirmPopup.then(function(res) {
  		if(res) {
  			console.log('You clicked the OK button');
  			//tabsController.select(1);
  		} else {
  			console.log('You clicked the Cancel button');
  		}
  	});
  };

  $scope.defaultMoods = [{
    mood: 'Angry'
  },{
    mood: 'Sad'
  },{
    mood: 'Happy'
  },{
    mood: 'Stressed'
  },{
    mood: 'Hungry'
  },{
    mood: 'Anxious'
  },{
    mood: 'Jealous'
  },{
    mood: 'Depressed'
  },{
    mood: 'Tired'
  }];

  //should this be submit instead?
  $scope.AddMood = function (data) {
	  $scope.MoodList.push({
	    mood: data.newMood,
	    trigger: data.newTrigger,
	    comment: data.newComment
	  });
	  data.newItem = '';
	};
}])

.controller('moodLogCtrl', ['$scope', '$ionicPopup', '$timeout', 'MoodLogService', function($scope, $ionicPopup, $timeout) {

  $scope.showSettings = function() {
  	$scope.data = {}
  	var customPopup = $ionicPopup.show({
  		title: 'Settings',
  		template: 'setting stuff <br> Heres an input box<input type="text" ng-model="data.settings">',
  		scope: $scope,
  		buttons: [
  			{ text: 'Cancel' },
  			{ 
  			  text: '<b>Save</b>',
  			  type: 'button-positive'
  			  //onTap
  			},
  		]
  	});
  	customPopup.then(function(res) {

  	})
  };

  $scope.MoodList = [{
        mood: 'Logged Mood 1',
        trigger: 'Mood trigger 1',
        comment: 'Mood comment 1'
      }, {
        mood: 'Logged Mood 2',
        trigger: '',
        comment: ''
      }, {
        mood: 'Logged Mood 3',
        trigger: '',
        comment: ''
      }];

}])

.controller('trackProgressCtrl', function($scope, $ionicPopup, $timeout) {

  $scope.showSettings = function() {
  	$scope.data = {}
  	var customPopup = $ionicPopup.show({
  		title: 'Settings',
  		template: 'setting stuff',
  		scope: $scope,
  		buttons: [
  			{ text: 'Cancel' },
  			{ 
  			  text: '<b>Save</b>',
  			  type: 'button-positive'
  			  //onTap
  			},
  		]
  	});
  	customPopup.then(function(res) {

  	})
  };
})
 