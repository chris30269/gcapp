angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, Events, Home) {
  $scope.events = Events.all();
  $scope.announcements = Home.allAnnouncements();
  $scope.stats = Home.allStats();
})

.controller('EventsCtrl', function($scope, Events) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.events = Events.all();

})

.controller('EventDetailCtrl', function($scope, $stateParams, Events) {
  $scope.event = Events.get($stateParams.eventId);
})

.controller('AnnouncementsCtrl', function($scope, Home) {
  $scope.announcements = Home.allAnnouncements();
})
.controller('AnnouncementDetailCtrl', function($scope, $stateParams, Home) {
  $scope.announcement = Home.getAnnouncement($stateParams.announcementId);
})

.controller('MusicCtrl', function($scope) {})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
