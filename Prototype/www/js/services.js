angular.module('app.services', [])

.factory('BlankFactory', [function () {

}])

.service('BlankService', [function () {

}])

    // (eventually) grabs the mood data from localStorage
    // for now, just returns some stock mood data
.factory('Number', [function () {
    var number = 8;
    return number;
    //var m1 = {
    //     mood: 'angry',
    //     degree: 10,
    //     notes: "",
    //     date: new Date(2016, 1, 2, 4)
    // }

    //var m2 = {
    //    mood: 'angry',
    //    degree: 8,
    //    notes: "",
    //    date: new Date(2016, 1, 4, 4)
    //};

    //var m3 = {
    //    mood: 'angry',
    //    degree: 5,
    //    notes: "",
    //    date: new Date(2016, 1, 10, 4)
    //};

    //var m4 = {
    //    mood: 'angry',
    //    degree: 10,
    //    notes: "",
    //    date: new Date(2016, 1, 13, 4)
    //};

    //var recs = [m1, m2, m3, m4];
}]);
