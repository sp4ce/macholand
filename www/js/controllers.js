angular.module('macholand.controllers', [])

// The tabs controller, when the tabs are display.
.controller('TabsCtrl', ['$scope', '$rootScope', 'Camera', function($scope, $rootScope, Camera) {

    $scope.startCamera = function() {
        // if the camera is not defined, wair the devide reader event.
        if (!Camera.isReady()) {
            document.addEventListener("deviceready", function() {
                $scope.startCamera();
            }, false);
            return;
        }

        // Take the picture.
        Camera.getPicture({
            quality: 50,
            destinationType: 1, // Camera.DestinationType.FILE_URI,
            sourceType: 1, // Camera.PictureSourceType.CAMERA,
            encodingType: 0, // Camera.EncodingType.JPEG,
        }).then(function(imageURI) {
            // Emit event to tell that a picture was taken.
            $rootScope.$emit('picture', imageURI);
        }, function(err) {
            console.err(err);
        });
    };
}])

// About controller, nothing special here.
.controller('AboutCtrl', function($scope) {})

// The camera controller, to display the taken image and send it.
.controller('CameraCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {

    $rootScope.$on('picture', function(e, imageURI) {
        $scope.picture = imageURI;
    });
}])
;
