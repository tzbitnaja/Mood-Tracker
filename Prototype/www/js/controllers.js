angular.module('app.controllers', ['ionic'])

.controller('homeCtrl', function($scope) {

})

.controller('moodLogCtrl', function($scope) {
  $scope.MoodList = [{
        mood: 'Angry',
        trigger: '',
        comment: ''
      }, {
        mood: 'Sad',
        trigger: '',
        comment: ''
      }, {
        mood: 'Happy',
        trigger: '',
        comment: ''
      }, {
        mood: 'Stressed',
        trigger: '',
        comment: ''
      }, {
        mood: 'Hungry',
        trigger: '',
        comment: ''
      }, {
        mood: 'Anxious',
        trigger: '',
        comment: ''
      },
      {
        mood: 'Jealous',
        trigger: '',
        comment: ''
      },
      {
        mood: 'Depressed',
        trigger: '',
        comment: ''
      },
      {
        mood: 'Tired',
        trigger: '',
        comment: ''
      }];

      $scope.AddMood = function (data) {
      $scope.MoodList.push({
        mood: data.newMood,
        trigger: data.newTrigger,
        comment: data.newComment
      });
      data.newItem = '';
    };
})

.controller('trackProgressCtrl', function($scope) {

})

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
