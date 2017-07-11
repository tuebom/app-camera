app.controller('MainCtrl', function ($scope) {

});

app.controller('PictureCtrl', function ($scope, $routeParams) {

    $scope.takePicture = function () {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA
      };

      // udpate camera image directive
      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.cameraimage = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        console.log('Failed because: ');
		console.log(err);
      });
    };

});

app.controller('VideoCtrl', function ($scope, $location) {

});

app.controller('UploadCtrl', function ($scope, $cordovaFileTransfer) {

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