// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'macholand' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'macholand.services' is found in services.js
// 'macholand.controllers' is found in controllers.js
angular.module('macholand', ['ionic', 'macholand.controllers', 'macholand.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:

    .state('tab.camera', {
        url: '/camera',
        views: {
            'tab-camera': {
                templateUrl: 'templates/tab-camera.html',
                controller: 'CameraCtrl',
            },
        },
    })

    .state('tab.about', {
        url: '/about',
        views: {
            'tab-about': {
                templateUrl: 'templates/tab-about.html',
                controller: 'AboutCtrl',
            },
        },
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/camera');

});
