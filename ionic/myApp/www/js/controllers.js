angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FabianoCtrl', function($scope, $http, $stateParams, Chats, $cordovaVibration, $cordovaCamera) {

  $scope.executar = function(){
    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      var image = document.getElementById('myImage');
      image.src = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      // error
    });
  }

  $scope.executare = function(){
    //console.log(cat);
    // Define relevant info
    var privateKey = 'ee7716c3781e6fc90d3c53752f428508178f670719d6cad0';
    var tokens = ['your', 'target', 'tokens'];
    var appId = '95f2ad73';

// Encode your key
    var auth = btoa(privateKey + ':');

// Build the request object
    var req = {
      method: 'POST',
      url: 'https://push.ionic.io/api/v1/push',
      headers: {
        'Content-Type': 'application/json',
        'X-Ionic-Application-Id': appId,
        'Authorization': 'basic ' + auth
      },
      data: {
        "tokens":[
          "b284a6f7545368d2d3f753263e3e2f2b7795be5263ed7c95017f628730edeaad",
          "d609f7cba82fdd0a568d5ada649cddc5ebb65f08e7fc72599d8d47390bfc0f20"
        ],
        "notification":{
          "alert":"Hello World!",
          "ios":{
            "badge":1,
            "sound":"ping.aiff",
            "expiry": 1423238641,
            "priority": 10,
            "contentAvailable": 1,
            "payload":{
              "key1":"value",
              "key2":"value"
            }
          },
          "android":{
            "collapseKey":"foo",
            "delayWhileIdle":true,
            "timeToLive":300,
            "payload":{
              "key1":"value",
              "key2":"value"
            }
          }
        }
      }
    };

// Make the API call
    $http(req).success(function(resp){
      // Handle success
      console.log(resp);
    }).error(function(error){
      // Handle error
      console.log("Ionic Push: Push error...");
    });
  }

  $scope.vibrar = function () {
    $cordovaVibration.vibrate(100);
  }


  $scope.nome = "Fabiano Costa";
  $http.get('http://www.golpratasistemas.xyz/novel.php').then(function(response){
    console.log(response.data);
    $scope.categorias = response.data;

  })
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
