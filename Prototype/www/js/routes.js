angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.moodLog'
      2) Using $state.go programatically:
        $state.go('tabsController.moodLog');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.moodLog', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/moodLog.html',
        controller: 'moodLogCtrl'
      },
      'tab2': {
        templateUrl: 'templates/moodLog.html',
        controller: 'moodLogCtrl'
      }
    }
  })

  .state('tabsController.trackProgress', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/trackProgress.html',
        controller: 'trackProgressCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});