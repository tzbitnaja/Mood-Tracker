angular.module('app.controllers', [])

.controller('homeCtrl', function ($scope) {
    $scope.defaultMoods = [{
        mood: 'Angry'
    },
    {
        mood: 'Sad'
    }, {
        mood: 'Happy'
    }, {
        mood: 'Stressed'
    }, {
        mood: 'Hungry'
    }, {
        mood: 'Anxious'
    }, {
        mood: 'Jealous'
    }, {
        mood: 'Depressed'
    }, {
        mood: 'Tired'
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

.controller('logMoodCtrl', function ($scope, $ionicPopup, $timeout) {

})

.controller('moodLogCtrl', function ($scope) {
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

})
    // displays line graphs of mood intensity and date
.controller('trackProgressCtrl', ['$scope', 'MoodRecords', function ($scope, MoodRecords) {
    $scope.recs = MoodRecords
    $scope.someText = $scope.recs[0].mood;

    $scope.labels = $scope.recs.map(function(a) {return a.date.getMonth() + "/" + a.date.getDay() + "/" + a.date.getFullYear()});
    $scope.series;// = $scope.recs.map(function(a) {return a.mood});
    $scope.data = [
       [65, 59, 80, 81, 56, 55, 40],
       [28, 48, 40, 18, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
       console.log(points, evt);
    };
    $scope.moodSelection = function () {
       $scope.data = [
           [10, 12, 15],
           [22, 10, 8]
       ];
    };
}])

//controller for a modal, thinking about using it for submit mood
.controller('modalController', function ($scope, $ionicModal) {
    $ionicModal.fromTemplateUrl('my-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function (modal) {
        $scope.modal = modal;
    });
    $scope.openModal = function () {
        $scope.modal.show();
    };
    $scope.closeModal = function () {
        $scope.modal.hide();
    };
    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function () {
        // Execute action
    });

});
