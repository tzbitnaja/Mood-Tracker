angular.module('app.controllers', [])

.controller('homeCtrl', function($scope) {

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

.controller('logMoodCtrl', function($scope, $ionicPopup, $timeout) {

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
})

.controller('moodLogCtrl', function($scope) {

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

})

.controller('trackProgressCtrl', function($scope) {

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

//controller for a modal, thinking about using it for submit mood
.controller('modalController', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });

});
