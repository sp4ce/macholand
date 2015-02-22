angular.module('macholand.controllers', [])

.controller('AboutCtrl', function($scope) {})

.controller('CameraCtrl', function($scope) {
//    $scope.takePic = function() {
//        navigator.camera.getPicture(onSuccess, onFail, {
//            quality: 50,
//            destinationType: Camera.DestinationType.FILE_URI,
//            sourceType: 1,
//            encodingType: 0
//        });
//    }
//
//    var onSuccess = function(FILE_URI) {
//        console.log(FILE_URI);
//        $scope.picData = FILE_URI;
//        $scope.$apply();
//    };
//
//    var onFail = function(e) {
//        console.log("On fail " + e);
//    }
//
//    $scope.send = function() {
//        var myImg = $scope.picData;
//        var options = new FileUploadOptions();
//        options.fileKey="post";
//        options.chunkedMode = false;
//        var params = {};
//        params.user_token = localStorage.getItem('auth_token');
//        params.user_email = localStorage.getItem('email');
//        options.params = params;
//        var ft = new FileTransfer();
//        ft.upload(
//            myImg,
//            encodeURI("https://example.com/posts/"),
//            onUploadSuccess, onUploadFail, options);
//    }
})
;
