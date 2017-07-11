'use strict';

function showAlert(message, title) {
  if (navigator.notification) {
    navigator.notification.alert(message, null, title, 'OK');
  } else {
    alert(title ? (title + ": " + message) : message);
  }
}

var pictureSource; 
var destinationType; 
var mediaType;

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
        document.addEventListener('backbutton', this.onBackButton, false);

        pictureSource = navigator.camera.PictureSourceType;
        destinationType = navigator.camera.DestinationType;
        mediaType = navigator.camera.MediaType;
        
     },
      onBackButton: function(e) {
        e.preventDefault();
        
        if (history.length > 0)
          window.history.back();
        } else {
          navigator.app.exitApp();
        }
      }
     /*report: function(id) { 
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

var app = angular.module('SPAApp', []);

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
    .when('/upload', {
      templateUrl: 'partials/upload.html',
      controller: 'UploadCtrl'
    })
    .when('/setting', {
      templateUrl: 'partials/setting.html',
      controller: 'SettingCtrl'
    })
    /*.when('/create', {
      templateUrl: 'partials/create.html',
      controller: 'CreateCtrl'
    })
    .when('/details/:alarmId', {
      templateUrl: 'partials/details.html',
      controller: 'DetailsCtrl'
    })*/
    .otherwise({
      redirectTo: '/'
    });
});
