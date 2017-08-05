'use strict';

function showAlert(message, title) {
  if (navigator.notification) {
    navigator.notification.alert(message, null, title, 'OK');
  } else {
    alert(title ? (title + ": " + message) : message);
  }
}

// var pictureSource; 
// var destinationType; 
// var mediaType;

document.addEventListener("deviceready", init, false);

function init() {
	
  // pictureSource = navigator.camera.PictureSourceType;
  // destinationType = navigator.camera.DestinationType;
  // mediaType = navigator.camera.MediaType;
  
    document.addEventListener("backbutton", function(e){
    
       if($.mobile.activePage.is('#homepage')){
           e.preventDefault();
           navigator.app.exitApp();
       }
       else {
           navigator.app.backHistory()
       }
    }, false);
}		


var PhoneGap = {
     initialize: function() {
         this.bind();
     },
     bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
     },
     deviceready: function() {
         // note that this is an event handler so the scope is that of the event
         // so we need to call app.report(), and not this.report()
        
        //PhoneGap.report('deviceready');
        
     }/*,
     report: function(id) { 
         console.log("PhoneGap Report:" + id);
         // hide the .pending <p> and show the .complete <p>
         // document.querySelector('#' + id + ' .pending').className += ' hide';
         // var completeElem = document.querySelector('#' + id + ' .complete');
         // completeElem.className = completeElem.className.split('hide').join('');
         showAlert('PhoneGap Initialized', 'Message');
     }*/
 };

PhoneGap.initialize();

$(function() {
  FastClick.attach(document.body);
});

var app = angular.module('SPAApp', ['camera.controllers']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/main.html',
      controller: 'MainCtrl'
    })
    .when('/take-picture', {
      templateUrl: 'partials/take-picture.html',
      controller: 'PictureCtrl'
    })
    .when('/take-video', {
      templateUrl: 'partials/take-video.html',
      controller: 'VideoCtrl'
    })
    .when('/upload-picture', {
      templateUrl: 'partials/upload-picture.html',
      controller: 'UploadPictureCtrl'
    })
    .when('/upload-video', {
      templateUrl: 'partials/upload-video.html',
      controller: 'UploadVideoCtrl'
    })
    .when('/setting', {
      templateUrl: 'partials/setting.html',
      controller: 'SettingCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
