angular.module('camera.controllers', [])

.controller('MainCtrl', function ($scope, $cordovaCamera) {

})

.controller('VideoCtrl', function ($scope, $cordovaCamera) {

})

.controller('PictureCtrl', function ($scope, $cordovaCamera) {

  document.addEventListener('deviceready', function () {
    //$scope.takePicture = function () {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 250,
        targetHeight: 250,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.cameraimage = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        console.log('Failed because: ');
        console.log(err);
      });
    //};
  }, false);

})

.controller('VideoCtrl', function ($scope, $cordovaCamera) {

})

.controller('UploadCtrl', function ($scope, $cordovaFileTransfer) {

    $scope.upload = function() {
        var options = {
            fileKey: "avatar",
            fileName: "filename.mp4",
            chunkedMode: false,
            mimeType: "video/mp4"
        };
        $cordovaFileTransfer.upload("http://www.samplewebsite.com/upload", "file:/storage/....mp4", options).then(function(result) {
            console.log("SUCCESS: " + JSON.stringify(result.response));
        }, function(err) {
            console.log("ERROR: " + JSON.stringify(err));
        }, function (progress) {
            // constant progress updates
        });
    }

});