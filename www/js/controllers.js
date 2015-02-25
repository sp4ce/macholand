angular.module('macholand.controllers', [])

// The tabs controller, when the tabs are display.
.controller('TabsCtrl', ['$scope', '$rootScope', 'Camera', function($scope, $rootScope, Camera) {
    // To start the camera when the user click on the tab button.
    $scope.startCamera = function() {
        Camera.start($rootScope);
    };
}])

// About controller, nothing special here.
.controller('AboutCtrl', function($scope) {})

// The camera controller, to display the taken image and send it.
.controller('CameraCtrl', ['$scope', '$rootScope', 'Camera', function($scope, $rootScope, Camera) {

    // To start the camera when the user click on the tab button.
    $scope.startCamera = function() {
        Camera.start($rootScope);
    };

    // The send button is hidden by default.
    $scope.sendVisible = false;

    // Display the image when the camera is done.
    //$scope.picture = 'http://i.imgur.com/xdpWk3O.png';
    $rootScope.$on('picture', function(e, imageURI) {
        $scope.picture = imageURI;
        $scope.sendVisible = true;
    });
}])
;
