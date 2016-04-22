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
.controller('trackProgressCtrl', ['$scope', 'GetChartData', function ($scope, GetChartData) {
    $scope.chartData = GetChartData;

    $scope.labels = $scope.chartData.labels;
    $scope.series = $scope.chartData.series;
    $scope.data = $scope.chartData.data;
    $scope.someText = $scope.chartData.series;
    $scope.onClick = function (points, evt) {
       console.log(points, evt);
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
