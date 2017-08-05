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
      // navigator.camera.getPicture(options).then(function (imageData) {
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
      $scope.filepath = mediaFiles[0].fullPath;
      
    }, function (message) {
      alert('Failed because: ' + message);
      
    }, {limit: 1});
  }

  $scope.uploadPicture = function () {
  
    var options = new FileUploadOptions();
    options.fileKey = "userfile";
    options.fileName = $scope.filepath.substr($scope.filepath.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    options.chunkedMode = false;

    var params = {};
    // params.value1 = "test";
    // params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload($scope.filepath, encodeURI("http://212.24.111.23/upload.php"), function (r) { //fileURL
        console.log("Code = " + r.response.responseCode);
        console.log("Response = " + r.response.message);
        //console.log("Sent = " + r.bytesSent);
        
        alert(r.response.message);
        
    }, function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
        
    }, options);
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
      
      $scope.filepath = s[0].fullPath;
      
    }, function (e) {
      console.log("capture error: "+JSON.stringify(e));
      
    }, {limit: 1});
	};

  
  $scope.uploadVideo = function () {
  
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = $scope.filepath.substr($scope.filepath.lastIndexOf('/') + 1);
    options.mimeType = "video/mp4";
    options.chunkedMode = false;

    var params = {};
    // params.value1 = "test";
    // params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload($scope.filepath, encodeURI("http://212.24.111.23/upload.php"), function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.message);
        //console.log("Sent = " + r.bytesSent);
        
        alert(r.message);
        
    }, function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
        
    }, options);
  }
})

.controller('UploadPictureCtrl', function ($scope) {

  $scope.uploadPicture = function () {
  
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = $scope.filepath.substr($scope.filepath.lastIndexOf('/') + 1);
    options.mimeType = "image/jpeg";
    options.chunkedMode = false;

    var params = {};
    // params.value1 = "test";
    // params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload($scope.filepath, encodeURI("http://212.24.111.23/upload.php"), function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.message);
        //console.log("Sent = " + r.bytesSent);
        
        alert(r.message);
        
    }, function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
        
    }, options);
  }
})
.controller('UploadVideoCtrl', function ($scope) {

    // $scope.uplaodVideo = function() {
        // var options = {
            // fileKey: "avatar",
            // fileName: "filename.mp4",
            // chunkedMode: false,
            // mimeType: "video/mp4"
        // };
        // $cordovaFileTransfer.upload("http://www.samplewebsite.com/upload", "file:/storage/....mp4", options).then(function(result) {
            // console.log("SUCCESS: " + JSON.stringify(result.response));
        // }, function(err) {
            // console.log("ERROR: " + JSON.stringify(err));
        // }, function (progress) {
            // constant progress updates
        // });
    // }

  
  $scope.uploadVideo = function () {
  
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = $scope.filepath.substr($scope.filepath.lastIndexOf('/') + 1);
    options.mimeType = "video/mp4";
    options.chunkedMode = false;

    var params = {};
    // params.value1 = "test";
    // params.value2 = "param";

    options.params = params;

    var ft = new FileTransfer();
    ft.upload($scope.filepath, encodeURI("http://212.24.111.23/upload.php"), function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.message);
        //console.log("Sent = " + r.bytesSent);
        
        alert(r.message);
        
    }, function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
        
    }, options);
  }

});