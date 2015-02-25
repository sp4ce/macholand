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
.controller('CameraCtrl', ['$scope', '$rootScope', 'Camera', 'Mailer', function(
    $scope, $rootScope, Camera, Mailer) {

    // Initial status of the UI.
    $scope.sendVisible = false;
    $scope.loaderVisible = false;
    $scope.confirmationVisible = false;
    $scope.errorVisible = false;
    $scope.photo = {comment: '', uri: ''};
    //$scope.photo.uri = 'http://i.imgur.com/xdpWk3O.png';

    // To start the camera when the user click on the tab button.
    $scope.startCamera = function() {
        Camera.start($rootScope);
    };

    // Display the image when the camera is done.
    $rootScope.$on('picture', function(e, imageURI) {
        $scope.photo.uri = imageURI;
        $scope.sendVisible = true;
        $scope.loaderVisible = false;
        $scope.confirmationVisible = false;
        $scope.errorVisible = false;
    });

    $scope.send = function() {
        $scope.sendVisible = false;
        $scope.loaderVisible = true;
        Mailer.send($scope.photo.uri, $scope.photo.comment).then(
            function() {
                $scope.loaderVisible = false;
                $scope.confirmationVisible = true;
            },
            function(error) {
                $scope.loaderVisible = false;
                $scope.errorVisible = true;
            }
        );
    };
}])
;
