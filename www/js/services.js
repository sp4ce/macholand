angular.module('macholand.services', [])

// Camera service.
.factory('Camera', ['$q', function($q) {
    return {
        // Return true or false if the camera is ready.
        isReady: function(){
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

;
