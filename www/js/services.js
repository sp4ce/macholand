angular.module('macholand.services', [])

// Camera service.
.factory('Camera', ['$q', function($q) {
    return {
        // Start the camera and be sure that it is ready.
        start: function($scope) {
            // if the camera is not defined, wair the devide reader event.
            if (!this.isReady()) {
                var self = this;
                document.addEventListener("deviceready", function() {
                    self.start($scope);
                }, false);
                return;
            }

            // Take the picture.
            this.getPicture({
                quality: 50,
                destinationType: 1, // Camera.DestinationType.FILE_URI,
                sourceType: 1, // Camera.PictureSourceType.CAMERA,
                encodingType: 0, // Camera.EncodingType.JPEG,
                correctOrientation: true,
            }).then(function(imageURI) {

                // Emit event to tell that a picture was taken.
                $scope.$emit('picture', imageURI);
            }, function(err) {
                console.log(err);
            });
        },

        // Return true or false if the camera is ready.
        isReady: function() {
            return navigator.camera ? true : false;
        },

        // Open the camera feature and return a promise to handle the response.
        getPicture: function(options) {
            // Create the calback handler.
            var q = $q.defer();

            if (navigator.camera) {
                navigator.camera.getPicture(function(result) {
                    q.resolve(result);
                }, function(err) {
                    q.reject(err);
                }, options);

                // Return tthe promise on the callback handler.
                return q.promise;
            }

            // No camera is accessible, return null.
            return null;
        },
    };
}])

.factory('Mailer', ['$q', function($q) {
    return {
        send: function(imageURI, comment) {
            // Remove the protocol part of the URI to have only the path.
            var attachment = imageURI.replace('file://', '');

            // Create the calback handler.
            var q = $q.defer();

            // This mailer works by allowing several thing in gmail
            // https://accounts.google.com/b/0/DisplayUnlockCaptcha
            // https://www.google.com/settings/security/lesssecureapps
            sendmail.send(
                function() {
                    q.resolve();
                },
                function(error) {
                    q.reject(error);
                },
                '[MachoLand] New photo from the app',
                comment,
                'macholandapp@gmail.com', 'geronimo132790',
                'bapt@sp4ce.net', // Destination
                attachment
            );

            // Return tthe promise on the callback handler.
            return q.promise;
        },
    };
}])

;
