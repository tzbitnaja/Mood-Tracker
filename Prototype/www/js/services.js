angular.module('app.services', [])

.factory('BlankFactory', [function () {

}])

.service('BlankService', [function () {

}])

    // (eventually) grabs the mood data from localStorage
    // for now, just returns some stock mood data
.factory('GetChartData', [function () {
;
    var m1 = {
        mood: 'angry',
        degree: 10,
        notes: "",
        date: new Date(2016, 1, 2, 4)
    }

    var m2 = {
       mood: 'angry',
       degree: 8,
       notes: "",
       date: new Date(2016, 1, 4, 4)
    };

    var m3 = {
       mood: 'angry',
       degree: 5,
       notes: "",
       date: new Date(2016, 1, 10, 4)
    };

    var m4 = {
       mood: 'sad',
       degree: 10,
       notes: "",
       date: new Date(2016, 1, 13, 4)
    };

    var recs = [m1, m2, m3, m4];
    var chartData = {
        labels: [],
        series: [],
        data: recs
    }

    dates = new Array(recs.length);
    moods = new Array(recs.length);
    for (var i = 0; i < recs.length; i++) {
        dates[i] = recs[i].date;
        moods[i] = recs[i].mood;
    }
    dates.sort();
    moods.sort();
    chartData.labels.push(dates[0]);
    chartData.series.push(moods[0]);
    for (var i = 1; i < dates.length; i++) {
        console.log(chartData.series[chartData.series.length - 1] + " " + moods[i]);
        if (dates[i] != chartData.labels[chartData.labels.length - 1])
            chartData.labels.push(dates[i]);
        if (moods[i] != chartData.series[chartData.series.length - 1])
            chartData.series.push(moods[i]);
    }
    for (var i = 0; i < chartData.labels.length; i++) {
        chartData.labels[i] = chartData.labels[i].getMonth() + "/" + chartData.labels[i].getDay() + "/" + chartData.labels[i].getFullYear();
    }
    return chartData;
}]);
