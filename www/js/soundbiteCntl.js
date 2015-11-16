angular.module('soundbiteCntl', [])

.controller('SoundbiteCtrl', function($scope, SoundbiteService) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = SoundbiteService.all();
  $scope.remove = function(chat) {
    SoundbiteService.remove(chat);
  };
});
