angular.module('camera.controllers', [])

.controller('MainCtrl', function ($scope) { //, $cordovaCamera

})

.controller('PictureCtrl', function ($scope) {

  //document.addEventListener('deviceready', function () {
    // $scope.takePicture = function () {
      // var options = {
        // quality: 50,
        // destinationType: destinationType.DATA_URL,
        // sourceType: pictureSource.CAMERA,
        // allowEdit: true,
        // encodingType: Camera.EncodingType.JPEG,
        // targetWidth: 250,
        // targetHeight: 250,
        // popoverOptions: CameraPopoverOptions,
        // saveToPhotoAlbum: false
      // };

      // udpate camera image directive
      // $cordovaCamera.getPicture(options).then(function (imageData) {
        // $scope.cameraimage = "data:image/jpeg;base64," + imageData;
      // }, function (err) {
        // console.log('Failed because: ');
        // console.log(err);
      // });
    // };
  //}, false);

  $scope.takePicture = function () {
  
    navigator.device.capture.captureImage( function(mediaFiles) {
      // var i, path, len;
      // for (i = 0, len = mediaFiles.length; i < len; i += 1) {
          // path = mediaFiles[i].fullPath;
          // do something interesting with the file
      // }
      
      var image = document.getElementById('cameraimage');
      image.src = mediaFiles[0].fullPath;
    }, function (message) {
      alert('Failed because: ' + message);
    }, {limit: 1});
  }

})

.controller('VideoCtrl', function ($scope) {

  $scope.takeVideo = function () {
  
		navigator.device.capture.captureVideo( function (s) {
      console.log("Success");
      console.dir(s[0]);
      var v = "<video controls='controls'>";
      v += "<source src='" + s[0].fullPath + "' type='video/mp4'>";
      v += "</video>";
      document.querySelector("#videoArea").innerHTML = v;
      
    }, function (e) {
      console.log("capture error: "+JSON.stringify(e));
    }, {limit: 1});
	};

})

.controller('UploadPictureCtrl', function ($scope) {

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

})
.controller('UploadVideoCtrl', function ($scope) {

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